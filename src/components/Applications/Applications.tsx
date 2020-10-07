import React from "react"
import * as Types from "../../types-and-hooks"
import styles from "./Applications.module.css"
import Application from "./Application/Application"

interface ApplicationsProps {
    applications: Types.Application[]
}

const Applications: React.FC<ApplicationsProps> = (props) => {
    let appsJsx
    if (props.applications) {
        appsJsx = props.applications.map((app) => {
            return <Application app={app} key={app.id} />
        })
    }

    return <div className={styles.Applications}>{appsJsx}</div>
}

export default Applications
