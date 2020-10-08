import React from "react"
import * as Types from "../../types-and-hooks"

interface RoomSelectProps {
    rooms: Types.Room[]
}

const RoomSelect: React.FC<RoomSelectProps> = (props) => {
    const options = props.rooms.map((room) => {
        return (
            <option value={room.id} key={room.id}>
                {room.name} room at {room.business?.name}
            </option>
        )
    })
    return (
        <React.Fragment>
            <select name="test" id="test">
                {options}
            </select>
        </React.Fragment>
    )
}

export default RoomSelect
