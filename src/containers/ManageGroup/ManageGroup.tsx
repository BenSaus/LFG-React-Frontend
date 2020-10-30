import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"
import Applicants from "../../components/Applicants/Applicants"
import Members from "../../components/Members/Members"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { useSelector } from "react-redux"
import {
    AcceptApplicationDocument,
    ManageGetGroupDocument,
    RejectApplicationDocument,
} from "../../generated/graphql"

interface ManageGroupParams {
    id: string
}

interface ManageGroupProps extends RouteComponentProps<ManageGroupParams> {}

const ManageGroup: React.FC<ManageGroupProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // State
    const [applications, setApplications] = useState<Types.Application[]>([])
    const [members, setMembers] = useState<Types.UsersPermissionsUser[]>([])

    // GraphQL
    const { loading, error, data: groupRespData } = useQuery(
        ManageGetGroupDocument,
        {
            variables: { id: props.match.params.id },
            onCompleted: (data) => {
                setApplications(data.group.applications)

                const membersWithoutLeader = data.group.members.filter(
                    (group: Types.Group) => {
                        console.log(group)

                        console.log(group?.id, myId, group?.id !== myId)

                        return group?.id !== myId
                    }
                )
                setMembers(membersWithoutLeader)
            },
        }
    )
    const [acceptApplication, { data: acceptData }] = useMutation(
        AcceptApplicationDocument
    )
    const [rejectApplication, { data: rejectData }] = useMutation(
        RejectApplicationDocument
    )

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const handleAcceptApplication = async (applicationId: string) => {
        const result = await acceptApplication({
            variables: {
                id: applicationId,
            },
            context: {
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            },
        })
        // TODO: Check result here

        const acceptedApplication = applications.find(
            (app) => app.id === applicationId
        )
        const acceptedApplicant = acceptedApplication?.applicant

        if (acceptedApplicant !== null && acceptedApplicant !== undefined) {
            const updatedMembers = [...members]
            updatedMembers.push(acceptedApplicant)

            setMembers(updatedMembers)
            const updatedApplications = applications.filter(
                (app) => app.id !== applicationId
            )
            setApplications(updatedApplications)
        } else {
            // TODO: Throw error here
        }
    }

    const handleRejectApplication = async (applicationId: string) => {
        const result = await rejectApplication({
            variables: {
                id: applicationId,
            },
            context: {
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            },
        })
        // TODO: Check result here

        const updatedApplications = applications.filter(
            (app) => app.id !== applicationId
        )
        setApplications(updatedApplications)
    }

    let applicantsJSX = <p>No Applicants</p>
    if (applications.length > 0) {
        applicantsJSX = (
            <Applicants
                applications={applications}
                acceptApplication={handleAcceptApplication}
                rejectApplication={handleRejectApplication}
            />
        )
    }

    let membersJSX = <p>No Members</p>
    if (members.length > 0) {
        membersJSX = <Members members={members} />
    }

    return (
        <React.Fragment>
            <h1>Manage Group</h1>
            <h2>{groupRespData.group.name}</h2>
            <button
                onClick={() => {
                    props.history.push(`/group/edit/${props.match.params.id}`)
                }}
            >
                Edit Group Details
            </button>
            <h3>Applicants</h3>
            {applicantsJSX}
            <h3>Members</h3>
            {membersJSX}
            <button style={{ padding: "1rem" }}>Finalize Group</button>
        </React.Fragment>
    )
}

export default ManageGroup
