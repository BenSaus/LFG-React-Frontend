import {
    Avatar,
    makeStyles,
    ListItemText,
    ListItemAvatar,
    ListItem,
    List,
    Typography,
} from "@material-ui/core"
import Message from "./Message/Message"
import React from "react"
import * as Types from "../../../generated/graphql"

const useStyles = makeStyles((theme) => ({
    messageList: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "grey[900]", Not working
        overflowX: "hidden",
        overflowY: "auto",
        height: "99%",
        width: "99%",
    },
}))

interface MessageListProps {}

const MessageList: React.FC<MessageListProps> = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.messageList}>
            <Message
                text="Cillum consectetur dolore aute eu elit id voluptate ipsum dolore quis dolor."
                onRight={false}
            />
            <Message text="Hi there" onRight={true} />
            <Message text="Nope" onRight={false} />
            <Message text="To Infinity" onRight={false} />
            <Message text="Hi there" onRight={true} />
            <Message text="Gut Biome" onRight={true} />
            <Message
                text="Ullamco laborum do duis proident in deserunt occaecat voluptate Lorem ad irure."
                onRight={true}
            />
            <Message
                text="Minim minim ullamco consectetur dolor id id irure esse deserunt Lorem proident sit."
                onRight={true}
            />
        </div>
    )
}

export default MessageList
