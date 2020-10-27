import { gql, useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import Invites from "../../components/Invites/Invites"
import * as Types from "../../types-and-hooks"
import { GET_MY_INVITES } from "../../graphql/queries"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"

const ACCEPT_INVITE = gql`
    mutation($id: ID!) {
        acceptInvite(id: $id) {
            invite {
                id
                status
            }
            group {
                id
                name
            }
        }
    }
`

interface MyInvitesProps {}

const MyInvites: React.FC<MyInvitesProps> = () => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const [invites, setInvites] = useState<Types.Invite[]>()
    const { loading, error, data } = useQuery(GET_MY_INVITES, {
        variables: {
            invitee: myId,
        },
        context: {
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        },
        onCompleted: () => {
            setInvites(data.invites)
            console.log(data.invites)
        },
    })

    // const [updateInviteStatus, { data: updateData }] = useMutation(
    //     UPDATE_INVITE_STATUS
    // )
    const [acceptInvite, { data: accpetData }] = useMutation(ACCEPT_INVITE)

    if (loading) return <p>Loading...</p>
    if (error) return <h2>Error ☹️</h2>

    const handleInviteAcceptClicked = (inviteId: string) => {
        console.log("Clicked inviteId: ", inviteId)

        if (invites) {
            // This component only shows invites that are undecided,
            //      so simply remove the invite when we update its status
            const newInvites = invites.filter(
                (invite) => invite.id !== inviteId
            )
            setInvites(newInvites)

            // updateInviteStatus({
            //     variables: {
            //         id: inviteId,
            //         status: Types.Enum_Invite_Status.Accepted,
            //     },
            // })

            acceptInvite({
                variables: {
                    id: inviteId,
                },
            })
        }
    }

    return (
        <div>
            <h1>My Invites</h1>
            {invites !== undefined && invites.length > 0 ? (
                <Invites
                    invites={invites}
                    clickedAccept={handleInviteAcceptClicked}
                />
            ) : (
                <h4>No Invites Found</h4>
            )}
        </div>
    )
}

export default MyInvites
