import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Tooltip,
    Typography,
} from "@material-ui/core"
import React from "react"
import * as Types from "../../generated/graphql"
import IListAction from "../../shared/IListAction"

const useStyles = makeStyles((theme) => ({}))

interface UserListProps {
    users: Types.UsersPermissionsUser[]
    onClickListItem?: (userId: string) => void
    actions?: IListAction[]
}

const UserList: React.FC<UserListProps> = (props) => {
    const classes = useStyles()

    return (
        <List>
            {props.users.map((user: Types.UsersPermissionsUser) => (
                <React.Fragment key={user.id}>
                    <div>
                        <ListItem
                            button
                            alignItems="flex-start"
                            onClick={() => {
                                if (props.onClickListItem)
                                    props.onClickListItem(user.id)
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="subtitle1">
                                    {user.username}
                                </Typography>
                            </ListItemText>
                            <ListItemSecondaryAction>
                                {props.actions?.map((action) => (
                                    <Tooltip
                                        title={action.tooltip}
                                        key={action.tooltip}
                                    >
                                        <IconButton
                                            onClick={() =>
                                                action.onClick(user.id)
                                            }
                                        >
                                            {action.iconJSX}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </ListItemSecondaryAction>
                        </ListItem>
                    </div>
                </React.Fragment>
            ))}
        </List>
    )
}

export default UserList
