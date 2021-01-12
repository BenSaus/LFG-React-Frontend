import React from "react"
import GroupTable from "../../components/GroupTable/GroupTable"
import { RouteComponentProps } from "react-router"
import { GetOpenGroupsDocument } from "../../generated/graphql"
import { useQuery } from "@apollo/client"
import { Card, CardContent, Typography } from "@material-ui/core"
import { Assignment, FindInPage } from "@material-ui/icons"
import IListAction from "../../shared/IListAction"
import CollapsibleGroupTable from "../../components/CollapsibleGroupTable/CollapsibleGroupTable"

interface OpenGroupsProps extends RouteComponentProps {}

const OpenGroups: React.FC<OpenGroupsProps> = (props) => {
    const { loading, error, data } = useQuery(GetOpenGroupsDocument)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onGroupClick = (groupId: string) => {
        props.history.push("/group/" + groupId)
    }

    const onApplyClick = (groupId: string) => {
        props.history.push("/apply/" + groupId)
    }

    const groupActions: IListAction[] = [
        {
            tooltip: "Apply to Group",
            iconJSX: <Assignment />,
            onClick: onApplyClick,
        },
    ]

    if (data?.groups) {
        return (
            <React.Fragment>
                <Typography variant="h4" style={{ margin: "2rem" }}>
                    Open Groups
                </Typography>
                <Card>
                    <CardContent>
                        <CollapsibleGroupTable
                            groups={data.groups}
                            clickedGroup={onGroupClick}
                            actions={groupActions}
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
