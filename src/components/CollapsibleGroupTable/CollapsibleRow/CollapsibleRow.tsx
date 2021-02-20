import React from "react"
import * as Types from "generated/graphql"
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
    makeStyles,
    TableCell,
    TableRow,
    Tooltip,
    Typography,
} from "@material-ui/core"
import { KeyboardArrowDown, KeyboardArrowRight } from "@material-ui/icons"
import IListAction from "shared/IListAction"
import groupUtil from "utils/groupUtil"
import UserBadge from "components/UserBadge/UserBadge"
import { Chip } from "@material-ui/core"

const useStyles = makeStyles({
    userCell: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1rem",
    },
    detailHeader: {
        fontWeight: "bold",
    },
    detailData: {
        marginLeft: "1rem",
    },
})

interface CollapsibleRowProps {
    group: Types.Group
    actions?: IListAction[]
    onApply?: (groupId: string) => void
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = (props) => {
    const { group } = props
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()

    let roomPreferenceJSX = "Any"

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
                <TableCell align="left">
                    <Chip
                        color="default"
                        size="small"
                        label={groupUtil.getOpenSlots(props.group)}
                    />
                </TableCell>

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
                            <Card
                                variant="outlined"
                                style={{ padding: "1rem" }}
                            >
                                <CardContent>
                                    <div className={classes.row}>
                                        <div className={classes.detailHeader}>
                                            Leader:
                                        </div>
                                        {group.leader ? (
                                            <div style={{ marginLeft: "1rem" }}>
                                                <UserBadge
                                                    user={group.leader}
                                                />
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className={classes.row}>
                                        <div className={classes.detailHeader}>
                                            Day/Time Preference:
                                        </div>
                                        <div className={classes.detailData}>
                                            Any
                                        </div>
                                    </div>

                                    <div className={classes.row}>
                                        <div className={classes.detailHeader}>
                                            Age Range:
                                        </div>
                                        <div className={classes.detailData}>
                                            {group.min_age} - {group.max_age}
                                        </div>

                                        <div
                                            className={classes.detailHeader}
                                            style={{ marginLeft: "2rem" }}
                                        >
                                            Open Slots:
                                        </div>
                                        <div className={classes.detailData}>
                                            {groupUtil.getOpenSlots(group)}
                                        </div>
                                    </div>

                                    <div className={classes.row}>
                                        <div className={classes.detailHeader}>
                                            Description:
                                        </div>
                                        <div className={classes.detailData}>
                                            {group.description}
                                        </div>
                                    </div>
                                </CardContent>

                                <CardActions
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => {
                                                if (props.onApply)
                                                    props.onApply(group.id)
                                            }}
                                        >
                                            Apply Now
                                        </Button>
                                    </div>
                                </CardActions>
                            </Card>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default CollapsibleRow
