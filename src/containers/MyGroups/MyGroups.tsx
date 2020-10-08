import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"

interface MyGroupsProps extends RouteComponentProps {}

// TODO: Use user(Id) {leading_groups} instead here
const GET_MY_GROUPS = gql`
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

const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const { loading, error, data } = useQuery(GET_MY_GROUPS, {
        variables: {
            leader: 34, // TODO: HARD CODED...Setup in store
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onGroupClick = (groupId: string) => {
        // open edit group here
        console.log("Clicked group: ", groupId)
    }

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
            <Groups groups={data.groups} clickedGroup={onGroupClick} />
        </div>
    )
}

export default MyGroups
