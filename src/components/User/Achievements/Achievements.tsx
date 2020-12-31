import React from "react"
import * as Types from "../../../generated/graphql"
import Achievement from "./Achievement/Achievement"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
}))

interface AchievementsProps {
    achievements: Types.Achievement[] | null
}

const Achievements: React.FC<AchievementsProps> = (props) => {
    const classes = useStyles()

    let achieveJsx = null
    if (props.achievements) {
        achieveJsx = props.achievements.map((achievement) => {
            return (
                <Achievement achievement={achievement} key={achievement.id} />
            )
        })
    }

    return (
        <div>
            <Typography variant="h5">Achievements</Typography>
            <div className={classes.root}>{achieveJsx}</div>
        </div>
    )
}

export default Achievements
