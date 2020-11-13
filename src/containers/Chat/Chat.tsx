import { useQuery } from "@apollo/client"
import React from "react"
import { RouteComponentProps } from "react-router"
import { GetGroupChatDocument } from "../../generated/graphql"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import styles from "./Chat.module.css"
import * as Types from "../../generated/graphql"

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
    const { loading, error, data } = useQuery(GetGroupChatDocument, {
        variables: { id: props.match.params.id },
        onCompleted: (data) => {
            console.log(data)
        },
    })

    // Handlers
    const onEditDetailsClick = (groupId: string) => {
        props.history.push("/group/edit/" + groupId)
    }

    const onManageMembersClick = (groupId: string) => {
        props.history.push("/group/manage/" + groupId)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const groupId = props.match.params.id
    const isLeader = myId === data.group.leader.id
    const leader = data.group.leader

    const leaderButtonsJSX = (
        <React.Fragment>
            <button onClick={() => onManageMembersClick(groupId)}>
                Manage Members
            </button>
            <button onClick={() => onEditDetailsClick(groupId)}>
                Edit Group Details
            </button>
        </React.Fragment>
    )

    const memberButtonsJSX = <button>Leave Group</button>

    const membersJSX = data.group.members.map(
        (member: Types.UsersPermissionsUser) => {
            return <p key={member.id}>{member.username}</p>
        }
    )

    return (
        <React.Fragment>
            <h2>{data.group.name}</h2>
            <h4>Status: {data.group.status}</h4>
            {isLeader ? leaderButtonsJSX : memberButtonsJSX}
            <br />
            <br />
            <div className={styles.ChatWindow}>
                <div className={styles.MemebersSection}>
                    <h3>Leader</h3>
                    <p key={leader.id}>{leader.username}</p>
                    <h3>Members</h3>
                    {membersJSX}
                </div>
                <div className={styles.MessagesSection}>
                    <h3>Messages</h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chat
