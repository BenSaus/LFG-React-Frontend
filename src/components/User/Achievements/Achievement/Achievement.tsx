import React from "react"
import * as Types from "../../../../generated/graphql"

interface AchievementProps {
    achievement: Types.Achievement
}

const Achievement: React.FC<AchievementProps> = (props) => {
    console.log(props.achievement)

    let baseUrl = process.env.REACT_APP_IMAGE_BASE_URL
        ? process.env.REACT_APP_IMAGE_BASE_URL
        : ""

    return (
        <div>
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
