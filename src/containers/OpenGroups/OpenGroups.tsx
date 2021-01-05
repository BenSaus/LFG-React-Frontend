import React from "react"
import GroupTable from "../../components/GroupTable/GroupTable"
import { RouteComponentProps } from "react-router"
import { GetOpenGroupsDocument } from "../../generated/graphql"
import { useQuery } from "@apollo/client"
import { Card, CardContent, Typography } from "@material-ui/core"

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
                <Typography variant="h4" style={{ margin: "2rem" }}>
                    Open Groups
                </Typography>
                <Card>
                    <CardContent>
                        <GroupTable
                            groups={data.groups}
                            clickedGroup={onGroupClick}
                            showGroupsWithNoOpenSlots={false}
                            showLeader={true}
                            showOpenSlots={true}
                            showAgeRange={true}
                            showApplyGroup={true}
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
