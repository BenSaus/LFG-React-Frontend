import {
    Avatar,
    makeStyles,
    ListItemText,
    ListItemAvatar,
    ListItem,
    List,
    Typography,
    Card,
    CardContent,
} from "@material-ui/core"
import React from "react"
import * as Types from "../../../../generated/graphql"

const useStyles = makeStyles((theme) => ({
    root: {},
    list: {
        display: "flex",
        flexDirection: "column",
    },
    avatar: {
        margin: "0.75rem",
    },
    right: {
        alignSelf: "flex-end",
    },
    messageContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "0.75rem",
    },
}))

interface MessageProps {
    onRight: boolean
    text: string // TODO: This will change to a message data type
}

const Message: React.FC<MessageProps> = (props) => {
    const classes = useStyles()

    if (props.onRight) {
        return (
            <div
                className={classes.messageContainer}
                style={{ display: "flex", justifyContent: "flex-end" }}
            >
                <div>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body1">
                                {props.text}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography variant="caption">
                        11:01 AM | Yesterday
                    </Typography>
                </div>
                <Avatar
                    className={classes.avatar}
                    src="/static/images/avatar/2.jpg"
                />
            </div>
        )
    } else {
        return (
            <div className={classes.messageContainer}>
                <Avatar
                    className={classes.avatar}
                    src="/static/images/avatar/2.jpg"
                />
                <div>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body1">
                                {props.text}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography variant="caption">
                        11:01 AM | Yesterday
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Message
