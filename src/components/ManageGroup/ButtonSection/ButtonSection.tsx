import React from "react"
import Button from "@material-ui/core/Button"

interface ButtonSectionProps {
    onCloseGroupClick: (id: string) => Promise<void>
    onOpenGroupClick: (id: string) => Promise<void>
    groupClosed: boolean
    groupId: string
}

const ButtonSection: React.FC<ButtonSectionProps> = (props) => {
    let buttonsJSX = null
    if (!props.groupClosed) {
        buttonsJSX = (
            <Button
                color="primary"
                variant="contained"
                style={{ padding: "1rem" }}
                onClick={() => props.onCloseGroupClick(props.groupId)}
            >
                Close Membership
            </Button>
        )
    } else {
        buttonsJSX = (
            <Button
                color="primary"
                variant="contained"
                style={{ padding: "1rem" }}
                onClick={() => props.onOpenGroupClick(props.groupId)}
            >
                Open Membership
            </Button>
        )
    }

    return buttonsJSX
}

export default ButtonSection
