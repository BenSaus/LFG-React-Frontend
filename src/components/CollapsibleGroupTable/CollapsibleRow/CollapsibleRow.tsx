import React from "react"
import * as Types from "../../../generated/graphql"
import {
    Avatar,
    Box,
    Chip,
    Collapse,
    IconButton,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@material-ui/core"
import { KeyboardArrowDown, KeyboardArrowRight } from "@material-ui/icons"
import IListAction from "../../../shared/IListAction"
import groupUtil from "../../../utils/groupUtil"
import UserBadge from "../../UserBadge/UserBadge"

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

interface CollapsibleRowProps {
    group: Types.Group
    actions?: IListAction[]
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = (props) => {
    const { group } = props
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()

    let roomPreferenceJSX = "Any"

    console.log(group.preferred_rooms)

    if (group.preferred_rooms && group.preferred_rooms.length > 0) {
        roomPreferenceJSX = ""
        for (let x = 0; x < group.preferred_rooms.length; x++) {
            let room = group.preferred_rooms[x]
            if (room) {
                if (x === group.preferred_rooms.length - 1) {
                    roomPreferenceJSX += room.name
                } else {
                    roomPreferenceJSX += room.name + ", "
                }
            }
        }
    }

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Typography variant="h6" gutterBottom component="div">
                        {group.name}
                    </Typography>
                </TableCell>
                <TableCell align="left">Day / Time</TableCell>
                <TableCell align="left">{roomPreferenceJSX}</TableCell>

                <TableCell align="center">
                    {props.actions?.map((action) => (
                        <Tooltip title={action.tooltip} key={action.tooltip}>
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
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                    }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <div style={{}}>
                                <Typography variant="h6">Leader:</Typography>
                                {group.leader ? (
                                    <UserBadge user={group.leader} />
                                ) : null}

                                <Typography variant="h6">
                                    Description: {group.description}
                                </Typography>
                                <Typography variant="h6">
                                    Day/Time Preference: Any
                                </Typography>
                                <Typography variant="h6">
                                    Age Range: {group.min_age} - {group.max_age}
                                </Typography>
                                <Typography variant="h6">
                                    Open Slots: {groupUtil.getOpenSlots(group)}
                                </Typography>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default CollapsibleRow
