import React from "react"
import * as Types from "../../../types-and-hooks"
import styles from "./Invite.module.css"

interface InviteProps {
    invite: Types.Invite
    clicked?: (inviteId: string) => void
    clickedAccept?: (inviteId: string) => void
}

const Invite: React.FC<InviteProps> = (props) => {
    return (
        <div
            className={styles.Invite}
            onClick={() => {
                if (props.clicked) return props.clicked(props.invite.id)
            }}
        >
            <p>Group Name: {props.invite.group?.name}</p>
            <p>Message: {props.invite.message}</p>
            <button
                onClick={() => {
                    if (props.clickedAccept)
                        return props.clickedAccept(props.invite.id)
                }}
            >
                Accept
            </button>
        </div>
    )
}

export default Invite
