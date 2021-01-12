import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import GroupTable from "../../components/GroupTable/GroupTable"
import { RouteComponentProps } from "react-router"
import { RootType } from "../../store/rootReducer"
import { useSelector } from "react-redux"
import { LeaveGroupDocument } from "../../generated/graphql"
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
import IListAction from "../../shared/IListAction"
import { Delete, FindInPage, Group, HighlightOff } from "@material-ui/icons"
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog"

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

    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [groupToLeave, setGroupToLeave] = useState<Types.Group | null>(null)

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
            setLeadingGroups(data.groups)
        },
    })

    const [leaveGroup] = useMutation(LeaveGroupDocument)

    // Handlers
    const onGroupClick = (groupId: string) => {
        props.history.push("/group/chat/" + groupId)
    }
    const onManageGroupClick = (groupId: string) => {
        props.history.push("/group/manage/" + groupId)
    }

    const onLeaveGroupConfirmClick = async () => {
        const resp = await leaveGroup({
            variables: {
                id: groupToLeave?.id,
            },
        })

        // Update state
        const newMemeberGroups = memberGroups.filter(
            (group) => group.id !== groupToLeave?.id
        )
        setMemberGroups(newMemeberGroups)
    }

    // Render
    if (loadingGroups && loadingLeadGroups) return <p>Loading...</p>
    if (errorLeadGroups || errorGroups) {
        console.log(errorLeadGroups, errorGroups)
        return <p>Error :(</p>
    }

    const leadGroupActions: IListAction[] = [
        {
            tooltip: "View Group",
            iconJSX: <FindInPage />,
            onClick: onGroupClick,
        },
        {
            tooltip: "Manage members",
            iconJSX: <Group />,
            onClick: onManageGroupClick,
        },
        {
            tooltip: "Delete Group",
            iconJSX: <Delete />,
            onClick: () => {
                console.log("Delete Group")
            },
        },
    ]

    const memberGroupActions: IListAction[] = [
        {
            tooltip: "View Group",
            iconJSX: <FindInPage />,
            onClick: onGroupClick,
        },
        {
            tooltip: "Leave Group",
            iconJSX: <HighlightOff />,
            onClick: (groupId: string) => {
                const groupToLeave = memberGroups.find((g) => g.id === groupId)
                if (groupToLeave) setGroupToLeave(groupToLeave)

                setShowConfirmDialog(true)
            },
        },
    ]

    let leadGroupsJSX = <p>No Groups Found</p>
    console.log("leadingGroups", leadingGroups)

    if (leadingGroups.length > 0) {
        leadGroupsJSX = (
            <Card className={classes.margin}>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>
                        Groups I Lead
                    </Typography>

                    <GroupTable
                        groups={leadingGroups}
                        clickedGroup={onGroupClick}
                        showGroupsWithNoOpenSlots={true}
                        showMemberNumber={true}
                        showOpenSlots={true}
                        showPendingApps={true}
                        actions={leadGroupActions}
                    />
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

    let memberGroupsJSX = (
        <Card className={classes.margin}>
            <CardContent>
                <Typography variant="h5" className={classes.title}>
                    Groups I'm a member of
                </Typography>

                <GroupTable
                    groups={memberGroups}
                    clickedGroup={onGroupClick}
                    showGroupsWithNoOpenSlots={true}
                    showLeader={true}
                    showMemberNumber={true}
                    actions={memberGroupActions}
                />
            </CardContent>
        </Card>
    )

    return (
        <div>
            <Typography variant="h4" style={{ margin: "2rem" }}>
                My Groups
            </Typography>

            {leadGroupsJSX}
            {memberGroupsJSX}

            <ConfirmDialog
                title="Leave Group?"
                open={showConfirmDialog}
                setOpen={setShowConfirmDialog}
                onConfirm={onLeaveGroupConfirmClick}
            >
                {`Are you sure you want leave '${groupToLeave?.name}?'`}
            </ConfirmDialog>
        </div>
    )
}

export default MyGroups
