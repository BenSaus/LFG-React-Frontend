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
} from "../../generated/graphql"
import Invites from "../../components/Invites/Invites"

interface ManageGroupParams {
    id: string // TODO: I don't think this is used
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

    // Render

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    // Handlers

    const handleAcceptApplication = async (applicationId: string) => {
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

    const handleRejectApplication = async (applicationId: string) => {
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

    const handleClickViewMemeber = async (memberId: string) => {
        console.log("Clicked member", memberId)

        props.history.push(`/user/${memberId}`)
    }

    const handleClickRemoveMember = async (memberId: string) => {
        console.log("Remove member", memberId)
    }

    const handleFinalizeGroupClick = async (groupId: string) => {
        console.log("Clicked Finalize")

        const resp = await closeGroup({
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
                acceptApplication={handleAcceptApplication}
                rejectApplication={handleRejectApplication}
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
                viewClicked={handleClickViewMemeber}
                removeClicked={handleClickRemoveMember}
                members={members}
            />
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
            <h3>Applicants</h3>
            {applicantsJSX}
            <br />
            <h3>Invites</h3>
            {invitesJSX}
            <button>Invite People</button>
            <br />
            <br />
            <h3>Members</h3>
            {membersJSX}
            <br />
            <br />
            <button
                style={{ padding: "1rem" }}
                onClick={() => handleFinalizeGroupClick(groupRespData.group.id)}
            >
                Finalize Group
            </button>
        </React.Fragment>
    )
}

export default ManageGroup
