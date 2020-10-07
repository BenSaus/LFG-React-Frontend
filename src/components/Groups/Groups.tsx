import React from "react"
import * as Types from "../../types-and-hooks"
import Group from "../../components/Groups/Group/Group"
import styles from "./Groups.module.css"

interface GroupsProps {
    groups: Types.Group[]
    clickedGroup: (groupId: string) => void
}

const Groups: React.FC<GroupsProps> = (props) => {
    let groupsJsx
    if (props.groups) {
        groupsJsx = props.groups.map((group: Types.Group) => {
            return (
                <Group
                    group={group}
                    clicked={props.clickedGroup}
                    key={group.id}
                />
            )
        })
    }

    return <div className={styles.Groups}>{groupsJsx}</div>
}

export default Groups
