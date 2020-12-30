import React from "react"
import * as Types from "../../../../../generated/graphql"
import styles from "./Member.module.css"

import IconButton from "@material-ui/core/IconButton"
import FindInPage from "@material-ui/icons/FindInPage"
import Delete from "@material-ui/icons/Delete"

import ListItem, { ListItemProps } from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Avatar from "@material-ui/core/Avatar"

interface MemberProps {
    member: Types.UsersPermissionsUser
    viewClicked: (memberId: string) => void
    removeClicked: (memberId: string) => void
}

const Member: React.FC<MemberProps> = (props) => {
    return (
        <ListItem button alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText>
                <p>{props.member.username}</p>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => props.viewClicked(props.member.id)}>
                    <FindInPage />
                </IconButton>

                <IconButton
                    onClick={() => props.removeClicked(props.member.id)}
                >
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Member
