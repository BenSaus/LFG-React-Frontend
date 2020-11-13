import React from "react"
import * as Types from "../../../../../generated/graphql"
import styles from "./Invite.module.css"

interface InviteProps {
    invite: Types.Invite
}

const Invite: React.FC<InviteProps> = (props) => {
    return (
        <div className={styles.Invite}>
            <p>Invitee: {props.invite.invitee?.username}</p>
            <p>Message: {props.invite.message}</p>
            <p>Status: {props.invite.status}</p>
        </div>
    )
}

export default Invite
