import { useQuery } from "@apollo/client"
import React from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"
import User from "../../components/User/User"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { UserState } from "../../store/slices/user"
import { GET_USER } from "../../graphql/queries"

interface UserInfoParams {
    id: string | undefined
}

interface UserInfoProps extends RouteComponentProps<UserInfoParams> {}

const UserInfo: React.FC<UserInfoProps> = (props) => {
    const userId = props.match.params.id
    const myUser = useSelector<RootType, UserState>((state) => state.user)
    console.log("myUser", myUser)

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const userInfo: Types.UsersPermissionsUser = data.user

    let editButton = null
    let myId: string = ""
    if (myUser.user !== null) {
        myId = myUser.user.id
    }
    const viewingMyProfile = Number(myId) === Number(userId)
    console.log(
        "myId === userId",
        myId,
        userId,
        Number(myId) === Number(userId)
    )

    if (viewingMyProfile) {
        editButton = (
            <button style={{ padding: "0.5rem", margin: "0.25rem" }}>
                Edit
            </button>
        )
    }

    return (
        <div>
            <h1>User Profile</h1>
            {editButton}
            <User user={userInfo} />
        </div>
    )
}

export default UserInfo
