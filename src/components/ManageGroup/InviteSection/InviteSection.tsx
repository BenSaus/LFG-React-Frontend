import React from "react"
import * as Types from "generated/graphql"
import Invites from "./Invites/Invites"

interface InviteSectionProps {
    invites: Types.Invite[]
    onDismissClicked: (id: string) => Promise<void>
}

const InviteSection: React.FC<InviteSectionProps> = (props) => {
    let invitesJSX = <p>No invites currently</p>
    if (props.invites.length > 0) {
        invitesJSX = (
            <Invites
                invites={props.invites}
                onDismissClicked={props.onDismissClicked}
            />
        )
    }

    return invitesJSX
}

export default InviteSection
