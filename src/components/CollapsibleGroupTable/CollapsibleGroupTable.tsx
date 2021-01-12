import React from "react"
import * as Types from "../../generated/graphql"
import { Group } from "../../generated/graphql"
import groupUtil from "../../utils/groupUtil"
import { makeStyles } from "@material-ui/core/styles"
import IListAction from "../../shared/IListAction"
import {
    Avatar,
    Box,
    Chip,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@material-ui/core"
import CollapsibleRow from "./CollapsibleRow/CollapsibleRow"

const useStyles = makeStyles({
    userCell: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    },
})

interface CollapsibleGroupTableProps {
    groups: Group[]
    clickedGroup: (groupId: string) => void
    // showGroupsWithNoOpenSlots: boolean
    // showLeader?: boolean
    // showOpenSlots?: boolean
    // showMemberNumber?: boolean
    // showPendingApps?: boolean

    actions?: IListAction[]
}

const CollapsibleGroupTable: React.FC<CollapsibleGroupTableProps> = (props) => {
    const classes = useStyles()

    let filteredGroups: Types.Group[]
    const [open, setOpen] = React.useState(false)

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}></TableCell>

                        <TableCell style={{ fontWeight: "bold" }} align="left">
                            Group Name
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                            Day / Time
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                            Room Preference
                        </TableCell>
                        <TableCell
                            style={{ fontWeight: "bold" }}
                            align="center"
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.groups.map((group: Types.Group) => (
                        <CollapsibleRow
                            group={group}
                            key={group.id}
                            actions={props.actions}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CollapsibleGroupTable
