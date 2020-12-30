import React from "react"
import { Group } from "../../generated/graphql"
import GroupComponent from "./Group/Group"
import groupUtil from "../../utils/groupUtil"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    groupList: {
        display: "flex",
        justifyContent: "center",
    },
})

interface GroupListProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
    showGroupsWithNoOpenSlots: boolean
}

const GroupList: React.FC<GroupListProps> = (props) => {
    const classes = useStyles()

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

    return <div className={classes.groupList}>{groupsJsx}</div>
}

export default GroupList
