import React, { ReactElement } from "react"
import * as Types from "../../types-and-hooks"
import Group from "../../components/Groups/Group/Group"
import styles from "./Groups.module.css"
import { Link } from "react-router-dom"

interface GroupsProps {
    groups: Types.Group[]
}

export default function Groups(props: GroupsProps): ReactElement {
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

    return (
        <div className={styles.Groups}>
            <h2>Groups</h2>
            {groupsJsx}
        </div>
    )
}
