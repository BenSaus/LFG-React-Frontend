import React from "react"
import * as Types from "../../../types-and-hooks"
import styles from "./Group.module.css"

interface GroupProps {
    group: Types.Group
}

const Group: React.FC<GroupProps> = (props) => {
    return (
        <div className={styles.Group}>
            <p>Name: {props.group.name}</p>
            <p>Description: {props.group.description}</p>
            <p>Open Slots: {props.group.open_slots}</p>
            <p>
                Age Range: {props.group.min_age} - {props.group.max_age}
            </p>
        </div>
    )
}

export default Group
