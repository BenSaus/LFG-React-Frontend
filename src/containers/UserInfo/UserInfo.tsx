import { useQuery } from "@apollo/client"
import React from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../generated/graphql"
import User from "../../components/User/User"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { GetUserDocument } from "../../generated/graphql"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

interface UserInfoParams {
    id: string | undefined
}

interface UserInfoProps extends RouteComponentProps<UserInfoParams> {}

const UserInfo: React.FC<UserInfoProps> = (props) => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    const userId = props.match.params.id
    const myUser = auth.user
    console.log("myUser", myUser)

    const { loading, error, data } = useQuery(GetUserDocument, {
        variables: { id: userId },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const userInfo: Types.UsersPermissionsUser = data.user

    let editButton = null
    let myId: string = ""
    if (myUser !== null) {
        myId = myUser.id
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
            <Button
                color="primary"
                variant="contained"
                style={{ margin: "1rem" }}
            >
                Edit
            </Button>
        )
    }

    return (
        <div>
            <Typography variant="h4" style={{ margin: "1rem" }}>
                User Profile
            </Typography>
            <User user={userInfo} />
            {editButton}
            <Button
                color="primary"
                variant="contained"
                style={{ margin: "1rem" }}
                onClick={() => props.history.goBack()}
            >
                Back
            </Button>
        </div>
    )
}

export default UserInfo
