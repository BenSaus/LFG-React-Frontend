import React from "react"
import { useQuery } from "@apollo/client"
import { RouteComponentProps } from "react-router"
import * as Types from "../../generated/graphql"
import { Link } from "react-router-dom"
import { GetGroupDocument } from "../../generated/graphql"
import groupUtil from "../../utils/groupUtil"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    card: {
        padding: "1rem",
        maxWidth: "500px",
        textAlign: "left",
    },
    groupName: {
        textAlign: "center",
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

    const onApply = () => {
        props.history.push(`/apply/${groupId}`)
    }

    let open_slots = groupUtil.getOpenSlots(groupInfo)

    return (
        <React.Fragment>
            <h2>Group Details</h2>
            <h3 className={classes.groupName}>{groupInfo.name}</h3>
            <div className={classes.center}>
                <Card variant="outlined" className={classes.card}>
                    <div>
                        <p>Leader: {leaderJSX}</p>
                        <p>Description: {groupInfo.description}</p>
                        <p>
                            Age Range: {groupInfo.min_age} - {groupInfo.max_age}
                        </p>
                        <p>Open Slots: {open_slots}</p>
                        <p>Room Preference: {roomPreferenceJSX} </p>
                        <p>Day/Time Preference: Any</p>
                    </div>
                </Card>
            </div>
            <Button color="primary" variant="contained" onClick={onApply}>
                Apply
            </Button>
            <Button
                color="primary"
                className={classes.backButton}
                variant="contained"
                onClick={() => props.history.goBack()}
            >
                Back
            </Button>
        </React.Fragment>
    )
}

export default GroupInfo
