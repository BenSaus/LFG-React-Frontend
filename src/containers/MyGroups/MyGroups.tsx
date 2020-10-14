import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"

interface MyGroupsProps extends RouteComponentProps {}

// TODO: Use user(Id) {leading_groups} instead here
const GET_GROUPS_LEADER = gql`
    query($leader: ID!) {
        groups(where: { leader: $leader }) {
            id
            name
            open_slots
            max_age
            min_age
            booking_status
            description
        }
    }
`

const GET_GROUPS = gql`
    query($id: ID!) {
        user(id: $id) {
            id
            username
            groups {
                id
                name
                open_slots
                max_age
                min_age
                booking_status
                description
            }
        }
    }
`

const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const { loading: loadingLead, error: errorLead, data: dataLead } = useQuery(
        GET_GROUPS_LEADER,
        {
            variables: {
                leader: 34, // TODO: HARD CODED...Setup in store
            },
        }
    )
    const { loading, error, data } = useQuery(GET_GROUPS, {
        variables: {
            id: 34, // TODO: HARD CODED...Setup in store
        },
        onCompleted: () => {
            // filter out leadership groups and store in state here
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onGroupLeadClick = (groupId: string) => {
        console.log("Clicked group: ", groupId)
        // If it's a group I lead then
        props.history.push("/group/manage/" + groupId)
    }

    const onGroupMemberClick = (groupId: string) => {
        console.log("Clicked member group: ", groupId)
    }

    console.log(data)

    return (
        <div>
            <h1>My Groups</h1>
            <button
                style={{ padding: "0.5rem" }}
                onClick={(_) => {
                    props.history.push("/group/create")
                }}
            >
                Create New Group
            </button>
            <h3>Groups I Lead</h3>
            <Groups groups={dataLead.groups} clickedGroup={onGroupLeadClick} />
            <h3>Groups I'm a member of </h3>
            <Groups
                groups={data.user.groups}
                clickedGroup={onGroupMemberClick}
            />
        </div>
    )
}

export default MyGroups
