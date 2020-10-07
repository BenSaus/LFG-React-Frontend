import React from "react"
import * as Types from "../../../types-and-hooks"
import styles from "./Invite.module.css"

interface InviteProps {
    invite: Types.Invite
    clicked: (inviteId: string) => void
}

const Invite: React.FC<InviteProps> = (props) => {
    return (
        <div
            className={styles.Invite}
            onClick={() => props.clicked(props.invite.id)}
        >
            <p>Group Name: {props.invite.group?.name}</p>
            <p>Message: {props.invite.message}</p>
            <button>Accept</button>
        </div>
    )
}

export default Invite
