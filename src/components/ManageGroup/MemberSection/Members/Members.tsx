import React from "react"
import * as Types from "generated/graphql"

import Member from "./Member/Member"
import OpenSlot from "./OpenSlot/OpenSlot"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
})

interface MembersProps {
    members: Types.UsersPermissionsUser[]
    memberMax: number
    onClickViewMember: (memberId: string) => void
    onClickRemoveMember: (memberId: string) => void
    showOpenSlots: boolean
}

const Members: React.FC<MembersProps> = (props) => {
    const classes = useStyles()
    let membersJsx
    let openSlotsJSX = []

    if (props.members) {
        membersJsx = props.members.map((member) => {
            return (
                <Member
                    onClickView={props.onClickViewMember}
                    onClickRemove={props.onClickRemoveMember}
                    member={member}
                    key={member.id}
                />
            )
        })
    }

    if (props.showOpenSlots) {
        const openSlotNum = props.memberMax - props.members.length

        for (let x = 0; x < openSlotNum; x++) {
            openSlotsJSX.push(<OpenSlot key={x} />)
        }
    }

    return (
        <List className={classes.root}>
            {membersJsx}
            {openSlotsJSX}
        </List>
    )
}

export default Members
