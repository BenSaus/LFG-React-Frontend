import React from "react"
import * as Types from "../../generated/graphql"
import { Group } from "../../generated/graphql"
import GroupComponent from "./Group/Group"
import groupUtil from "../../utils/groupUtil"
import { makeStyles } from "@material-ui/core/styles"
import {
    Avatar,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@material-ui/core"
import {
    Delete,
    Description,
    FindInPage,
    GroupAddRounded,
    HighlightOff,
} from "@material-ui/icons"

const useStyles = makeStyles({
    userCell: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    },
})

interface GroupListProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
    showGroupsWithNoOpenSlots: boolean // TODO: NOT WORKING
    showLeader?: boolean
    showOpenSlots?: boolean
    showAgeRange?: boolean
    showMemberNumber?: boolean

    showDeleteGroup?: boolean
    onDeleteGroup?: (groupId: string) => void
    showLeaveGroup?: boolean
    onLeaveGroup?: (groupId: string) => void
    showApplyGroup?: boolean
    onApplyToGroup?: (groupId: string) => void
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

    let filteredGroups: Types.Group[]

    if (props.showGroupsWithNoOpenSlots === false) {
        filteredGroups = props.groups.filter((group) => {
            if (groupUtil.getOpenSlots(group) > 0) {
                return true
            }
        })
    } else {
        filteredGroups = props.groups
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>
                            Group Name
                        </TableCell>
                        {props.showLeader ? (
                            <TableCell style={{ fontWeight: "bold" }}>
                                Leader
                            </TableCell>
                        ) : null}

                        {props.showAgeRange ? (
                            <TableCell
                                style={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Age Range
                            </TableCell>
                        ) : null}

                        {props.showMemberNumber ? (
                            <TableCell
                                style={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Member Count
                            </TableCell>
                        ) : null}

                        {props.showOpenSlots ? (
                            <TableCell
                                style={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Open Slots
                            </TableCell>
                        ) : null}

                        <TableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredGroups.map((group: Types.Group) => (
                        <TableRow key={group.id}>
                            <TableCell>
                                <Typography variant="h6">
                                    {group.name}
                                </Typography>
                            </TableCell>

                            {props.showLeader ? (
                                <TableCell component="th" scope="row">
                                    <div className={classes.userCell}>
                                        <Avatar
                                            className={classes.avatar}
                                            src="/static/images/avatar/2.jpg"
                                        />
                                        {group.leader?.username}
                                    </div>
                                </TableCell>
                            ) : null}

                            {props.showAgeRange ? (
                                <TableCell align="center">
                                    <Chip
                                        color="default"
                                        size="small"
                                        label={`${group.min_age} - ${group.max_age}`}
                                    />
                                </TableCell>
                            ) : null}

                            {props.showMemberNumber ? (
                                <TableCell align="center">
                                    {group.members?.length}
                                </TableCell>
                            ) : null}

                            {props.showOpenSlots ? (
                                <TableCell align="center">
                                    {groupUtil.getOpenSlots(group)}
                                </TableCell>
                            ) : null}

                            <TableCell align="center">
                                <Tooltip title="View Group">
                                    <IconButton
                                        onClick={() =>
                                            props.clickedGroup(group.id)
                                        }
                                    >
                                        <FindInPage />
                                    </IconButton>
                                </Tooltip>

                                {props.showLeaveGroup ? (
                                    <Tooltip title="Leave Group">
                                        <IconButton
                                            onClick={() => {
                                                if (props.onLeaveGroup)
                                                    props.onLeaveGroup(group.id)
                                            }}
                                        >
                                            <HighlightOff />
                                        </IconButton>
                                    </Tooltip>
                                ) : null}

                                {props.showDeleteGroup ? (
                                    <Tooltip title="Delete Group">
                                        <IconButton>
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                ) : null}

                                {props.showApplyGroup ? (
                                    <Tooltip title="Apply to Group">
                                        <IconButton>
                                            <Description />
                                        </IconButton>
                                    </Tooltip>
                                ) : null}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GroupList
