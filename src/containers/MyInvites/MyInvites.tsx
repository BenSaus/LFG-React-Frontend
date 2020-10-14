import { gql, useMutation } from "@apollo/client"
import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import Invites from "../../components/Invites/Invites"
import * as Types from "../../types-and-hooks"

// TODO: WARNING: ID should be ID! yet this causes a strange error. Check over this
const GET_MY_INVITES = gql`
    query($invitee: ID) {
        invites(where: { invitee: { id: $invitee }, status: "undecided" }) {
            id
            message
            group {
                name
            }
        }
    }
`

const UPDATE_INVITE_STATUS = gql`
    mutation($id: ID!, $status: ENUM_INVITE_STATUS) {
        updateInvite(input: { where: { id: $id }, data: { status: $status } }) {
            invite {
                id
            }
        }
    }
`

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
    const [invites, setInvites] = useState<Types.Invite[]>()
    const { loading, error, data } = useQuery(GET_MY_INVITES, {
        variables: {
            invitee: 34, // TODO: HARD CODED...Setup in store
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
            {typeof invites !== "undefined" && invites.length > 0 ? (
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
