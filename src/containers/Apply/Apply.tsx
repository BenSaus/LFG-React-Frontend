import React, { useState } from "react"
import { RootType } from "store/rootReducer"
import { useSelector } from "react-redux"
import { RouteComponentProps } from "react-router"
import { AuthState } from "store/slices/auth"

import { useMutation } from "@apollo/client"
import {
    ApplyToGroupDocument,
    GetApplicationsToThisGroupDocument,
} from "generated/graphql"

interface ApplyParams {
    id: string | undefined
}

interface ApplyProps extends RouteComponentProps<ApplyParams> {}

const Apply: React.FC<ApplyProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // State
    let [appSent, setAppSent] = useState(false)
    let [message, setMessage] = useState("")
    // const [canApply, setCanApply] = useState<boolean | null>(null)

    const [createApplication, { data }] = useMutation(ApplyToGroupDocument, {
        variables: {
            applicant: myId,
            group: props.match.params.id,
            message: message,
        },
    })

    // GraphQL
    // TODO: Check through these. If we have already applied to this group
    //      Disable the apply button
    //          Add a tooltip that says, "You've already applied to this group"
    // const { loading, error, data: myAppsData } = useQuery(
    //     GetApplicationsToThisGroupDocument,
    //     {
    //         variables: {
    //             applicant: myId,
    //             group: props.match.params.id,
    //         },
    //         onCompleted: (data) => {
    //             console.log("onCompleted", data)
    //             console.log(data.applications)

    //             if (data.applications.length === 0) {
    //                 setCanApply(true)
    //             } else {
    //                 setCanApply(false)
    //             }
    //         },
    //     }
    // )

    // Render
    // if (loading) return <p>Loading...</p>
    // if (error) {
    //     console.log(error)
    //     return <p>Error :(</p>
    // }

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
