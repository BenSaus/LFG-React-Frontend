import { gql, useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"
import Applicants from "../../components/Applicants/Applicants"
import Members from "../../components/Members/Members"

const GET_GROUP = gql`
    query($id: ID!) {
        group(id: $id) {
            id
            name
            open_slots
            booking_status
            description
            min_age
            max_age
            applications(where: { status: "undecided" }) {
                id
                message
                status
                applicant {
                    id
                    username
                    age
                    about
                }
            }
            members {
                id
                username
                age
                about
            }
            invites {
                id
                message
                status
            }
            preferred_rooms {
                id
                name
            }
        }
    }
`

const ACCEPT_APPLICATION = gql`
    mutation($id: ID!) {
        acceptApplication(id: $id) {
            application {
                id
                status
                message
            }
            group {
                id
                name
            }
        }
    }
`
const REJECT_APPLICATION = gql`
    mutation($id: ID!) {
        rejectApplication(id: $id) {
            application {
                id
                status
                message
            }
        }
    }
`

interface ManageGroupParams {
    id: string
}

interface ManageGroupProps extends RouteComponentProps<ManageGroupParams> {}

const ManageGroup: React.FC<ManageGroupProps> = (props) => {
    const [applications, setApplications] = useState<Types.Application[]>([])
    const [members, setMembers] = useState<Types.UsersPermissionsUser[]>([])

    const { loading, error, data: groupRespData } = useQuery(GET_GROUP, {
        variables: { id: props.match.params.id },
        onCompleted: () => {
            console.log(groupRespData.group.applications)
            setApplications(groupRespData.group.applications)

            console.log(groupRespData.group.members)
            setMembers(groupRespData.group.members)
        },
    })

    const [acceptApplication, { data: acceptData }] = useMutation(
        ACCEPT_APPLICATION
    )
    const [rejectApplication, { data: rejectData }] = useMutation(
        REJECT_APPLICATION
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const groupData: Types.Group = groupRespData.group

    const handleAcceptApplication = async (applicationId: string) => {
        const result = await acceptApplication({
            variables: {
                id: applicationId,
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
        })
        // TODO: Check result here

        const updatedApplications = applications.filter(
            (app) => app.id !== applicationId
        )
        setApplications(updatedApplications)
    }

    return (
        <React.Fragment>
            <h1>Manage Group</h1>
            <h2>{groupData.name}</h2>
            <h3>Applicants</h3>
            <Applicants
                applications={applications}
                acceptApplication={handleAcceptApplication}
                rejectApplication={handleRejectApplication}
            />
            <h3>Members</h3>
            <Members members={members} />
            <button style={{ padding: "1rem" }}>Finalize Group</button>
        </React.Fragment>
    )
}

export default ManageGroup
