import React, { useState } from "react"
import * as Types from "../../../../../generated/graphql"

import IconButton from "@material-ui/core/IconButton"
import FindInPage from "@material-ui/icons/FindInPage"
import Delete from "@material-ui/icons/Delete"

import ListItem, { ListItemProps } from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Avatar from "@material-ui/core/Avatar"
import ConfirmDialog from "../../../../ConfirmDialog/ConfirmDialog"

interface MemberProps {
    member: Types.UsersPermissionsUser
    viewClicked: (memberId: string) => void
    removeClicked: (memberId: string) => void
}

const Member: React.FC<MemberProps> = (props) => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)

    const onConfirm = () => {
        console.log("Hit confirm!!!")
        props.removeClicked(props.member.id)
    }

    return (
        <React.Fragment>
            <ListItem button alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText>
                    <p>{props.member.username}</p>
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        onClick={() => props.viewClicked(props.member.id)}
                    >
                        <FindInPage />
                    </IconButton>

                    <IconButton onClick={() => setShowConfirmDialog(true)}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            <ConfirmDialog
                title="Remove user?"
                open={showConfirmDialog}
                setOpen={setShowConfirmDialog}
                onConfirm={onConfirm}
            >
                {`Are you sure you want to remove ${props.member.username} from the group?`}
            </ConfirmDialog>
        </React.Fragment>
    )
}

export default Member
