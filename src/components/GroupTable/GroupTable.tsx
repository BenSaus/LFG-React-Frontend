import React from "react"
import * as Types from "generated/graphql"
import { Group } from "generated/graphql"

import { makeStyles } from "@material-ui/core/styles"
import {
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

import IListAction from "shared/IListAction"
import UserBadge from "../UserBadge/UserBadge"
import groupUtil from "utils/groupUtil"

const useStyles = makeStyles({})

interface GroupListProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
    showGroupsWithNoOpenSlots: boolean
    showLeader?: boolean
    showOpenSlots?: boolean
    showMemberNumber?: boolean
    showPendingApps?: boolean

    actions?: IListAction[]
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

    let filteredGroups: Types.Group[]

    if (props.showGroupsWithNoOpenSlots === false) {
        filteredGroups = props.groups.filter((group) => {
            if (groupUtil.getOpenSlots(group) > 0) {
                return true
            } else {
                return false
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

                        {props.showPendingApps ? (
                            <TableCell
                                style={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Pending Applications
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
                        <TableRow
                            hover
                            key={group.id}
                            onClick={() => props.clickedGroup(group.id)}
                        >
                            <TableCell>
                                <Typography variant="h6">
                                    {group.name}
                                </Typography>
                            </TableCell>

                            {props.showLeader && group.leader ? (
                                <TableCell component="th" scope="row">
                                    <UserBadge user={group.leader} />
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

                            {props.showPendingApps ? (
                                <TableCell align="center">
                                    <Chip
                                        color="default"
                                        size="small"
                                        label={group.applications?.length}
                                    />
                                </TableCell>
                            ) : null}

                            <TableCell align="center">
                                {props.actions?.map((action) => (
                                    <Tooltip
                                        title={action.tooltip}
                                        key={action.tooltip}
                                    >
                                        <IconButton
                                            onClick={(event) => {
                                                event.stopPropagation()
                                                action.onClick(group.id)
                                            }}
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
