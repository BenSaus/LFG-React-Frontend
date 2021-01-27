import React from "react"
import * as Types from "generated/graphql"

import {
    Checkbox,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItem,
    IconButton,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import List from "@material-ui/core/List"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: "450px",
    },
    listItem: {
        // display: "flex",
        // justifyContent: "flex-start",
        // width: "100%",
    },
}))

interface RoomListProps {
    rooms: Types.Room[]
    preferred: string[]
    onChange: (rooms: string[]) => void
}

const RoomList: React.FC<RoomListProps> = (props) => {
    const classes = useStyles()

    // State
    const [preferredRooms, setPreferredRooms] = React.useState<string[]>(
        props.preferred
    )

    // Handlers
    const changedRoomPreferrence = (roomId: string) => {
        const roomIdIndex = preferredRooms.indexOf(roomId)
        const preferredRoomsContainsRoomId = roomIdIndex !== -1
        let updatedRooms = [...preferredRooms]

        if (preferredRoomsContainsRoomId) {
            // Remove the preferred room
            updatedRooms.splice(roomIdIndex, 1)
        } else {
            // Add the new preferred room
            updatedRooms.push(roomId)
        }

        setPreferredRooms(updatedRooms)

        props.onChange(updatedRooms)
    }

    return (
        <List dense>
            {props.rooms.map((room) => (
                <ListItem
                    role={undefined}
                    dense
                    button
                    key={room.id}
                    className={classes.listItem}
                    onClick={() => changedRoomPreferrence(room.id)}
                >
                    <ListItemIcon>
                        <Checkbox
                            checked={preferredRooms.indexOf(room.id) !== -1}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary={`${room.name} at ${room.business?.name}`}
                    />
                    <ListItemSecondaryAction>
                        {/* <Tooltip title={room.name} placement="left-end"> */}
                        <IconButton edge="end" aria-label="comments">
                            <SearchIcon />
                        </IconButton>
                        {/* </Tooltip> */}
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default RoomList
