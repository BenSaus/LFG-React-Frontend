import React, { useState } from "react"
import { RouteComponentProps } from "react-router"
import { useMutation, useQuery } from "@apollo/client"
import { RootType } from "../../store/rootReducer"
import { useSelector } from "react-redux"
import { UserState } from "../../store/slices/user"
import { MY_APPLICATIONS, APPLY_TO_GROUP } from "../../graphql/queries"

interface ApplyParams {
    id: string | undefined
}

interface ApplyProps extends RouteComponentProps<ApplyParams> {}

const Apply: React.FC<ApplyProps> = (props) => {
    const myUser = useSelector<RootType, UserState>((state) => state.user)

    let myId
    if (myUser.user !== null) {
        myId = Number(myUser.user.id)
    }

    let [appSent, setAppSent] = useState(false)
    let [message, setMessage] = useState("")

    const [createApplication, { data }] = useMutation(APPLY_TO_GROUP, {
        variables: {
            applicant: myId,
            group: props.match.params.id,
            message: message,
        },
    })

    // TODO: Check through these. If we have already applied to this group
    //      Disable the apply button
    //          Add a tooltip that says, "You've already applied to this group"
    const { loading, error, data: myAppsData } = useQuery(MY_APPLICATIONS, {
        variables: {
            applicant: myId,
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
