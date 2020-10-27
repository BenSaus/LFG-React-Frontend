import { gql } from "@apollo/client"

export const GET_OPEN_GROUPS = gql`
    query {
        groups {
            id
            name
            open_slots
            max_age
            min_age
            booking_status
            description
        }
    }
`

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

export const MY_GROUPS = gql`
    query($id: ID!) {
        groups(where: { members: { id: $id } }) {
            id
            name
            open_slots
            max_age
            min_age
            booking_status
            description
            leader {
                id
            }
        }
    }
`

export const GET_GROUP = gql`
    query($id: ID!) {
        group(id: $id) {
            id
            name
            booking_status
            min_age
            max_age
            leader {
                id
                username
            }
            description
            open_slots
        }
    }
`

export const GET_USER = gql`
    query($id: ID!) {
        user(id: $id) {
            id
            username
            email
            age
            image {
                url
                previewUrl
            }
            about
            open_to_invite
            hide_age
            achievements {
                id
                name
                image {
                    previewUrl
                    url
                }
            }
        }
    }
`

// TODO: WARNING: ID should be ID! yet this causes a strange error. Check over this
export const GET_MY_INVITES = gql`
    query($invitee: ID) {
        invites(where: { invitee: { id: $invitee }, status: "undecided" }) {
            id
            message
            group {
                name
            }
        }
    }
`

export const APPLY_TO_GROUP = gql`
    mutation($group: ID!, $applicant: ID!, $message: String!) {
        createApplication(
            input: {
                data: {
                    applicant: $applicant
                    message: $message
                    group: $group
                }
            }
        ) {
            application {
                id
                message
                group {
                    name
                }
            }
        }
    }
`

export const LOG_IN = gql`
    mutation($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
            jwt
            user {
                id
                username
            }
        }
    }
`
