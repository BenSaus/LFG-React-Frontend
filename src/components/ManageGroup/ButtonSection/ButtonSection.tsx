import React from "react"

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
            <button
                style={{ padding: "1rem" }}
                onClick={() => props.onCloseGroupClick(props.groupId)}
            >
                Close Group
            </button>
        )
    } else {
        buttonsJSX = (
            <button
                style={{ padding: "1rem" }}
                onClick={() => props.onOpenGroupClick(props.groupId)}
            >
                Open Group
            </button>
        )
    }

    return buttonsJSX
}

export default ButtonSection
