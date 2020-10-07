import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import Invites from "../../components/Invites/Invites"

// TODO: WARNING: ID should be ID! yet this causes a strange error. Check over this
const GET_MY_INVITES = gql`
    query($invitee: ID) {
        invites(where: { invitee: { id: $invitee } }) {
            id
            message
            group {
                name
            }
        }
    }
`

interface MyInvitesProps {}

const MyInvites: React.FC<MyInvitesProps> = () => {
    const { loading, error, data } = useQuery(GET_MY_INVITES, {
        variables: {
            leader: 35, // TODO: HARD CODED...Setup in store
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)

    const onInviteClick = (inviteId: string) => {
        // open edit group here
        console.log("Clicked group: ", inviteId)
    }

    return (
        <div>
            <h1>My Invites</h1>
            <Invites invites={data.invites} clickedInvite={onInviteClick} />
        </div>
    )
}

export default MyInvites
