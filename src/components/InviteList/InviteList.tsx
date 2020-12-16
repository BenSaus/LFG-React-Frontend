import React from "react"
import * as Types from "../../generated/graphql"
import Invite from "./Invite/Invite"
import styles from "./InviteList.module.css"

interface InviteListProps {
    invites?: Types.Invite[]
    onClickedInvite?: (inviteId: string) => void
    onClickedAccept?: (inviteId: string) => void
    onClickedReject?: (inviteId: string) => void
}

const InviteList: React.FC<InviteListProps> = (props) => {
    let invitesJsx
    if (props.invites) {
        invitesJsx = props.invites.map((invite: Types.Invite) => {
            return (
                <Invite
                    invite={invite}
                    onClicked={props.onClickedInvite}
                    onClickedAccept={props.onClickedAccept}
                    onClickedReject={props.onClickedReject}
                    key={invite.id}
                />
            )
        })
    }

    return <div className={styles.InviteList}>{invitesJsx}</div>
}

export default InviteList
