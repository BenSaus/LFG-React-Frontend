import {
    Button,
    makeStyles,
    Modal,
    TextField,
    Typography,
} from "@material-ui/core"
import React, { useState } from "react"

import * as Types from "../../generated/graphql"

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },

    inviteMessage: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

    modal: {},
}))

interface InviteModalProps {
    user: Types.UsersPermissionsUser
    showModal: boolean
    onClose: () => void
    onSendInvite: (user: Types.UsersPermissionsUser, message: string) => void
}

const InvitePopup: React.FC<InviteModalProps> = (props) => {
    const classes = useStyles()

    // State
    const [message, setMessage] = useState("")

    // Handlers

    const onMessageChange = (event: any) => {
        setMessage(event.target.value)
    }

    const onSendInvite = (
        user: Types.UsersPermissionsUser,
        message: string
    ) => {
        props.onSendInvite(user, message)
        setMessage("")
    }

    return (
        <React.Fragment>
            <Modal
                open={props.showModal}
                onClose={props.onClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <Typography variant="h6">
                        Invite {props.user?.username}
                    </Typography>
                    <TextField
                        id="message"
                        name="message"
                        label="Invite Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        className={classes.inviteMessage}
                        value={message}
                        onChange={onMessageChange}
                    />

                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <Button onClick={props.onClose}>Cancel</Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => onSendInvite(props.user, message)}
                        >
                            <Typography variant="button">Send</Typography>
                        </Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default InvitePopup
