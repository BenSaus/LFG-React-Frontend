import React from "react"
import { Group } from "../../generated/graphql"
import GroupComponent from "../../components/Groups/Group/Group"
import styles from "./Groups.module.css"

interface GroupsProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
}

const Groups: React.FC<GroupsProps> = (props) => {
    let groupsJsx
    if (props.groups) {
        groupsJsx = props.groups.map((group: Group) => {
            return (
                <GroupComponent
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
