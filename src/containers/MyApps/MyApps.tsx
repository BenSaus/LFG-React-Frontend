import React from "react"
import { useQuery } from "@apollo/client"
import ApplicationList from "../../components/ApplicationList/ApplicationList"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { GetMyApplicationsDocument } from "../../generated/graphql"

interface MyAppsProps {}

export const MyApps: React.FC<MyAppsProps> = () => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const { loading, error, data } = useQuery(GetMyApplicationsDocument, {
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
                <ApplicationList applications={data.applications} />
            ) : (
                <h4>No Applications Found</h4>
            )}
        </React.Fragment>
    )
}

export default MyApps
