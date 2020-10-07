import { gql } from "@apollo/client"
import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"

interface FrontPageProps {}

const GET_GROUPS = gql`
    query {
        groups {
            id
            name
            open_slots
            max_age
            min_age
            booking_status
            description
        }
    }
`

const FrontPage: React.FC<FrontPageProps> = () => {
    const { loading, error, data } = useQuery(GET_GROUPS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            <h1>Open Groups</h1>
            <Groups groups={data.groups} />
        </div>
    )
}

export default FrontPage
