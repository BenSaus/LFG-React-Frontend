import React from "react"
import * as Types from "../../../../generated/graphql"
import Invite from "./Invite/Invite"
import styles from "./Invites.module.css"

interface InvitessProps {
    invites: Types.Invite[]
    onDismissClicked: (id: string) => Promise<void>
}

const Invites: React.FC<InvitessProps> = (props) => {
    let invitesJsx
    if (props.invites) {
        invitesJsx = props.invites.map((invite: Types.Invite) => {
            return (
                <Invite
                    invite={invite}
                    key={invite.id}
                    onDismissClicked={props.onDismissClicked}
                />
            )
        })
    }

    return <div className={styles.Invites}>{invitesJsx}</div>
}

export default Invites
