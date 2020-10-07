import React, { ReactElement } from "react"
import * as Types from "../../types-and-hooks"
import Group from "../../components/Groups/Group/Group"
import styles from "./Groups.module.css"
import { Link } from "react-router-dom"

interface GroupsProps {
    groups: Types.Group[]
}

const Groups: React.FC<GroupsProps> = (props) => {
    let groupsJsx
    if (props.groups) {
        groupsJsx = props.groups.map((group: Types.Group) => {
            return (
                <Link key={group.id} to={`/group/${group.id}`}>
                    <Group group={group} />
                </Link>
            )
        })
    }

    return <div className={styles.Groups}>{groupsJsx}</div>
}

export default Groups
