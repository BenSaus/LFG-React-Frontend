import React from "react"
import * as Types from "../../../generated/graphql"
import styles from "./Applicant.module.css"

interface ApplicantProps {
    acceptApplication: (applicationId: string) => void
    rejectApplication: (applicationId: string) => void
    application: Types.Application
}

const Applicant: React.FC<ApplicantProps> = (props) => {
    return (
        <div className={styles.Applicant}>
            <h4>Applicant</h4>
            <div>
                <p>{props.application.applicant?.username}</p>
                <p>{props.application.applicant?.about}</p>
                <p>{props.application.applicant?.age}</p>
            </div>
            <p>{props.application.message}</p>
            <div>
                <button
                    onClick={() =>
                        props.acceptApplication(props.application.id)
                    }
                >
                    Accept
                </button>
                <button
                    onClick={() =>
                        props.rejectApplication(props.application.id)
                    }
                >
                    Reject
                </button>
            </div>
        </div>
    )
}

export default Applicant
