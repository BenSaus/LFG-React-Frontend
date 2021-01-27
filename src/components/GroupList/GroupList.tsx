import React from "react"
import * as Types from "generated/graphql"
import {
    ListItemText,
    ListItemSecondaryAction,
    ListItem,
    IconButton,
    List,
    Typography,
} from "@material-ui/core"
import { FindInPage } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    listItem: {},
}))

interface GroupListProps {
    groups: Types.Group[]
    onClick: (groupId: string) => void
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

    return (
        <List dense>
            {props.groups.map((group) => (
                <ListItem
                    role={undefined}
                    dense
                    button
                    key={group.id}
                    className={classes.listItem}
                    onClick={() => props.onClick(group.id)}
                >
                    <ListItemText>
                        <Typography variant="h6">{group.name}</Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                            <FindInPage />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default GroupList
