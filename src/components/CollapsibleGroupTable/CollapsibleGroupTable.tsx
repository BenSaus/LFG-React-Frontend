import React from "react"
import * as Types from "generated/graphql"
import { Group } from "generated/graphql"

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import CollapsibleRow from "./CollapsibleRow/CollapsibleRow"
import IListAction from "shared/IListAction"

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
    actions?: IListAction[]
    onApply?: (groupId: string) => void
}

const CollapsibleGroupTable: React.FC<CollapsibleGroupTableProps> = (props) => {
    const classes = useStyles()

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
                        <TableCell style={{ fontWeight: "bold" }} align="left">
                            Open Slots
                        </TableCell>

                        {props.actions !== undefined ? (
                            <TableCell
                                style={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Actions
                            </TableCell>
                        ) : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.groups.map((group: Types.Group) => (
                        <CollapsibleRow
                            group={group}
                            key={group.id}
                            actions={props.actions}
                            onApply={props.onApply}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CollapsibleGroupTable
