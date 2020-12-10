import React from "react"
import * as Types from "../../generated/graphql"
import User from "./User/User"
import styles from "./UserList.module.css"

interface UserListProps {
    users?: Types.UsersPermissionsUser[]
    onClicked?: (userId: string) => void
    onClickedInvite?: (userId: string) => void
}

const UserList: React.FC<UserListProps> = (props) => {
    let usersJsx
    console.log(props.users)

    if (props.users) {
        usersJsx = props.users.map((user: Types.UsersPermissionsUser) => {
            return (
                <User
                    user={user}
                    onClicked={props.onClicked}
                    onClickedInvite={props.onClickedInvite}
                    key={user.id}
                />
            )
        })
    }

    return <div className={styles.UserList}>{usersJsx}</div>
}

export default UserList
