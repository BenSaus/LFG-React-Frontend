import React from "react"
import * as Types from "../../../../generated/graphql"
import styles from "./Members.module.css"
import Member from "./Member/Member"
import OpenSlot from "./OpenSlot/OpenSlot"

interface MembersProps {
    members: Types.UsersPermissionsUser[]
    membersMax: number
    viewClicked: (memberId: string) => void
    removeClicked: (memberId: string) => void
    showOpenSlots: boolean
}

const Members: React.FC<MembersProps> = (props) => {
    let membersJsx
    let openSlotsJSX = []

    if (props.members) {
        membersJsx = props.members.map((member) => {
            return (
                <Member
                    viewClicked={props.viewClicked}
                    removeClicked={props.removeClicked}
                    member={member}
                    key={member.id}
                />
            )
        })
    }

    if (props.showOpenSlots) {
        const openSlotNum = props.membersMax - props.members.length
        console.log("openSlotNum", openSlotNum)

        for (let x = 0; x < openSlotNum; x++) {
            openSlotsJSX.push(<OpenSlot key={x} />)
        }
    }

    return (
        <div className={styles.Members}>
            {membersJsx}
            {openSlotsJSX}
        </div>
    )
}

export default Members
