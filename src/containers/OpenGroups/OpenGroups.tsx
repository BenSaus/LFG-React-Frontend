import React from "react"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import {
    GetOpenGroupsDocument,
    useGetOpenGroupsQuery,
} from "../../generated/graphql"
import { useQuery } from "@apollo/client"

interface OpenGroupsProps extends RouteComponentProps {}

const OpenGroups: React.FC<OpenGroupsProps> = (props) => {
    // const { loading, error, data } = useQuery(GetOpenGroupsDocument)
    const { loading, error, data } = useGetOpenGroupsQuery()

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
