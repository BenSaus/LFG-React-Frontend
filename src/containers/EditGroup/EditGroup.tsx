import React, { useState } from "react"
import { RouteComponentProps } from "react-router"

import { useMutation, useQuery } from "@apollo/client"
import {
    GetGroupDocument,
    GetRoomsDocument,
    UpdateGroupDocument,
} from "generated/graphql"
import * as Types from "generated/graphql"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import GroupForm from "components/GroupForm/GroupForm"

const useStyles = makeStyles((theme) => ({
    groupFormContainer: {
        margin: "2rem",
    },
}))

interface EditGroupParams {
    id: string
}

interface EditGroupProps extends RouteComponentProps<EditGroupParams> {}

const EditGroup: React.FC<EditGroupProps> = (props) => {
    const classes = useStyles()

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

        props.history.push(`/group/manage/${props.match.params.id}`)
    }

    const onCancel = () => {
        props.history.goBack()
    }

    return (
        <React.Fragment>
            <Typography variant="h4" style={{ margin: "2rem" }}>
                Edit Group Details
            </Typography>
            <div className={classes.groupFormContainer}>
                <GroupForm
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    formData={formData}
                    roomData={roomData.rooms}
                    submitButtonText="Save Changes"
                    openSlotsEditable={false}
                />
            </div>
        </React.Fragment>
    )
}

export default EditGroup
