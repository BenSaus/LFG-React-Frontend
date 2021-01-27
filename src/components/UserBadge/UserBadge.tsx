import React from "react"

import { Avatar, makeStyles, Typography } from "@material-ui/core"
import * as Types from "generated/graphql"

const useStyles = makeStyles({
    userCell: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    },
})

interface UserBadgeProps {
    user: Types.UsersPermissionsUser
    subtitle?: string
}

const UserBadge: React.FC<UserBadgeProps> = ({ user, subtitle }) => {
    const classes = useStyles()

    let baseUrl = process.env.REACT_APP_IMAGE_BASE_URL
        ? process.env.REACT_APP_IMAGE_BASE_URL
        : ""

    const imageUrl = baseUrl + user.image?.url

    return (
        <div className={classes.userCell}>
            <Avatar className={classes.avatar} src={imageUrl} />

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1">{user.username}</Typography>
                {subtitle ? (
                    <Typography variant="caption">{subtitle}</Typography>
                ) : null}
            </div>
        </div>
    )
}

export default UserBadge
