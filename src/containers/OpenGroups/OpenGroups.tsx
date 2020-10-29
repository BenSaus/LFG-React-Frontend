import React from "react"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { GetOpenGroupsDocument } from "../../generated/graphql"
import { useQuery } from "@apollo/client"
// import ReduxExample from "../../components/ReduxExample/ReduxExample"

interface OpenGroupsProps extends RouteComponentProps {}

const OpenGroups: React.FC<OpenGroupsProps> = (props) => {
    const { loading, error, data } = useQuery(GetOpenGroupsDocument)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onGroupClick = (groupId: string) => {
        props.history.push("/group/" + groupId)
    }

    if (data?.groups) {
        return (
            <div>
                <h1>Open Groups</h1>
                <Groups groups={data.groups} clickedGroup={onGroupClick} />
                {/* <ReduxExample /> */}
            </div>
        )
    }

    return (
        <div>
            <h2>No open groups found</h2>
        </div>
    )
}

export default OpenGroups
