import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { GET_OPEN_GROUPS } from "../../graphql/queries"
import ReduxExample from "../../components/ReduxExample/ReduxExample"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"
import { useSelector } from "react-redux"

interface OpenGroupsProps extends RouteComponentProps {}

const OpenGroups: React.FC<OpenGroupsProps> = (props) => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    const { loading, error, data } = useQuery(GET_OPEN_GROUPS, {
        context: {
            headers: {
                Authorization: "Bearer " + auth.token,
            },
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onGroupClick = (groupId: string) => {
        props.history.push("/group/" + groupId)
    }

    return (
        <div>
            <h1>Open Groups</h1>
            <Groups groups={data.groups} clickedGroup={onGroupClick} />
            {/* <ReduxExample /> */}
        </div>
    )
}

export default OpenGroups
