import React from "react"
import styles from "./OpenSlot.module.css"

interface OpenSlotProps {}

const OpenSlot: React.FC<OpenSlotProps> = ({}) => {
    return (
        <div className={styles.OpenSlot}>
            <p>Open Slot</p>
            <div></div>
        </div>
    )
}

export default OpenSlot
