import React from "react"
import * as Types from "../../../generated/graphql"
import Invites from "./Invites/Invites"

interface InviteSectionProps {
    invites: Types.Invite[]
}

const InviteSection: React.FC<InviteSectionProps> = (props) => {
    let invitesJSX = <p>No Invites Sent</p>
    if (props.invites.length > 0) {
        invitesJSX = <Invites invites={props.invites} />
    }

    return invitesJSX
}

export default InviteSection
