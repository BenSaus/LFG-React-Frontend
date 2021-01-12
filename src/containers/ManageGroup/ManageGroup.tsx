import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../generated/graphql"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { useSelector } from "react-redux"
import {
    AcceptApplicationDocument,
    ManageGetGroupDocument,
    RejectApplicationDocument,
    CloseGroupDocument,
    OpenGroupDocument,
    RemoveMemberDocument,
    SetMemberMaxDocument,
    DismissInviteDocument,
} from "../../generated/graphql"
import MembersSection from "../../components/ManageGroup/MemberSection/MemberSection"
import ApplicationSection from "../../components/ManageGroup/ApplicationSection/ApplicationSection"
import InviteSection from "../../components/ManageGroup/InviteSection/InviteSection"

import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Chip,
    Tooltip,
    Switch,
    Box,
} from "@material-ui/core"

import { PersonAdd, Delete } from "@material-ui/icons"

import Settings from "@material-ui/icons/Settings"
import { makeStyles } from "@material-ui/core/styles"
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog"

const useStyles = makeStyles((theme) => ({
    card: {
        padding: "1rem",
        margin: "2rem",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
    },
}))

interface ManageGroupParams {
    id: string
}

interface ManageGroupProps extends RouteComponentProps<ManageGroupParams> {}

