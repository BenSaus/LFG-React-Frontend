import React from "react"
import * as Types from "../../../../generated/graphql"

import Clear from "@material-ui/icons/Clear"
import {
    TableCell,
    TableRow,
    Table,
    TableHead,
    TableBody,
    TableContainer,
    IconButton,
    Chip,
    Avatar,
    Tooltip,
    makeStyles,
} from "@material-ui/core"
import UserBadge from "../../../UserBadge/UserBadge"

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

interface InvitessProps {
    invites: Types.Invite[]
    onDismissClicked: (id: string) => Promise<void>
}

const Invites: React.FC<InvitessProps> = (props) => {
    const classes = useStyles()

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.invites.map((invite) => (
                        <TableRow key={invite.id}>
                            <TableCell component="th" scope="row">
                                <div className={classes.userCell}>
                                    {invite.invitee ? (
                                        <UserBadge user={invite.invitee} />
                                    ) : null}
                                </div>
                            </TableCell>
                            <TableCell>{invite.message}</TableCell>
                            <TableCell align="center">
                                <Chip
                                    color="primary"
                                    size="small"
                                    label={invite.status}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Dismiss">
                                    <IconButton
                                        onClick={() =>
                                            props.onDismissClicked(invite.id)
                                        }
                                    >
                                        <Clear />
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

export default Invites
