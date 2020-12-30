import React from "react"
import * as Types from "../../../generated/graphql"
import groupUtil from "../../../utils/groupUtil"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"

const useStyles = makeStyles({
    root: {
        margin: "1rem",
        padding: "1rem",
        maxWidth: "400px",
    },
    groupDetails: {
        textAlign: "left",
    },
    groupName: {
        fontWeight: "bold",
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
})

interface GroupProps {
    group: Types.Group
    clicked: (groupId: string) => void
}

const Group: React.FC<GroupProps> = (props) => {
    const classes = useStyles()
    const open_slots = groupUtil.getOpenSlots(props.group)

    return (
        <Card variant="outlined" className={classes.root}>
            <p className={classes.groupName}>{props.group.name}</p>
            <div className={classes.groupDetails}>
                <p>Description: {props.group.description}</p>
                <p>Open slots: {open_slots}</p>
                <p>
                    Age Range: {props.group.min_age} - {props.group.max_age}
                </p>
            </div>
            <CardActions className={classes.cardActions}>
                <Button
                    variant="contained"
                    onClick={() => props.clicked(props.group.id)}
                    size="small"
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default Group
