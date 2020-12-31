import React from "react"
import GroupList from "../../components/GroupList/GroupList"
import { RouteComponentProps } from "react-router"
import { GetOpenGroupsDocument } from "../../generated/graphql"
import { useQuery } from "@apollo/client"
import { Card, CardContent } from "@material-ui/core"

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
            <React.Fragment>
                <h1>Open Groups</h1>
                <Card>
                    <CardContent>
                        <GroupList
                            groups={data.groups}
                            clickedGroup={onGroupClick}
                            showGroupsWithNoOpenSlots={false}
                        />
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }

    return (
        <div>
            <h2>No open groups found</h2>
        </div>
    )
}

export default OpenGroups
