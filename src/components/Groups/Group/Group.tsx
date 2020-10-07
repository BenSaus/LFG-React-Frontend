import React from "react"
import * as Types from "../../../types-and-hooks"
import styles from "./Group.module.css"

interface GroupProps {
    group: Types.Group
}

const Group: React.FC<GroupProps> = (props) => {
    return (
        <div className={styles.Group}>
            <p>Id: {props.group.id}</p>
            <p>Name: {props.group.name}</p>
            <p>Open Slots: {props.group.open_slots}</p>
        </div>
    )
}

export default Group
