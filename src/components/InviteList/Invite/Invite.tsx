import React from "react"
import * as Types from "generated/graphql"
import styles from "./Invite.module.css"

interface InviteProps {
    invite: Types.Invite
    onClicked?: (inviteId: string) => void
    onClickedAccept?: (inviteId: string) => void
    onClickedReject?: (inviteId: string) => void
}

const Invite: React.FC<InviteProps> = (props) => {
    return (
        <div
            className={styles.Invite}
            onClick={() => {
                if (props.onClicked) return props.onClicked(props.invite.id)
            }}
        >
            <p>Group Name: {props.invite.group?.name}</p>
            <p>Message: {props.invite.message}</p>
            <div>
                <button
                    onClick={() => {
                        if (props.onClickedAccept)
                            return props.onClickedAccept(props.invite.id)
                    }}
                >
                    Accept
                </button>
                <button
                    onClick={() => {
                        if (props.onClickedReject)
                            return props.onClickedReject(props.invite.id)
                    }}
                >
                    Reject
                </button>
            </div>
        </div>
    )
}

export default Invite
