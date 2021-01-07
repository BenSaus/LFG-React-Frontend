import React from "react"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core"

interface ConfirmDialogProps {
    title: string
    children: React.ReactNode
    open: boolean
    setOpen(value: boolean): void
    onConfirm(): void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={() => props.setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => props.setOpen(false)}
                        color="primary"
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => {
                            props.setOpen(false)
                            props.onConfirm()
                        }}
                        color="primary"
                        autoFocus
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default ConfirmDialog
