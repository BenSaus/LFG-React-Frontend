import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { RouteComponentProps } from "react-router"
import { GetGroupDocument, UpdateGroupDocument } from "../../generated/graphql"
import GroupForm from "../../components/GroupForm/GroupForm"

interface EditGroupParams {
    id: string
}

interface EditGroupProps extends RouteComponentProps<EditGroupParams> {}

const EditGroup: React.FC<EditGroupProps> = (props) => {
    // State
    const [formDataReady, setFormDataReady] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        open_slots: 0,
        min_age: 0,
        max_age: 0,
        description: "",
        rooms: null,
    })

    // GraphQL
    const { loading, error, data } = useQuery(GetGroupDocument, {
        variables: {
            id: props.match.params.id,
        },
        onCompleted: (data) => {
            console.log("GetGroup Query Complete...")

            setFormData({
                name: data.group.name,
                open_slots: data.group.open_slots,
                min_age: data.group.min_age,
                max_age: data.group.max_age,
                description: data.group.description,
                rooms: data.group.rooms,
            })
            setFormDataReady(true)
        },
    })

    const [updateGroup, { data: updateData }] = useMutation(UpdateGroupDocument)

    // Render
    if (!formDataReady) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const onSubmit = async (values: any) => {
        console.log("Edit Group Submit", values)

        const resp = await updateGroup({
            variables: {
                id: props.match.params.id,
                name: values.name,
                open_slots: values.open_slots,
                max_age: values.max_age,
                min_age: values.min_age,
                description: values.description,
            },
        })

        console.log("updateData", resp)

        console.log("Moving to " + `/group/manage/${props.match.params.id}`)
        props.history.push(`/group/manage/${props.match.params.id}`)
    }

    const onCancel = () => {
        props.history.push(`/group/manage/${props.match.params.id}`)
    }

    return (
        <React.Fragment>
            <h1>Edit Group</h1>
            <GroupForm
                leader={"Ben"}
                onSubmit={onSubmit}
                onCancel={onCancel}
                data={formData}
                submitButtonText="Save Changes"
            />
        </React.Fragment>
    )
}

export default EditGroup
