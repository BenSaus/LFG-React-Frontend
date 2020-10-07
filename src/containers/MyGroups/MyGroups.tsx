import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"

interface MyGroupsProps {}

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

const MyGroups: React.FC<MyGroupsProps> = () => {
    const { loading, error, data } = useQuery(GET_MY_GROUPS, {
        variables: {
            leader: 35, // TODO: HARD CODED...Setup in store
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
            <button>Create New Group</button>
            <Groups groups={data.groups} clickedGroup={onGroupClick} />
        </div>
    )
}

export default MyGroups
