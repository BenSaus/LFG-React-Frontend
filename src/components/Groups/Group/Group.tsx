import React from "react"
import * as Types from "../../../generated/graphql"
import styles from "./Group.module.css"
import groupUtil from "../../../utils/groupUtil"

interface GroupProps {
    group: Types.Group
    clicked: (groupId: string) => void
}

const Group: React.FC<GroupProps> = (props) => {
    const open_slots = groupUtil.getOpenSlots(props.group)

    return (
        <div
            className={styles.Group}
            onClick={() => props.clicked(props.group.id)}
        >
            <p className={styles.Label}>{props.group.name}</p>
            <p>Description: {props.group.description}</p>
            <p>Open slots: {open_slots}</p>
            <p>
                Age Range: {props.group.min_age} - {props.group.max_age}
            </p>
        </div>
    )
}

export default Group
