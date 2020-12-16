import { gql, useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import InviteList from "../../components/InviteList/InviteList"
import * as Types from "../../generated/graphql"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import {
    AcceptInviteDocument,
    RejectInviteDocument,
} from "../../generated/graphql"
import { GetMyInvitesDocument } from "../../generated/graphql"

interface MyInvitesProps {}

const MyInvites: React.FC<MyInvitesProps> = () => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const [invites, setInvites] = useState<Types.Invite[]>()
    const { loading, error, data } = useQuery(GetMyInvitesDocument, {
        variables: {
            invitee: myId,
        },
        onCompleted: () => {
            setInvites(data.invites)
            console.log(data.invites)
        },
    })

    const [acceptInvite, { data: accpetData }] = useMutation(
        AcceptInviteDocument
    )
    const [rejectInvite, { data: rejectData }] = useMutation(
        RejectInviteDocument
    )

    if (loading) return <p>Loading...</p>
    if (error) return <h2>Error :(</h2>

    const onInviteAcceptClicked = (inviteId: string) => {
        console.log("Clicked inviteId: ", inviteId)

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
        console.log("Clicked Reject: ", inviteId)

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
