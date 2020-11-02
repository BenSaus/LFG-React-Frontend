import React from "react"
import * as Types from "../../../generated/graphql"
import Achievement from "./Achievement/Achievement"

interface AchievementsProps {
    achievements: Types.Achievement[] | null
}

const Achievements: React.FC<AchievementsProps> = (props) => {
    let achieveJsx = null
    if (props.achievements) {
        achieveJsx = props.achievements.map((achievement) => {
            // return <p>Achievement: {achievement.name}</p>
            return (
                <Achievement achievement={achievement} key={achievement.id} />
            )
        })
    }

    return (
        <div>
            <h3>Achievements</h3>
            {achieveJsx}
        </div>
    )
}

export default Achievements
