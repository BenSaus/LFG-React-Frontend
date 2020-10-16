import React from "react"
import { gql, useQuery } from "@apollo/client"
// import * as Types from "../../types-and-hooks"
import Applications from "../../components/Applications/Applications"
import {MY_APPLICATIONS} from '../../graphql/queries'


interface MyAppsProps {}

export const MyApps: React.FC<MyAppsProps> = () => {
    const { loading, error, data } = useQuery(MY_APPLICATIONS, {
        variables: {
            applicant: 34, // TODO: HARD CODED...Setup in store
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <React.Fragment>
            <h1>My Applications</h1>
            <Applications applications={data.applications} />
        </React.Fragment>
    )
}

export default MyApps
