import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import GroupTable from "../../components/GroupTable/GroupTable"
import { RouteComponentProps } from "react-router"
import { RootType } from "../../store/rootReducer"
import { useSelector } from "react-redux"
import {
    GetGroupChatDocument,
    LeaveGroupDocument,
} from "../../generated/graphql"
import * as Types from "../../generated/graphql"
import { AuthState } from "../../store/slices/auth"
import {
    GetMyGroupsDocument,
    GetMyLeadGroupsDocument,
} from "../../generated/graphql"
import Button from "@material-ui/core/Button"
import {
    Card,
    CardActions,
    CardContent,
    createStyles,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core"
import GroupList from "../../components/GroupList/GroupList"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: "2rem",
        },
        title: {
            marginBottom: "1rem",
        },
    })
)

interface MyGroupsProps extends RouteComponentProps {}

const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const classes = useStyles()

    // State
    const [memberGroups, setMemberGroups] = useState<Types.Group[]>([])
    const [leadingGroups, setLeadingGroups] = useState<Types.Group[]>([])

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const {
        loading: loadingGroups,
        error: errorGroups,
        data: groupsData,
    } = useQuery(GetMyGroupsDocument, {
        variables: {
            id: myId,
        },
        onCompleted: (data) => {
            console.log("GetMyGroupsDocument Completed", data.groups)
            setMemberGroups(data.groups)
        },
    })

    const {
        loading: loadingLeadGroups,
        error: errorLeadGroups,
        data: leadGroupsData,
    } = useQuery(GetMyLeadGroupsDocument, {
        variables: {
            id: myId,
        },
        onCompleted: (data) => {
            console.log("GetMyLeadGroupsDocument Completed", data.groups)
            setLeadingGroups(data.groups)
        },
    })

    const [leaveGroup] = useMutation(LeaveGroupDocument)

    // Handlers
    const onGroupLeadClick = (groupId: string) => {
        props.history.push("/group/chat/" + groupId)
    }

    const onGroupMemberClick = (groupId: string) => {
        props.history.push("/group/chat/" + groupId)
    }

    // TODO: MOVE UP?
    const onLeaveGroupClick = async (groupId: string) => {
        console.log("Leaving group", myId, groupId)

        const resp = await leaveGroup({
            variables: {
                id: groupId,
            },
        })

        // Update state
        const newMemeberGroups = memberGroups.filter(
            (group) => group.id !== groupId
        )
        setMemberGroups(newMemeberGroups)

        console.log(resp)
    }

    // Render
    if (loadingGroups && loadingLeadGroups) return <p>Loading...</p>
    if (errorLeadGroups || errorGroups) {
        console.log(errorLeadGroups, errorGroups)
        return <p>Error :(</p>
    }

    let leadGroupsJSX = <p>No Groups Found</p>
    if (leadingGroups.length > 0) {
        leadGroupsJSX = (
            <Card className={classes.margin}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>
                        Groups I Lead
                    </Typography>

                    <GroupTable
                        groups={leadingGroups}
                        clickedGroup={onGroupLeadClick}
                        showGroupsWithNoOpenSlots={true}
                        showMemberNumber={true}
                        showOpenSlots={true}
                        showDeleteGroup={true}
                    />

                    {/* <GroupList
                        groups={leadingGroups}
                        onClick={onGroupLeadClick}
                    /> */}
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{ margin: "1rem" }}
                        onClick={() => {
                            props.history.push("/group/create")
                        }}
                    >
                        Create New Group
                    </Button>
                </CardActions>
            </Card>
        )
    }

    let memberGroupsJSX = <p>No Groups Found</p>
    if (memberGroups.length > 0) {
        memberGroupsJSX = (
            <Card className={classes.margin}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>
                        Groups I'm a member of
                    </Typography>

                    <GroupTable
                        groups={memberGroups}
                        clickedGroup={onGroupMemberClick}
                        showGroupsWithNoOpenSlots={true}
                        showLeader={true}
                        showOpenSlots={true}
                        showLeaveGroup={true}
                        onLeaveGroup={onLeaveGroupClick}
                    />
                </CardContent>
            </Card>
        )
    }

    return (
        <div>
            <Typography variant="h4" style={{ margin: "2rem" }}>
                My Groups
            </Typography>

            {leadGroupsJSX}
            {memberGroupsJSX}

            <br />
        </div>
    )
}

export default MyGroups
