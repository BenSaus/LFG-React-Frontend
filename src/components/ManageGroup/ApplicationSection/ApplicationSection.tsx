import React, { useState } from "react"
import Applicants from "./Applicants/Applicants"
import * as Types from "generated/graphql"
import { useMutation } from "@apollo/client"
import {
    AcceptApplicationDocument,
    RejectApplicationDocument,
} from "generated/graphql"

interface ApplicationSectionProps {
    applications: Types.Application[]
    onViewApplicant: (memberId: string) => void
    onAcceptApplication?: (appId: string) => void
    onRejectApplication?: (appId: string) => void
}

const ApplicationSection: React.FC<ApplicationSectionProps> = (props) => {
    // State
    const [applications, setApplications] = useState<Types.Application[]>(
        props.applications
    )

    // GraphQL
    const [acceptApplication, { data: acceptData }] = useMutation(
        AcceptApplicationDocument
    )
    const [rejectApplication, { data: rejectData }] = useMutation(
        RejectApplicationDocument
    )

    // Handlers
    const onAcceptApplication = async (applicationId: string) => {
        const result = await acceptApplication({
            variables: {
                id: applicationId,
            },
        })

        const acceptedApplication = applications.find(
            (app) => app.id === applicationId
        )

        // TODO: Clean this up
        const acceptedApplicant = acceptedApplication?.applicant
        if (acceptedApplicant !== null && acceptedApplicant !== undefined) {
            const updatedApplications = applications.filter(
                (app) => app.id !== applicationId
            )
            setApplications(updatedApplications)

            if (props.onAcceptApplication)
                props.onAcceptApplication(applicationId)
        } else {
            // TODO: Throw error here
        }
    }

    const onRejectApplication = async (applicationId: string) => {
        const result = await rejectApplication({
            variables: {
                id: applicationId,
            },
        })

        const updatedApplications = applications.filter(
            (app) => app.id !== applicationId
        )
        setApplications(updatedApplications)

        if (props.onRejectApplication) props.onRejectApplication(applicationId)
    }

    let applicantsJSX = <p>No applications currently</p>
    if (props.applications.length > 0) {
        applicantsJSX = (
            <Applicants
                applications={props.applications}
                viewProfile={props.onViewApplicant}
                acceptApplication={onAcceptApplication}
                rejectApplication={onRejectApplication}
            />
        )
    }

    return applicantsJSX
}

export default ApplicationSection
