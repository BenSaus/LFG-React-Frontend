import React from "react"
import * as Types from "generated/graphql"

import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemAvatar,
    Avatar,
    IconButton,
} from "@material-ui/core"
import ThumbUp from "@material-ui/icons/ThumbUp"
import ThumbDown from "@material-ui/icons/ThumbDown"
import { makeStyles } from "@material-ui/core/styles"

interface ApplicantProps {
    acceptApplication: (applicationId: string) => void
    rejectApplication: (applicationId: string) => void
    application: Types.Application
}

const Applicant: React.FC<ApplicantProps> = (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText>
                <span>{props.application.applicant?.username}</span>
                <p>{props.application.message}</p>
            </ListItemText>
            <ListItemSecondaryAction>
                <div>
                    <IconButton
                        onClick={() =>
                            props.acceptApplication(props.application.id)
                        }
                    >
                        <ThumbUp />
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            props.rejectApplication(props.application.id)
                        }
                    >
                        <ThumbDown />
                    </IconButton>
                </div>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Applicant
