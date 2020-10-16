import { gql } from "@apollo/client"

export const MY_APPLICATIONS = gql`
    query($applicant: ID!) {
        applications(where: { applicant: $applicant }) {
            id
            message
            applicant {
                username
            }
            group {
                name
            }
        }
    }
`
