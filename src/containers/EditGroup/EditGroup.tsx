import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { RouteComponentProps } from "react-router"
import {
    GetGroupDocument,
    GetRoomsDocument,
    UpdateGroupDocument,
} from "../../generated/graphql"
import GroupForm from "../../components/GroupForm/GroupForm"
import * as Types from "../../generated/graphql"

interface EditGroupParams {
    id: string
}

interface EditGroupProps extends RouteComponentProps<EditGroupParams> {}

const EditGroup: React.FC<EditGroupProps> = (props) => {
    // State
    const [formDataReady, setFormDataReady] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        member_max: 0,
        min_age: 0,
        max_age: 0,
        description: "",
        preferred_rooms: [],
    })

    // GraphQL
    const { loading: roomLoading, error: roomError, data: roomData } = useQuery(
        GetRoomsDocument
    )
    const { loading, error, data } = useQuery(GetGroupDocument, {
        variables: {
            id: props.match.params.id,
        },
        onCompleted: (data) => {
            console.log("GetGroup Query Complete...", data.group)

            const roomIds = data.group.preferred_rooms.map(
                (room: Types.Room) => room.id
            )

            setFormData({
                name: data.group.name,
                member_max: data.group.member_max,
                min_age: data.group.min_age,
                max_age: data.group.max_age,
                description: data.group.description,
                preferred_rooms: roomIds,
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
                member_max: values.member_max,
                max_age: values.max_age,
                min_age: values.min_age,
                description: values.description,
                preferred_rooms: values.preferred_rooms,
            },
        })

        console.log("updateData", resp)

        console.log("Moving to " + `/group/manage/${props.match.params.id}`)
        props.history.push(`/group/manage/${props.match.params.id}`)
    }

    const onCancel = () => {
        props.history.goBack()
    }

    return (
        <React.Fragment>
            <h1>Edit Group</h1>
            <GroupForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                formData={formData}
                roomData={roomData.rooms}
                submitButtonText="Save Changes"
            />
        </React.Fragment>
    )

    return <h1>Working on it</h1>
}

export default EditGroup
