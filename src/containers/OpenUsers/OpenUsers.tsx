import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import UserList from "../../components/UserList/UserList"
import {
    GetOpenUsersDocument,
    CreateInviteDocument,
} from "../../generated/graphql"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import * as Types from "../../generated/graphql"

interface OpenUsersParams {
    groupId: string
}

interface OpenUsersProps extends RouteComponentProps<OpenUsersParams> {}

const OpenUsers: React.FC<OpenUsersProps> = (props) => {
    const groupId = props.match.params.groupId

    // state
    const [filteredUsers, setFilteredUsers] = useState<
        Types.UsersPermissionsUser[]
    >([])

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const { loading, error, data } = useQuery(GetOpenUsersDocument, {
        variables: {
            groupId: groupId,
        },
        onCompleted: (data) => {
            const memberIds = data.group.members.map(
                (member: Types.UsersPermissionsUser) => member.id
            )
            const applicantIds = data.group.applications.map(
                (application: Types.Application) => application.applicant?.id
            )
            const inviteeIds = data.group.invites.map(
                (invite: Types.Invite) => invite.invitee?.id
            )
            let users: Types.UsersPermissionsUser[] = data.users

            // Remove the group leader
            users = users.filter((user) => user.id !== myId)

            // Remove members
            users = users.filter(
                (user) => memberIds.includes(user.id) === false
            )

            // Remove applicants
            users = users.filter(
                (user) => applicantIds.includes(user.id) === false
            )

            // Remove invitees
            users = users.filter(
                (user) => inviteeIds.includes(user.id) === false
            )

            setFilteredUsers(users)
        },
    })

    const [createInvite, { data: createInviteData }] = useMutation(
        CreateInviteDocument
    )

    // Handlers
    const onBackClick = () => {
        props.history.goBack()
    }

    const onInviteClick = async (userId: string) => {
        console.log("Invite Clicked", userId, groupId)
        // create new invite

        const result = await createInvite({
            variables: {
                groupId: groupId,
                inviteeId: userId,
                message: "New invite message",
            },
            context: {
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            },
        })

        const updatedUsers = filteredUsers.filter((user) => user.id !== userId)
        setFilteredUsers(updatedUsers)

        console.log(result)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    let usersListJSX = null
    if (filteredUsers.length > 0) {
        usersListJSX = (
            <UserList users={filteredUsers} onClickedInvite={onInviteClick} />
        )
    } else {
        usersListJSX = <h3>No eligable users found</h3>
    }

    return (
        <React.Fragment>
            <h1>Find More Members</h1>
            {usersListJSX}
            <button onClick={onBackClick}>Back</button>
        </React.Fragment>
    )
}

export default OpenUsers
