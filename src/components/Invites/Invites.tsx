import React from "react"
import * as Types from "../../generated/graphql"
import Invite from "../../components/Invites/Invite/Invite"
import styles from "./Invites.module.css"

interface InvitessProps {
    invites?: Types.Invite[]
    onClickedInvite?: (inviteId: string) => void
    onClickedAccept?: (inviteId: string) => void
}

const Invites: React.FC<InvitessProps> = (props) => {
    let invitesJsx
    if (props.invites) {
        invitesJsx = props.invites.map((invite: Types.Invite) => {
            return (
                <Invite
                    invite={invite}
                    onClicked={props.onClickedInvite}
                    onClickedAccept={props.onClickedAccept}
                    key={invite.id}
                />
            )
        })
    }

    return <div className={styles.Invites}>{invitesJsx}</div>
}

export default Invites
