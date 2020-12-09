import React from "react"
import * as Types from "../../generated/graphql"
import styles from "./ApplicationList.module.css"
import Application from "./Application/Application"

interface ApplicationListProps {
    applications: Types.Application[]
}

const ApplicationList: React.FC<ApplicationListProps> = (props) => {
    let appsJsx
    if (props.applications) {
        appsJsx = props.applications.map((app) => {
            return <Application app={app} key={app.id} />
        })
    }

    return <div className={styles.ApplicationList}>{appsJsx}</div>
}

export default ApplicationList
