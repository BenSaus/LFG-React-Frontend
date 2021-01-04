import {
    Avatar,
    makeStyles,
    ListItemText,
    ListItemAvatar,
    ListItem,
    List,
    Typography,
} from "@material-ui/core"
import React from "react"
import * as Types from "../../../generated/graphql"

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
                        <ListItemAvatar>
                            <Avatar src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="subtitle1">
                                {props.leader.username}
                            </Typography>
                            <Typography variant="caption">Leader</Typography>
                        </ListItemText>
                    </ListItem>
                </div>

                {props.members.map((member: Types.UsersPermissionsUser) => (
                    <React.Fragment key={member.id}>
                        <div className={classes.memberContainer}>
                            <ListItem button alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant="subtitle1">
                                        {member.username}
                                    </Typography>
                                    <Typography variant="caption">
                                        Member
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </div>
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default MembersList
