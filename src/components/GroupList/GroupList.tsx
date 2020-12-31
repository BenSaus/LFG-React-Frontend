import React from "react"
import { Group } from "../../generated/graphql"
import GroupComponent from "./Group/Group"
import groupUtil from "../../utils/groupUtil"
import { makeStyles } from "@material-ui/core/styles"
import {
    Avatar,
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
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

    // let groupsJsx
    // if (props.groups) {
    //     groupsJsx = props.groups.map((group: Group) => {
    //         if (
    //             props.showGroupsWithNoOpenSlots ||
    //             groupUtil.getOpenSlots(group) > 0
    //         ) {
    //             return (
    //                 <GroupComponent
    //                     group={group}
    //                     clicked={props.clickedGroup}
    //                     key={group.id}
    //                 />
    //             )
    //         }
    //     })
    // }

    // return <div className={classes.groupList}>{groupsJsx}</div>

    // return (
    //     <List>
    //         {props.groups.map((group) => (
    //             <ListItem button alignItems="flex-start" key={group.id}>
    //                 <ListItemAvatar>
    //                     <GroupAddRounded />
    //                 </ListItemAvatar>
    //                 <ListItemText>{group.name}</ListItemText>
    //                 <ListItemText>
    //                     Ages: {group.min_age} - {group.max_age}
    //                 </ListItemText>
    //                 <ListItemSecondaryAction>
    //                     <IconButton>
    //                         <FindInPage />
    //                     </IconButton>
    //                 </ListItemSecondaryAction>
    //             </ListItem>
    //         ))}
    //     </List>
    // )

    // Handlers

    // const groupClickHandler: (event: any) {
    //     props.clickedGroup(group.id)
    // }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Group Name</TableCell>
                        <TableCell>Leader</TableCell>
                        <TableCell align="center">Age Range</TableCell>
                        <TableCell align="center">Open Slots</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.groups.map((group) => (
                        <TableRow key={group.id}>
                            <TableCell>{group.name}</TableCell>
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
