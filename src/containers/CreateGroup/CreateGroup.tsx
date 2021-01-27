import { useQuery, useMutation } from "@apollo/client"
import React, { useState } from "react"

import { RouteComponentProps } from "react-router"
import { CreateGroupDocument, GetRoomsDocument } from "../../generated/graphql"
import GroupForm from "../../components/GroupForm/GroupForm"
import { useSelector } from "react-redux"
import { RootType } from "../../store/rootReducer"
import { AuthState } from "../../store/slices/auth"

interface CreateGroupProps extends RouteComponentProps {}

const CreateGroup: React.FC<CreateGroupProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    let myUsername: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
        myUsername = auth.user.username
    }

    // State
    const initFormData = {
        name: "",
        member_max: 2,
        min_age: 10,
        max_age: 90,
        description: "",
        preferred_rooms: [],
        preferred_dateTimes: [],
    }

    // GraphQL
    const { loading, error, data: roomData } = useQuery(GetRoomsDocument)
    const [createGroup, { data: createData, error: createError }] = useMutation(
        CreateGroupDocument
    )

    // Render
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log("roomData", roomData)

    const onSubmit = async (values: any) => {
        console.log("Create Group Submit", values)

        try {
            const resp = await createGroup({
                variables: {
                    name: values.name,
                    member_max: values.member_max,
                    max_age: values.max_age,
                    min_age: values.min_age,
                    leader: myId, // TODO: This should be set server side!!!!!!!!!!!!!
                    description: values.description,
                    preferred_rooms: values.preferred_rooms,
                    // TODO: Add in date times
                    // preferred_dateTimes: values.preferred_dateTimes,
                    members: [],
                },
            })
            console.log(resp)

            const groupId = resp.data.createGroup.group.id

            console.log("Moving to " + `/group/manage/${groupId}`)
            props.history.push(`/group/manage/${groupId}`)
        } catch (error) {
            console.dir(error, { depth: null })
            console.dir(
                "Error Code:",
                error.graphQLErrors[0].extensions.exception.code
            )
            alert(error.message)
        }
    }

    const onCancel = () => {
        props.history.push("/myGroups")
    }

    return (
        <React.Fragment>
            <h1>Create Group</h1>
            <GroupForm
                onSubmit={onSubmit}
                onCancel={onCancel}
                formData={initFormData}
                roomData={roomData.rooms}
                submitButtonText="Create Group"
                openSlotsEditable={true}
            />
        </React.Fragment>
    )
}

export default CreateGroup
