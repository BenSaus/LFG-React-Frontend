import React from "react"
import { RouteComponentProps } from "react-router"

import { useQuery } from "@apollo/client"
import * as Types from "generated/graphql"
import { GetUserDocument } from "generated/graphql"

import User from "components/User/User"
import { useSelector } from "react-redux"
import { RootType } from "store/rootReducer"
import { AuthState } from "store/slices/auth"
import { Typography, Button } from "@material-ui/core"

interface UserInfoParams {
    id: string | undefined
}

interface UserInfoProps extends RouteComponentProps<UserInfoParams> {}

const UserInfo: React.FC<UserInfoProps> = (props) => {
    // State
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    const userId = props.match.params.id
    const myUser = auth.user

    // GraphQL
    const { loading, error, data } = useQuery(GetUserDocument, {
        variables: { id: userId },
    })

    // Render
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const userInfo: Types.UsersPermissionsUser = data.user

    let myId: string = ""
    if (myUser !== null) {
        myId = myUser.id
    }

    const viewingMyProfile = Number(myId) === Number(userId)
    let editButton = null
    if (viewingMyProfile) {
        editButton = (
            <Button
                color="primary"
                variant="contained"
                style={{ marginTop: "1rem", marginLeft: "1rem" }}
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

            <Button
                color="primary"
                variant="contained"
                style={{ marginTop: "1rem" }}
                onClick={() => props.history.goBack()}
            >
                Back
            </Button>
            {editButton}
        </div>
    )
}

export default UserInfo
