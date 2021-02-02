import React from "react"
import { Link } from "react-router-dom"
import * as Types from "generated/graphql"
import styles from "./User.module.css" // TODO: Remove this

interface UserProps {
    user: Types.UsersPermissionsUser
    onClicked?: (userId: string) => void
    onClickedInvite?: (userId: string) => void
}

const User: React.FC<UserProps> = (props) => {
    return (
        <div
            className={styles.User}
            onClick={() => {
                if (props.onClicked) return props.onClicked(props.user.id)
            }}
        >
            <div>
                <p>{props.user.username}</p>
            </div>
            <div>
                <p>About: {props.user.about}</p>
            </div>
            <div>
                <Link to={`/user/${props.user.id}`}>
                    <button>View Profile</button>
                </Link>
                <button
                    onClick={() => {
                        if (props.onClickedInvite)
                            return props.onClickedInvite(props.user.id)
                    }}
                >
                    Invite
                </button>
            </div>
        </div>
    )
}

export default User
