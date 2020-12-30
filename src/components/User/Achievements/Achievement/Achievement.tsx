import React from "react"
import * as Types from "../../../../generated/graphql"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: "1rem",
        textAlign: "center",
    },
}))

interface AchievementProps {
    achievement: Types.Achievement
}

const Achievement: React.FC<AchievementProps> = (props) => {
    const classes = useStyles()

    let baseUrl = process.env.REACT_APP_IMAGE_BASE_URL
        ? process.env.REACT_APP_IMAGE_BASE_URL
        : ""

    return (
        <div className={classes.root}>
            <img
                src={baseUrl + props.achievement.image?.url}
                title={
                    props.achievement.description
                        ? props.achievement.description
                        : ""
                }
                style={{ width: "75px", height: "75px" }}
            />
            <br />
            <span>{props.achievement.name}</span>
        </div>
    )
}

export default Achievement
