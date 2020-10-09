import { gql, useMutation, useQuery } from "@apollo/client"
import React from "react"
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

const ACCEPT_REJECT_APPLICATION = gql`
    mutation($id: ID!, $status: ENUM_APPLICATION_STATUS!) {
        updateApplication(
            input: { where: { id: $id }, data: { status: $status } }
        ) {
            application {
                id
                status
                message
            }
        }
    }
`

interface ManageGroupParams {
    id: string | undefined
}

interface ManageGroupProps extends RouteComponentProps<ManageGroupParams> {}

const ManageGroup: React.FC<ManageGroupProps> = (props) => {
    const { loading, error, data: groupGQLData } = useQuery(GET_GROUP, {
        variables: { id: props.match.params.id },
    })

    const [acceptRejectApplication, { data: acceptData }] = useMutation(
        ACCEPT_REJECT_APPLICATION
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const groupData: Types.Group = groupGQLData.group
    const applications: Types.Application[] = groupGQLData.group.applications
    const members: Types.UsersPermissionsUser[] = groupGQLData.group.members
    console.log(members)

    const handleAcceptApplication = async (applicationId: string) => {
        console.log("Accept", applicationId)
        const result = await acceptRejectApplication({
            variables: { id: applicationId, status: "accepted" },
        })
        console.log(result)
    }

    const handleRejectApplication = (applicationId: string) => {
        console.log(applicationId)
        acceptRejectApplication({
            variables: { id: applicationId, status: "rejected" },
        })
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
