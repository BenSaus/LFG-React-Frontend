import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import { useSelector } from "react-redux"

import { useMutation, useQuery } from "@apollo/client"
import * as Types from "generated/graphql"
import {
    ManageGetGroupDocument,
    DismissInviteDocument,
} from "generated/graphql"

import MemberSection from "components/ManageGroup/MemberSection/MemberSection"
import ApplicationSection from "components/ManageGroup/ApplicationSection/ApplicationSection"
import InviteSection from "components/ManageGroup/InviteSection/InviteSection"

import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Tooltip,
} from "@material-ui/core"

import { Settings } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

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

    // State
    const [invites, setInvites] = useState<Types.Invite[]>([])
    const [members, setMembers] = useState<Types.UsersPermissionsUser[]>([])

    // GraphQL
    const { loading, error, data: groupRespData } = useQuery(
        ManageGetGroupDocument,
        {
            variables: { id: props.match.params.id },
            onCompleted: (data) => {
                // setApplications(data.group.applications)
                setInvites(data.group.invites)
                setMembers(data.group.members)
            },
        }
    )

    const [dismissInvite, { data: dismissData }] = useMutation(
        DismissInviteDocument
    )

    // Handlers
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

    const onRemoveMember = async (memberId: string) => {
        const updatedMembers: Types.UsersPermissionsUser[] = members.filter(
            (member: Types.UsersPermissionsUser) => member.id !== memberId
        )
        setMembers(updatedMembers)
    }

    const onAcceptApplication = async (appId: string) => {
        const acceptedApp = groupRespData.group.applications.find(
            (app: Types.Application) => app.id === appId
        )

        // TODO: Check that the app was found here...

        const updatedMembers = [...members]

        // Note: in the graphql query the applicant has the same data as a member
        const newMember: Types.UsersPermissionsUser = {
            ...acceptedApp.applicant,
        }
        updatedMembers.push(newMember)
        setMembers(updatedMembers)
    }

    const onClickViewMember = async (memberId: string) => {
        props.history.push(`/user/${memberId}`)
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
                        <ApplicationSection
                            applications={groupRespData.group.applications}
                            onAcceptApplication={onAcceptApplication}
                            onViewApplicant={onClickViewMember}
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
                    <MemberSection
                        groupData={groupRespData.group}
                        members={members}
                        onRemoveMember={onRemoveMember}
                        onViewMember={onClickViewMember}
                    />
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
