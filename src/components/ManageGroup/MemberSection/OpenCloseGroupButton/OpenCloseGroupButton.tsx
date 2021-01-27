import React, { useState } from "react"
import { Button } from "@material-ui/core"

import { useMutation } from "@apollo/client"
import { CloseGroupDocument, OpenGroupDocument } from "generated/graphql"

import ConfirmDialog from "components/ConfirmDialog/ConfirmDialog"

interface OpenCloseGroupButtonProps {
    groupId: string
    closed: boolean
    onCloseGroup: (groupId: string) => void
    onOpenGroup: (groupId: string) => void
}

const OpenCloseGroupButton: React.FC<OpenCloseGroupButtonProps> = (props) => {
    // State
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [groupClosed, setGroupClosed] = useState(props.closed)

    // GraphQL
    const [closeGroup, { data: closeData }] = useMutation(CloseGroupDocument)
    const [openGroup, { data: openData }] = useMutation(OpenGroupDocument)

    const onCloseGroupClick = async (groupId: string) => {
        const resp = await closeGroup({
            variables: {
                id: groupId,
            },
        })

        setGroupClosed(true)
    }

    const onOpenGroupClick = async (groupId: string) => {
        const resp = await openGroup({
            variables: {
                id: groupId,
            },
        })

        setGroupClosed(false)
    }

    return (
        <React.Fragment>
            <Button
                onClick={() => setShowConfirmDialog(true)}
                variant="contained"
                color="primary"
                size="small"
            >
                {groupClosed ? "Open Membership" : "Close Membership"}
            </Button>

            <ConfirmDialog
                title={groupClosed ? "Open Membership?" : "Close membership?"}
                open={showConfirmDialog}
                setOpen={setShowConfirmDialog}
                onConfirm={() =>
                    groupClosed
                        ? onOpenGroupClick(props.groupId)
                        : onCloseGroupClick(props.groupId)
                }
            >
                {groupClosed
                    ? `Do you want to open membership? `
                    : `Are you ready close membership? When membership is closed, you will be able to book an escape room.`}
            </ConfirmDialog>
        </React.Fragment>
    )
}

export default OpenCloseGroupButton
