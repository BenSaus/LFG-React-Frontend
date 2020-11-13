import React from "react"
import Members from "../../Members/Members"
import * as Types from "../../../generated/graphql"

interface MembersSectionProps {
    onClickViewMember: (id: string) => Promise<void>
    onClickRemoveMember: (id: string) => Promise<void>
    members: Types.UsersPermissionsUser[]
    maxSlots: number
}

const MembersSection: React.FC<MembersSectionProps> = (props) => {
    let membersJSX = <p>No Members</p>
    if (props.members.length > 0) {
        // const openSlotNum = groupRespData.group.members_max - members.length
        // const openSlots

        membersJSX = (
            <Members
                viewClicked={props.onClickViewMember}
                removeClicked={props.onClickRemoveMember}
                members={props.members}
            />
        )
    }

    return membersJSX
}

export default MembersSection
