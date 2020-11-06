import React from "react"
import styles from "./Application.module.css"
import * as Types from "../../../generated/graphql"

interface ApplicationProps {
    app: Types.Application
}

const Application: React.FC<ApplicationProps> = (props) => {
    return (
        <div className={styles.Application}>
            <p>Group: {props.app.group?.name}</p>
            <p>Message: {props.app.message}</p>
            <p>Status: {props.app.status}</p>
        </div>
    )
}

export default Application
