import React from "react"
import {
    Avatar,
    makeStyles,
    ListItemText,
    ListItemAvatar,
    ListItem,
    List,
    Typography,
} from "@material-ui/core"

import * as Types from "generated/graphql"
import UserBadge from "components/UserBadge/UserBadge"

const useStyles = makeStyles((theme) => ({
    memberContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
}))

interface MembersListProps {
    members: Types.UsersPermissionsUser[]
    leader: Types.UsersPermissionsUser
}

const MembersList: React.FC<MembersListProps> = (props) => {
    const classes = useStyles()

    return (
        <div>
            <List>
                <div className={classes.memberContainer}>
                    <ListItem button alignItems="flex-start">
                        <UserBadge user={props.leader} subtitle="Leader" />
                    </ListItem>
                </div>

                {props.members.map((member: Types.UsersPermissionsUser) => (
                    <React.Fragment key={member.id}>
                        <div className={classes.memberContainer}>
                            <ListItem button alignItems="flex-start">
                                <UserBadge user={member} subtitle="Member" />
                            </ListItem>
                        </div>
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default MembersList
