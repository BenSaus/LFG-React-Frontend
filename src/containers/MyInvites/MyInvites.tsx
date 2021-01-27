import React, { useState } from "react"
import { useSelector } from "react-redux"

import { useMutation, useQuery } from "@apollo/client"
import * as Types from "generated/graphql"
import {
    AcceptInviteDocument,
    RejectInviteDocument,
    GetMyInvitesDocument,
} from "generated/graphql"

import InviteList from "components/InviteList/InviteList"

import { AuthState } from "store/slices/auth"
import { RootType } from "store/rootReducer"

interface MyInvitesProps {}

const MyInvites: React.FC<MyInvitesProps> = () => {
    // State
    const [invites, setInvites] = useState<Types.Invite[]>()

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const { loading, error, data } = useQuery(GetMyInvitesDocument, {
        variables: {
            invitee: myId,
        },
        onCompleted: () => {
            setInvites(data.invites)
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

    // Render
    if (loading) return <p>Loading...</p>
    if (error) return <h2>Error :(</h2>

    return (
        <div>
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
    )
}

export default MyInvites
