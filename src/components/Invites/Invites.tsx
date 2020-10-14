import React from "react"
import * as Types from "../../types-and-hooks"
import Invite from "../../components/Invites/Invite/Invite"
import styles from "./Invites.module.css"

interface InvitessProps {
    invites?: Types.Invite[]
    clickedInvite?: (inviteId: string) => void
    clickedAccept?: (inviteId: string) => void
}

const Invites: React.FC<InvitessProps> = (props) => {
    let invitesJsx
    if (props.invites) {
        invitesJsx = props.invites.map((invite: Types.Invite) => {
            return (
                <Invite
                    invite={invite}
                    clicked={props.clickedInvite}
                    clickedAccept={props.clickedAccept}
                    key={invite.id}
                />
            )
        })
    }

    return <div className={styles.Invites}>{invitesJsx}</div>
}

export default Invites