const ManageGroup: React.FC<ManageGroupProps> = (props) => {
    const classes = useStyles()

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // State
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [applications, setApplications] = useState<Types.Application[]>([])
    const [invites, setInvites] = useState<Types.Invite[]>([])
    const [members, setMembers] = useState<Types.UsersPermissionsUser[]>([])

    // GraphQL
    const { loading, error, data: groupRespData } = useQuery(
        ManageGetGroupDocument,
        {
            variables: { id: props.match.params.id },
            onCompleted: (data) => {
                console.log(data.group.invites)

                setApplications(data.group.applications)
                setInvites(data.group.invites)
                setMembers(data.group.members)
            },
        }
    )
    const [acceptApplication, { data: acceptData }] = useMutation(
        AcceptApplicationDocument
    )
    const [rejectApplication, { data: rejectData }] = useMutation(
        RejectApplicationDocument
    )

    const [dismissInvite, { data: dismissData }] = useMutation(
        DismissInviteDocument
    )

    const [closeGroup, { data: closeData }] = useMutation(CloseGroupDocument)
    const [openGroup, { data: openData }] = useMutation(OpenGroupDocument)
    const [removeMember, { data: removeData }] = useMutation(
        RemoveMemberDocument
    )
    const [setMemberMax, { data: setMemberMaxData }] = useMutation(
        SetMemberMaxDocument
    )

    // Handlers
    const onAcceptApplication = async (applicationId: string) => {
        const result = await acceptApplication({
            variables: {
                id: applicationId,
            },
            context: {
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            },
        })
        // TODO: Check result here

        const acceptedApplication = applications.find(
            (app) => app.id === applicationId
        )
        const acceptedApplicant = acceptedApplication?.applicant

        if (acceptedApplicant !== null && acceptedApplicant !== undefined) {
            const updatedMembers = [...members]
            updatedMembers.push(acceptedApplicant)

            setMembers(updatedMembers)
            const updatedApplications = applications.filter(
                (app) => app.id !== applicationId
            )
            setApplications(updatedApplications)
        } else {
            // TODO: Throw error here
        }
    }

    const onRejectApplication = async (applicationId: string) => {
        const result = await rejectApplication({
            variables: {
                id: applicationId,
            },
        })
        // TODO: Check result here

        const updatedApplications = applications.filter(
            (app) => app.id !== applicationId
        )
        setApplications(updatedApplications)
    }

    const onDismissInviteClick = async (inviteId: string) => {
        const resp = await dismissInvite({
            variables: {
                id: inviteId,
            },
        })

        const updatedInvites = invites.filter(
            (invite) => invite.id !== inviteId
        )
        setInvites(updatedInvites)
    }

    const onClickViewMember = async (memberId: string) => {
        props.history.push(`/user/${memberId}`)
    }

    const onClickRemoveMember = async (memberId: string) => {
        const resp = await removeMember({
            variables: {
                groupId: groupRespData.group.id,
                memberId: memberId,
            },
        })

        const updatedMembers: Types.UsersPermissionsUser[] = members.filter(
            (member: Types.UsersPermissionsUser) => member.id !== memberId
        )

        setMembers(updatedMembers)
    }

    const onCloseGroupClick = async (groupId: string) => {
        const resp = await closeGroup({
            variables: {
                id: groupId,
            },
        })
    }

    const onOpenGroupClick = async (groupId: string) => {
        const resp = await openGroup({
            variables: {
                id: groupId,
            },
        })
    }

    const onToggleOpenGroup = (event: any) => {
        if (closed) {
            onOpenGroupClick(groupRespData.group.id)
        } else {
            onCloseGroupClick(groupRespData.group.id)
        }
    }

    const onAddMemberSlot = async () => {
        // TODO: Clamp this (1, GroupMax)
        // HARDCODED: The max and min group sizes are hardcoded
        const member_max = Math.min(
            Math.max(groupRespData.group.member_max + 1, 1),
            8
        )

        const resp = await setMemberMax({
            variables: {
                id: groupRespData.group.id,
                member_max,
            },
        })
    }

    const onRemoveMemberSlot = async () => {
        // do not allow member number > member_max

        // TODO: Clamp this (1, GroupMax)
        // HARDCODED: The max and min group sizes are hardcoded
        const memberMinimum = Math.max(groupRespData.group.members.length, 1)

        const member_max = Math.min(
            Math.max(groupRespData.group.member_max - 1, memberMinimum),
            8
        )

        const resp = await setMemberMax({
            variables: {
                id: groupRespData.group.id,
                member_max,
            },
        })
    }

    // Render

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    let closed = groupRespData.group.status !== "open"

    let appInvSectionJSX = null
    if (closed) {
        appInvSectionJSX = (
            <React.Fragment>
                <p>
                    Membership is closed. If you want to add more members open
                    membership.
                </p>
            </React.Fragment>
        )
    } else {
        appInvSectionJSX = (
            <React.Fragment>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.cardTitle}
                            variant="h5"
                            component="h2"
                        >
                            Applications
                        </Typography>
                        <ApplicationSection
                            applications={applications}
                            onViewProfile={onClickViewMember}
                            onAcceptApplication={onAcceptApplication}
                            onRejectApplication={onRejectApplication}
                        />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.cardTitle}
                            variant="h5"
                            component="h2"
                        >
                            Invites
                        </Typography>
                        <InviteSection
                            invites={invites}
                            onDismissClicked={onDismissInviteClick}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            onClick={() => {
                                props.history.push(
                                    `/openUsers/${groupRespData.group.id}`
                                )
                            }}
                        >
                            Find More Members
                        </Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Typography variant="h4">
                {groupRespData.group.name}
                <Tooltip title="Edit Group Details">
                    <IconButton
                        onClick={() => {
                            props.history.push(
                                `/group/edit/${props.match.params.id}`
                            )
                        }}
                    >
                        <Settings />
                    </IconButton>
                </Tooltip>
            </Typography>

            <Typography variant="h6">Manage Members</Typography>

            <Card className={classes.card}>
                <CardContent>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottom: "1px solid #ddd",
                        }}
                    >
                        <Typography
                            className={classes.cardTitle}
                            variant="h5"
                            component="h2"
                            style={{ marginBottom: "1rem" }}
                        >
                            Membership
                        </Typography>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            <Button
                                onClick={() => setShowConfirmDialog(true)}
                                variant="contained"
                                color="primary"
                                size="small"
                            >
                                {closed
                                    ? "Open Membership"
                                    : "Close Membership"}
                            </Button>

                            <ConfirmDialog
                                title={
                                    closed
                                        ? "Open Membership?"
                                        : "Close membership?"
                                }
                                open={showConfirmDialog}
                                setOpen={setShowConfirmDialog}
                                onConfirm={() =>
                                    closed
                                        ? onOpenGroupClick(
                                              groupRespData.group.id
                                          )
                                        : onCloseGroupClick(
                                              groupRespData.group.id
                                          )
                                }
                            >
                                {closed
                                    ? `Do you want to open membership? `
                                    : `Are you ready close membership? When membership is closed, you will be able to book an escape room.`}
                            </ConfirmDialog>
                        </div>
                    </div>

                    <MembersSection
                        membersMax={groupRespData.group.member_max}
                        members={members}
                        onClickViewMember={onClickViewMember}
                        onClickRemoveMember={onClickRemoveMember}
                        showOpenSlots={!closed}
                    />
                    {closed === false ? (
                        <React.Fragment>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={onAddMemberSlot}
                                style={{ marginRight: "1rem" }}
                                startIcon={<PersonAdd />}
                            >
                                Add Slot
                            </Button>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={onRemoveMemberSlot}
                                startIcon={<Delete />}
                            >
                                Remove Slot
                            </Button>
                        </React.Fragment>
                    ) : null}
                </CardContent>
            </Card>

            {appInvSectionJSX}

            <Button
                color="primary"
                variant="contained"
                style={{ marginBottom: "2rem" }}
                onClick={() => props.history.goBack()}
            >
                Back
            </Button>
        </React.Fragment>
    )
}

export default ManageGroup
