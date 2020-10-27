import React from "react"
import { useQuery } from "@apollo/client"
import Applications from "../../components/Applications/Applications"
import { MY_APPLICATIONS } from "../../graphql/queries"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"

interface MyAppsProps {}

export const MyApps: React.FC<MyAppsProps> = () => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const { loading, error, data } = useQuery(MY_APPLICATIONS, {
        variables: {
            applicant: myId,
        },
        context: {
            headers: {
                Authorization: "Bearer " + auth.token,
            },
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
