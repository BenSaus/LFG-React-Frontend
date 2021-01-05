import React from "react"
import * as Types from "../../generated/graphql"
import Checkbox from "@material-ui/core/Checkbox"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { FindInPage } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    listItem: {},
}))

interface GroupListProps {
    groups: Types.Group[]
    onClick: (groupId: string) => void
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

    console.log(props.groups[0].members)

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
