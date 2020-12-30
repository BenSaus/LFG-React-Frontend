import React from "react"
import * as Types from "../../generated/graphql"
import Achievements from "./Achievements/Achievements"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    image: {
        marginRight: "5rem",
    },
    userDetails: {
        textAlign: "left",
    },
    card: {
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
    },
}))

interface UserProps {
    user: Types.UsersPermissionsUser
}

const User: React.FC<UserProps> = (props) => {
    // Style
    const classes = useStyles()

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
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.image}>
                    <img
                        src={baseUrl + props.user.image?.url}
                        alt=""
                        style={{
                            border: "1px solid black",
                            height: "300px",
                            // width: "200px",
                        }}
                    />
                </div>
                <div className={classes.userDetails}>
                    <p>{props.user.username}</p>
                    <p>Age: {props.user.age}</p>
                    <p>About: {props.user.about}</p>

                    <div>{achievementsJsx}</div>
                </div>
            </Card>
        </div>
    )
}

export default User
