import React from "react"
import * as Types from "../../../../../generated/graphql"

import IconButton from "@material-ui/core/IconButton"
import Clear from "@material-ui/icons/Clear"
import Chip from "@material-ui/core/Chip"
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from "@material-ui/core"

interface InviteProps {
    invite: Types.Invite
    onDismissClicked: (id: string) => Promise<void>
}

const Invite: React.FC<InviteProps> = (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText>
                <p>Invitee: {props.invite.invitee?.username}</p>
                <p>Message: {props.invite.message}</p>

                <Chip
                    color="primary"
                    size="small"
                    label={props.invite.status}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton
                    onClick={() => props.onDismissClicked(props.invite.id)}
                >
                    <Clear />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Invite
