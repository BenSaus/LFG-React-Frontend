import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import UserList from "../../components/UserList/UserList"
import IListAction from "../../shared/IListAction"
import {
    GetOpenUsersDocument,
    CreateInviteDocument,
} from "../../generated/graphql"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import * as Types from "../../generated/graphql"
import {
    Button,
    Card,
    CardContent,
    IconButton,
    Snackbar,
} from "@material-ui/core"
import { Close, FindInPage, PersonAdd } from "@material-ui/icons"
import InviteModal from "../../components/InviteModal/InviteModal"

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
    const [showPopup, setShowPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [
        userToInvite,
        setUserToInvite,
    ] = useState<Types.UsersPermissionsUser | null>(null)

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

    const onInviteClick = (userId: string) => {
        const user = filteredUsers.find((user) => user.id === userId)
        if (user) setUserToInvite(user)

        setShowModal(true)
    }

    const onCloseInviteModal = () => {
        setShowModal(false)
    }

    const onSendInvite = async (
        user: Types.UsersPermissionsUser,
        message: string
    ) => {
        const result = await createInvite({
            variables: {
                group: groupId,
                invitee: user.id,
                message, // TODO: WARNING: ERROR: THIS MUST BE SANITIZED !!!!!!!!!!!!
            },
            context: {
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            },
        })

        setShowModal(false)

        const updatedUsers = filteredUsers.filter(
            (filterUser) => filterUser.id !== user.id
        )

        setFilteredUsers(updatedUsers)
        setPopupMessage(`${user.username} Invited`)
        setShowPopup(true)
    }

    const onViewProfileClick = (userId: string) => {
        props.history.push(`/user/${userId}`)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    let usersListJSX = null
    if (filteredUsers.length > 0) {
        const actions: IListAction[] = [
            {
                tooltip: "View Profile",
                iconJSX: <FindInPage />,
                onClick: onViewProfileClick,
            },
            {
                tooltip: "Invite User",
                iconJSX: <PersonAdd />,
                onClick: onInviteClick,
            },
        ]

        usersListJSX = (
            <UserList
                users={filteredUsers}
                actions={actions}
                onClickListItem={onViewProfileClick}
            />
        )
    } else {
        usersListJSX = <h3>No eligable users found</h3>
    }

    return (
        <React.Fragment>
            <h1>Find More Members</h1>
            <Card>
                <CardContent>{usersListJSX}</CardContent>
            </Card>
            <Button
                color="primary"
                variant="contained"
                style={{ margin: "2rem" }}
                onClick={onBackClick}
            >
                Back
            </Button>

            {userToInvite ? (
                <InviteModal
                    showModal={showModal}
                    onClose={onCloseInviteModal}
                    onSendInvite={onSendInvite}
                    user={userToInvite}
                />
            ) : null}

            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={showPopup}
                autoHideDuration={3000}
                onClose={() => setShowPopup(false)}
                message={popupMessage}
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => setShowPopup(false)}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </React.Fragment>
    )
}

export default OpenUsers
