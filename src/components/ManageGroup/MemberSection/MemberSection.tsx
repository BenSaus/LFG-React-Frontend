import React from "react"
import Members from "./Members/Members"
import * as Types from "generated/graphql"

interface MembersSectionProps {
    onClickViewMember: (id: string) => Promise<void>
    onClickRemoveMember: (id: string) => Promise<void>
    members: Types.UsersPermissionsUser[]
    membersMax: number
    showOpenSlots: boolean
}

const MembersSection: React.FC<MembersSectionProps> = (props) => {
    let membersJSX = <p>No Members</p>

    membersJSX = (
        <Members
            membersMax={props.membersMax}
            viewClicked={props.onClickViewMember}
            removeClicked={props.onClickRemoveMember}
            members={props.members}
            showOpenSlots={props.showOpenSlots}
        />
    )

    return <React.Fragment>{membersJSX}</React.Fragment>
}

export default MembersSection
