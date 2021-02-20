import React, { useState } from "react"
import ApplicationList from "components/ApplicationList/ApplicationList"
import { useSelector } from "react-redux"

import { RootType } from "store/rootReducer"
import { AuthState } from "store/slices/auth"
import * as Types from "generated/graphql"

import { useMutation, useQuery } from "@apollo/client"
import {
    AcceptInviteDocument,
    GetMyApplicationsDocument,
    RejectInviteDocument,
    GetMyInvitesDocument,
} from "generated/graphql"
import InviteList from "components/InviteList/InviteList"

interface MyInvitesAppsProps {}

export const MyInvitesApps: React.FC<MyInvitesAppsProps> = () => {
    // State
    const [invites, setInvites] = useState<Types.Invite[]>()

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const { loading: appLoading, error: appError, data: appData } = useQuery(
        GetMyApplicationsDocument,
        {
            variables: {
                applicant: myId,
            },
        }
    )

    const {
        loading: inviteLoading,
        error: inviteError,
        data: inviteData,
    } = useQuery(GetMyInvitesDocument, {
        variables: {
            invitee: myId,
        },
        onCompleted: () => {
            setInvites(inviteData.invites)
        },
    })

    const [acceptInvite, { data: accpetData }] = useMutation(
        AcceptInviteDocument
    )
    const [rejectInvite, { data: rejectData }] = useMutation(
        RejectInviteDocument
    )

    // Handlers
    const onInviteAcceptClicked = (inviteId: string) => {
        // TODO: Why is this check here? Should this check be in the reject function too?
        if (invites) {
            // This component only shows invites that are undecided,
            //      so simply remove the invite when we update its status
            removeInvite(inviteId)

            acceptInvite({
                variables: {
                    id: inviteId,
                },
            })
        }
    }

    const onInviteRejectClicked = (inviteId: string) => {
        removeInvite(inviteId)

        rejectInvite({
            variables: {
                id: inviteId,
            },
        })
    }

    const removeInvite = (inviteIdToRemove: string) => {
        const updatedInvites = invites?.filter(
            (invite) => invite.id !== inviteIdToRemove
        )
        setInvites(updatedInvites)
    }

    if (inviteLoading || appLoading) return <p>Loading...</p>
    if (inviteError || appError) {
        console.error("inviteError:", inviteError)
        console.error("appError:", appError)
        return <p>Error :(</p>
    }

    return (
        <React.Fragment>
            <div style={{ margin: "0 0 3rem 0" }}>
                <h1>My Invites</h1>
                {invites !== undefined && invites.length > 0 ? (
                    <InviteList
                        invites={invites}
                        onClickedAccept={onInviteAcceptClicked}
                        onClickedReject={onInviteRejectClicked}
                    />
                ) : (
                    <h4>No Invites Found</h4>
                )}
            </div>
            <div>
                <h1>My Applications</h1>
                {appData.applications !== undefined &&
                appData.applications.length > 0 ? (
                    <ApplicationList applications={appData.applications} />
                ) : (
                    <h4>No Applications Found</h4>
                )}
            </div>
        </React.Fragment>
    )
}

export default MyInvitesApps
