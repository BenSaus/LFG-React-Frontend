import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"

const GET_GROUP = gql`
    query($id: ID!) {
        group(id: $id) {
            id
            name
            booking_status
            min_age
            max_age
            leader {
                username
            }
            description
            open_slots
        }
    }
`

interface GroupInfoParams {
    id: string | undefined
}

interface GroupInfoProps extends RouteComponentProps<GroupInfoParams> {}

const GroupInfo: React.FC<GroupInfoProps> = (props) => {
    const groupId = props.match.params.id
    console.log(groupId)

    const { loading, error, data } = useQuery(GET_GROUP, {
        variables: { id: groupId },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const groupInfo: Types.Group = data.group
    const leader = groupInfo.leader
        ? groupInfo.leader.username
        : "Leader not found"

    const onApply = () => {
        props.history.push(`/apply/${groupId}`)
    }

    return (
        <React.Fragment>
            <div>
                <h2>Group Info</h2>
                <p>Group Name: {groupInfo.name}</p>
                <p>Leader: {leader}</p>
                <p>Description: {groupInfo.description}</p>
                <p>
                    Age Range: {groupInfo.min_age} - {groupInfo.max_age}
                </p>
                <p>Open Slots: {groupInfo.open_slots}</p>
            </div>
            <div>
                <button onClick={onApply}>Apply</button>
            </div>
        </React.Fragment>
    )
}

export default GroupInfo
