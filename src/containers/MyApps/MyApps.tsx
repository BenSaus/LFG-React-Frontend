import React from "react"
import { useQuery } from "@apollo/client"
import Applications from "../../components/Applications/Applications"
import {MY_APPLICATIONS} from '../../graphql/queries'
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { UserState } from "../../store/slices/user"


interface MyAppsProps {}

export const MyApps: React.FC<MyAppsProps> = () => {
    const myUser = useSelector<RootType, UserState>(state => state.user)
    const myId = Number(myUser.user.id)
    
    const { loading, error, data } = useQuery(MY_APPLICATIONS, {
        variables: {
            applicant: myId,
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <React.Fragment>
            <h1>My Applications</h1>
            {data.applications !== undefined && data.applications.length > 0 ? (
                <Applications applications={data.applications} />
            ) : (
                <h4>No Applications Found</h4>
            )}
        </React.Fragment>
    )
}

export default MyApps
