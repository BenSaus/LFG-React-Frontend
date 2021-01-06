import React from "react"
import * as Types from "../../generated/graphql"
import { Group } from "../../generated/graphql"
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

import IListAction from "../../shared/IListAction"

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
    showGroupsWithNoOpenSlots: boolean
    showLeader?: boolean
    showOpenSlots?: boolean
    showAgeRange?: boolean
    showMemberNumber?: boolean

    actions?: IListAction[]
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
                                {props.actions?.map((action) => (
                                    <Tooltip
                                        title={action.tooltip}
                                        key={action.tooltip}
                                    >
                                        <IconButton
                                            onClick={() =>
                                                action.onClick(group.id)
                                            }
                                        >
                                            {action.iconJSX}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GroupList
