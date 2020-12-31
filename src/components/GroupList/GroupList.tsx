import React from "react"
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
import { Delete, FindInPage, GroupAddRounded } from "@material-ui/icons"

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
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>
                            Group Name
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                            Leader
                        </TableCell>
                        <TableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                        >
                            Age Range
                        </TableCell>
                        <TableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                        >
                            Open Slots
                        </TableCell>
                        <TableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.groups.map((group) => (
                        <TableRow key={group.id}>
                            <TableCell>
                                <Typography variant="h6">
                                    {group.name}
                                </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <div className={classes.userCell}>
                                    <Avatar
                                        className={classes.avatar}
                                        src="/static/images/avatar/2.jpg"
                                    />
                                    {group.leader?.username}
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <Chip
                                    color="primary"
                                    size="small"
                                    label={`${group.min_age} - ${group.max_age}`}
                                />
                            </TableCell>
                            <TableCell align="center">
                                {groupUtil.getOpenSlots(group)}
                            </TableCell>

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
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GroupList
