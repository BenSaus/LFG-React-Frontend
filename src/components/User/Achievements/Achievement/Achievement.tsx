import React from "react"
import * as Types from "../../../../types-and-hooks"

interface AchievementProps {
    achievement: Types.Achievement
}

const Achievement: React.FC<AchievementProps> = (props) => {
    console.log(props.achievement)

    const baseUrl = "http://localhost:1337" // TODO: HARDCODED...Move into store

    return (
        <div>
            <img
                src={baseUrl + props.achievement.image?.url}
                alt=""
                style={{ width: "75px", height: "75px" }}
            />
            <br />
            <span>{props.achievement.name}</span>
        </div>
    )
}

export default Achievement
