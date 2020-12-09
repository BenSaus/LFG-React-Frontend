import React from "react"
import { Group } from "../../generated/graphql"
import GroupComponent from "./Group/Group"
import styles from "./Groups.module.css"
import groupUtil from "../../utils/groupUtil"

interface GroupListProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
    showGroupsWithNoOpenSlots: boolean
}

const GroupList: React.FC<GroupListProps> = (props) => {
    let groupsJsx
    if (props.groups) {
        groupsJsx = props.groups.map((group: Group) => {
            if (
                props.showGroupsWithNoOpenSlots ||
                groupUtil.getOpenSlots(group) > 0
            ) {
                return (
                    <GroupComponent
                        group={group}
                        clicked={props.clickedGroup}
                        key={group.id}
                    />
                )
            }
        })
    }

    return <div className={styles.Groups}>{groupsJsx}</div>
}

export default GroupList
