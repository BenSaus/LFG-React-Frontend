import React from "react"
import * as Types from "../../generated/graphql"
import Applicant from "./Applicant/Applicant"
import styles from "./Applicants.module.css"

interface ApplicantsProps {
    acceptApplication: (applicationId: string) => void
    rejectApplication: (applicationId: string) => void
    applications?: Types.Application[]
}

const Applicants: React.FC<ApplicantsProps> = (props) => {
    let appsJsx = null
    if (props.applications) {
        appsJsx = props.applications.map((app) => {
            return (
                <Applicant
                    key={app.id}
                    application={app}
                    acceptApplication={props.acceptApplication}
                    rejectApplication={props.rejectApplication}
                />
            )
        })
    }

    return <div className={styles.Applicants}>{appsJsx}</div>
}

export default Applicants
