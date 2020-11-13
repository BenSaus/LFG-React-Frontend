import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import * as Types from "../../generated/graphql"
import Applicants from "../../components/Applicants/Applicants"
import Members from "../../components/Members/Members"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { useSelector } from "react-redux"
import {
    AcceptApplicationDocument,
    ManageGetGroupDocument,
    RejectApplicationDocument,
    CloseGroupDocument,
    OpenGroupDocument,
} from "../../generated/graphql"
import Invites from "../../components/Invites/Invites"

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

                const membersWithoutLeader = data.group.members.filter(
                    (group: Types.Group) => {
                        console.log(group)

                        console.log(group?.id, myId, group?.id !== myId)

                        return group?.id !== myId
                    }
                )
                setMembers(membersWithoutLeader)
            },
        }
    )
    const [acceptApplication, { data: acceptData }] = useMutation(
        AcceptApplicationDocument
    )
    const [rejectApplication, { data: rejectData }] = useMutation(
        RejectApplicationDocument
    )

    const [closeGroup, { data: closeData }] = useMutation(CloseGroupDocument)
    const [openGroup, { data: openData }] = useMutation(OpenGroupDocument)

    // Render

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

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

    const onClickViewMemeber = async (memberId: string) => {
        console.log("Clicked member", memberId)

        props.history.push(`/user/${memberId}`)
    }

    const onClickRemoveMember = async (memberId: string) => {
        console.log("Remove member", memberId)
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

    // JSX

    let applicantsJSX = <p>No Applications Recieved</p>
    if (applications.length > 0) {
        applicantsJSX = (
            <Applicants
                applications={applications}
                acceptApplication={onAcceptApplication}
                rejectApplication={onRejectApplication}
            />
        )
    }

    console.log(invites)

    let invitesJSX = <p>No Invites Sent</p>
    // if (invites.length > 0) {
    //     invitesJSX = <Invites invites={invites} />
    // }

    let membersJSX = <p>No Members</p>
    if (members.length > 0) {
        membersJSX = (
            <Members
                viewClicked={onClickViewMemeber}
                removeClicked={onClickRemoveMember}
                members={members}
            />
        )
    }

    let closed = groupRespData.group.status !== "open"
    let appInvJSX = (
        <React.Fragment>
            <p>
                This group is closed. So you cannot invite or receive
                applcations.
            </p>
            <p>If you want to add more members, open the group</p>
        </React.Fragment>
    )
    if (!closed) {
        appInvJSX = (
            <React.Fragment>
                <h3>Applicants</h3>
                {applicantsJSX}
                <br />
                <h3>Invites</h3>
                {invitesJSX}
                <button>Invite People</button>
                <br />
                <br />
            </React.Fragment>
        )
    }

    let closeButtonJSX = null
    if (!closed) {
        closeButtonJSX = (
            <button
                style={{ padding: "1rem" }}
                onClick={() => onCloseGroupClick(groupRespData.group.id)}
            >
                Close Group
            </button>
        )
    } else {
        closeButtonJSX = (
            <button
                style={{ padding: "1rem" }}
                onClick={() => onOpenGroupClick(groupRespData.group.id)}
            >
                Open Group
            </button>
        )
    }

    return (
        <React.Fragment>
            <h1>Manage Group</h1>
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
            {appInvJSX}
            <h3>Members</h3>
            {membersJSX}
            <br />
            <br />
            {closeButtonJSX}
            <br />
            <button onClick={() => props.history.goBack()}>Back</button>
        </React.Fragment>
    )
}

export default ManageGroup
