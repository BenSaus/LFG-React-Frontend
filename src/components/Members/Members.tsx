import React from "react"
import * as Types from "../../types-and-hooks"
import styles from "./Members.module.css"
import Member from "./Member/Member"

interface MembersProps {
    members: Types.UsersPermissionsUser[]
}

const Members: React.FC<MembersProps> = (props) => {
    let membersJsx
    if (props.members) {
        membersJsx = props.members.map((member) => {
            return <Member member={member} key={member.id} />
        })
    }
    return <div className={styles.Members}>{membersJsx}</div>
}

export default Members
