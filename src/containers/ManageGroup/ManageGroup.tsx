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
import ButtonSection from "../../components/ManageGroup/ButtonSection/ButtonSection"
import ApplicationSection from "../../components/ManageGroup/ApplicationSection/ApplicationSection"
import InviteSection from "../../components/ManageGroup/InviteSection/InviteSection"

interface ManageGroupParams {
    id: string
}

interface ManageGroupProps extends RouteComponentProps<ManageGroupParams> {}

const ManageGroup: React.FC<ManageGroupProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // State
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
        console.log("Accept app:", applicationId)

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

        console.log(result)

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
        console.log("Dismiss invite:" + inviteId)

        const resp = await dismissInvite({
            variables: {
                id: inviteId,
            },
        })

        const updatedInvites = invites.filter(
            (invite) => invite.id !== inviteId
        )
        setInvites(updatedInvites)

        console.log(resp)
    }

    const onClickViewMember = async (memberId: string) => {
        console.log("Clicked member", memberId)

        props.history.push(`/user/${memberId}`)
    }

    const onClickRemoveMember = async (memberId: string) => {
        // We must remove the given member then resubmit the member list

        console.log("Remove member", memberId)

        const resp = await removeMember({
            variables: {
                groupId: groupRespData.group.id,
                memberId: memberId,
            },
        })
        console.log(resp)

        const updatedMembers: Types.UsersPermissionsUser[] = members.filter(
            (member: Types.UsersPermissionsUser) => member.id !== memberId
        )

        setMembers(updatedMembers)
    }

    const onCloseGroupClick = async (groupId: string) => {
        console.log("Clicked Close")

        const resp = await closeGroup({
            variables: {
                id: groupId,
            },
        })

        console.log(resp)
    }

    const onOpenGroupClick = async (groupId: string) => {
        console.log("Clicked Open")

        const resp = await openGroup({
            variables: {
                id: groupId,
            },
        })

        console.log(resp)
    }

    const onAddMemberSlot = async () => {
        console.log("Add Slot")

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

        console.log(resp)
    }

    const onRemoveMemberSlot = async () => {
        // do not allow member number > member_max
        console.log("Remove Slot")

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

        console.log(resp)
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
                    This group is closed. If you want to add more members open
                    the group.
                </p>
            </React.Fragment>
        )
    } else {
        appInvSectionJSX = (
            <React.Fragment>
                <h3>Applications</h3>
                <ApplicationSection
                    applications={applications}
                    onAcceptApplication={onAcceptApplication}
                    onRejectApplication={onRejectApplication}
                />
                <h3>Invites</h3>
                <InviteSection
                    invites={invites}
                    onDismissClicked={onDismissInviteClick}
                />
                <button
                    onClick={() => {
                        props.history.push(
                            `/openUsers/${groupRespData.group.id}`
                        )
                    }}
                >
                    Find More Members
                </button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h1>Manage Members</h1>
            <h2>{groupRespData.group.name}</h2>
            <button
                onClick={() => {
                    props.history.push(`/group/edit/${props.match.params.id}`)
                }}
            >
                Edit Group Details
            </button>
            <br />
            <br />
            {appInvSectionJSX}
            <h3>Members</h3>
            <MembersSection
                membersMax={groupRespData.group.member_max}
                members={members}
                onClickViewMember={onClickViewMember}
                onClickRemoveMember={onClickRemoveMember}
                showOpenSlots={!closed}
            />
            {closed === false ? (
                <React.Fragment>
                    <button onClick={onAddMemberSlot}>Add Slot</button>
                    <button onClick={onRemoveMemberSlot}>Remove Slot</button>
                </React.Fragment>
            ) : null}
            <br />
            <br />
            <ButtonSection
                groupClosed={closed}
                groupId={groupRespData.group.id}
                onCloseGroupClick={onCloseGroupClick}
                onOpenGroupClick={onOpenGroupClick}
            />
            <br />
            <button onClick={() => props.history.goBack()}>Back</button>
        </React.Fragment>
    )
}

export default ManageGroup
