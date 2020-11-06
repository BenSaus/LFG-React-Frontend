import React from "react"
import * as Types from "../../generated/graphql"
import Achievements from "./Achievements/Achievements"

interface UserProps {
    user: Types.UsersPermissionsUser
}

const User: React.FC<UserProps> = (props) => {
    console.log(props.user)

    let achievementsJsx = null
    if (props.user.achievements) {
        const achievements: Types.Achievement[] = []

        // Here I need to ensure there are no nulls to pass down into the achievements component
        for (const achieve of props.user.achievements) {
            if (achieve !== null && typeof achieve !== "undefined") {
                achievements.push(achieve)
            }
        }

        achievementsJsx = <Achievements achievements={achievements} />
    }

    let baseUrl = process.env.REACT_APP_IMAGE_BASE_URL
        ? process.env.REACT_APP_IMAGE_BASE_URL
        : ""

    return (
        <div>
            <img
                src={baseUrl + props.user.image?.url}
                alt=""
                style={{
                    border: "1px solid black",
                    height: "300px",
                    // width: "200px",
                }}
            />
            <p>UserName: {props.user.username}</p>
            <p>Age: {props.user.age}</p>
            <p>About: {props.user.about}</p>

            <div>{achievementsJsx}</div>
        </div>
    )
}

export default User
