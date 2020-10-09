import React from "react"
import * as Types from "../../../types-and-hooks"
import styles from "./Member.module.css"

interface MemberProps {
    member: Types.UsersPermissionsUser
}

const Member: React.FC<MemberProps> = (props) => {
    return (
        <div className={styles.Member}>
            <p>{props.member.username}</p>
        </div>
    )
}

export default Member
