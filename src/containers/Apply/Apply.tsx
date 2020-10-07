import React, { ChangeEvent, useState } from "react"
import { RouteComponentProps } from "react-router"
import { gql, useMutation } from "@apollo/client"

const APPLY_TO_GROUP = gql`
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

interface ApplyParams {
    id: string | undefined
}

interface ApplyProps extends RouteComponentProps<ApplyParams> {}

const Apply: React.FC<ApplyProps> = (props) => {
    let [appSent, setAppSent] = useState(false)
    let [message, setMessage] = useState("")

    const [createApplication, { data }] = useMutation(APPLY_TO_GROUP, {
        variables: {
            applicant: 34,
            group: props.match.params.id,
            message: message,
        },
    })

    console.log("Appling to group: ", props.match.params.id)

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        createApplication()
        setAppSent(true)
    }

    const onHomeClick = () => {
        props.history.push("/")
    }

    const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    if (!appSent) {
        return (
            <React.Fragment>
                <h2>Apply</h2>
                <form onSubmit={onSubmit}>
                    <textarea
                        onChange={onMessageChange}
                        value={message}
                    ></textarea>
                    <br />
                    <button type="submit">Apply</button>
                </form>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h2>Apply</h2>
                <p>
                    Thank you for your application. The group will get back to
                    you.
                </p>
                <button onClick={onHomeClick}>Home</button>
            </React.Fragment>
        )
    }
}

export default Apply
