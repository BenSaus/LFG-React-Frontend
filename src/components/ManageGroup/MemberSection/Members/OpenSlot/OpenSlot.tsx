import {
    Avatar,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    makeStyles,
    Typography,
} from "@material-ui/core"
import { Clear } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles({
    openSlotItem: {
        marginTop: "0.5rem",
        border: "1px solid #eee",
        borderRadius: "8px",
    },
    avatar: {
        marginRight: "1rem",
    },
})

interface OpenSlotProps {
    removeOpenSlot?: () => void
}

const OpenSlot: React.FC<OpenSlotProps> = ({}) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <ListItem
                button
                alignItems="flex-start"
                className={classes.openSlotItem}
            >
                <div style={{ display: "flex" }}>
                    <Avatar className={classes.avatar} />
                    <Typography variant="subtitle1" style={{ color: "#ccc" }}>
                        Open slot
                    </Typography>
                </div>
                <ListItemSecondaryAction>
                    <IconButton
                    // onClick={() => props.viewClicked(props.member.id)}
                    >
                        {/* <Clear /> */}
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </React.Fragment>
    )
}

export default OpenSlot
