import { useQuery } from "@apollo/client"
import React from "react"
import { RouteComponentProps } from "react-router"
import { GetGroupDocument } from "../../generated/graphql"
import * as Types from "../../generated/graphql"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"

interface ChatParams {
    id: string
}
interface ChatProps extends RouteComponentProps<ChatParams> {}

const Chat: React.FC<ChatProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const { loading, error, data } = useQuery(GetGroupDocument, {
        variables: { id: props.match.params.id },
        onCompleted: (data) => {
            console.log(data)
        },
    })

    // Handlers
    const onEditDetailsClick = (groupId: string) => {
        props.history.push("/group/edit/" + groupId)
    }

    const onManageMemebersClick = (groupId: string) => {
        props.history.push("/group/manage/" + groupId)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const groupId = props.match.params.id
    const leader = myId === data.group.leader.id

    const leaderButtonsJSX = (
        <React.Fragment>
            <button onClick={() => onManageMemebersClick(groupId)}>
                Manage Memebers
            </button>
            <button onClick={() => onEditDetailsClick(groupId)}>
                Edit Group Details
            </button>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <h2>{data.group.name}</h2>
            <p></p>
            {leader ? leaderButtonsJSX : null}
        </React.Fragment>
    )
}

export default Chat
