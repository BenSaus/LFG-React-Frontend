import React from "react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"

import { useQuery } from "@apollo/client"
import * as Types from "generated/graphql"
import { GetGroupDocument } from "generated/graphql"

import { Button, Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import groupUtil from "utils/groupUtil"

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "500px",
        textAlign: "left",
    },
    groupName: {
        textAlign: "left",
        fontWeight: "bold",
    },
    center: {
        display: "flex",
        justifyContent: "center",
    },
    backButton: {
        margin: "1rem",
    },
}))

interface GroupInfoParams {
    id: string | undefined
}

interface GroupInfoProps extends RouteComponentProps<GroupInfoParams> {}

const GroupInfo: React.FC<GroupInfoProps> = (props) => {
    const groupId = props.match.params.id

    // Style
    const classes = useStyles()

    // GraphQL
    const { loading, error, data } = useQuery(GetGroupDocument, {
        variables: { id: groupId },
    })

    // Handlers
    const onApply = () => {
        props.history.push(`/apply/${groupId}`)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const groupInfo: Types.Group = data.group

    const leaderJSX = (
        <Link to={`/user/${groupInfo.leader?.id}`}>
            <span>{groupInfo.leader?.username}</span>
        </Link>
    )

    let roomPreferenceJSX = "Any"

    if (groupInfo.preferred_rooms && groupInfo.preferred_rooms.length > 0) {
        roomPreferenceJSX = ""
        for (let x = 0; x < groupInfo.preferred_rooms.length; x++) {
            let room = groupInfo.preferred_rooms[x]
            if (room) {
                if (x === groupInfo.preferred_rooms.length - 1) {
                    roomPreferenceJSX += room.name
                } else {
                    roomPreferenceJSX += room.name + ", "
                }
            }
        }
    }

    let open_slots = groupUtil.getOpenSlots(groupInfo)

    return (
        <React.Fragment>
            <Typography variant="h4" style={{ margin: "2rem" }}>
                Group Details
            </Typography>
            <div className={classes.center}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" className={classes.groupName}>
                            {groupInfo.name}
                        </Typography>
                        <div>
                            <p>Leader: {leaderJSX}</p>
                            <p>Description: {groupInfo.description}</p>
                            <p>
                                Age Range: {groupInfo.min_age} -{" "}
                                {groupInfo.max_age}
                            </p>
                            <p>Open Slots: {open_slots}</p>
                            <p>Room Preference: {roomPreferenceJSX} </p>
                            <p>Day/Time Preference: Any</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Button
                color="primary"
                className={classes.backButton}
                variant="contained"
                onClick={() => props.history.goBack()}
            >
                Back
            </Button>
            <Button color="primary" variant="contained" onClick={onApply}>
                Apply
            </Button>
        </React.Fragment>
    )
}

export default GroupInfo
