import React from "react"
import * as Types from "../../../generated/graphql"
import styles from "./Member.module.css"

interface MemberProps {
    member: Types.UsersPermissionsUser
    viewClicked: (memberId: string) => void
    removeClicked: (memberId: string) => void
}

const Member: React.FC<MemberProps> = (props) => {
    return (
        <div className={styles.Member}>
            <p>{props.member.username}</p>
            <div>
                <button onClick={() => props.viewClicked(props.member.id)}>
                    View
                </button>
                <button onClick={() => props.removeClicked(props.member.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Member
