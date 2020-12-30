import React from "react"
import * as Types from "../../../../generated/graphql"
import Applicant from "./Applicant/Applicant"

import List from "@material-ui/core/List"

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

    return <List>{appsJsx}</List>
}

export default Applicants
