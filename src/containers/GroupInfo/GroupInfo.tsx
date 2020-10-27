import React from "react"
import { useQuery } from "@apollo/client"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"
import { Link } from "react-router-dom"
import { GET_GROUP } from "../../graphql/queries"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"

interface GroupInfoParams {
    id: string | undefined
}

interface GroupInfoProps extends RouteComponentProps<GroupInfoParams> {}

const GroupInfo: React.FC<GroupInfoProps> = (props) => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)

    const groupId = props.match.params.id

    const { loading, error, data } = useQuery(GET_GROUP, {
        variables: { id: groupId },
        context: {
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const groupInfo: Types.Group = data.group
    // const leader = groupInfo.leader
    //     ? groupInfo.leader.username
    //     : "Leader not found" // TODO: This should be a page error

    const leader = (
        <Link to={`/user/${groupInfo.leader?.id}`}>
            <span>{groupInfo.leader?.username}</span>
        </Link>
    )

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
