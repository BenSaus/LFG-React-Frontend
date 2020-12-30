import React from "react"
import Applicants from "./Applicants/Applicants"
import * as Types from "../../../generated/graphql"

interface ApplicationSectionProps {
    onAcceptApplication: (id: string) => Promise<void>
    onRejectApplication: (id: string) => Promise<void>
    onViewProfile: (id: string) => void
    applications: Types.Application[]
}

const ApplicationSection: React.FC<ApplicationSectionProps> = (props) => {
    let applicantsJSX = <p>No applications currently</p>
    if (props.applications.length > 0) {
        applicantsJSX = (
            <Applicants
                applications={props.applications}
                viewProfile={props.onViewProfile}
                acceptApplication={props.onAcceptApplication}
                rejectApplication={props.onRejectApplication}
            />
        )
    }

    return applicantsJSX
}

export default ApplicationSection
