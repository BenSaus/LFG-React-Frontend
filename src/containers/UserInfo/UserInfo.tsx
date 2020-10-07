import { gql, useQuery } from "@apollo/client"
import React from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../types-and-hooks"
import User from "../../components/User/User"

const GET_USER = gql`
    query($id: ID!) {
        user(id: $id) {
            id
            username
            email
            age
            image {
                url
                previewUrl
            }
            about
            open_to_invite
            hide_age
            achievements {
                id
                name
                image {
                    previewUrl
                    url
                }
            }
        }
    }
`

interface UserInfoParams {
    id: string | undefined
}

interface UserInfoProps extends RouteComponentProps<UserInfoParams> {}

const UserInfo: React.FC<UserInfoProps> = (props) => {
    const userId = props.match.params.id

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const userInfo: Types.UsersPermissionsUser = data.user

    return (
        <div>
            <h1>User Profile</h1>
            <User user={userInfo} />
        </div>
    )
}

export default UserInfo
