import React from "react"
import { RouteComponentProps } from "react-router"

import { useSelector } from "react-redux"
import { RootType } from "store/rootReducer"
import { AuthState } from "store/slices/auth"

import { useQuery, useMutation } from "@apollo/client"
import {
    CreateGroupDocument,
    CreatePreferredDateTimeDocument,
    GetRoomsDocument,
} from "generated/graphql"

import GroupForm from "components/GroupForm/GroupForm"

interface CreateGroupProps extends RouteComponentProps {}

const CreateGroup: React.FC<CreateGroupProps> = (props) => {
    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
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
    const [createGroup] = useMutation(CreateGroupDocument)
    const [createPreferredDateTime] = useMutation(
        CreatePreferredDateTimeDocument
    )

    // Render
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const onSubmit = async (values: any) => {
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
                    preferred_date_times: [],
                    members: [],
                },
            })

            const groupId = resp.data.createGroup.group.id

            // create all preferred date times
            for (let pref of values.preferred_dateTimes) {
                await createPreferredDateTime({
                    variables: {
                        groupId: groupId,
                        date: pref.date,
                        time: pref.time,
                    },
                })
            }

            props.history.push(`/group/manage/${groupId}`)
        } catch (error) {
            console.dir(
                "Error Code:",
                error.graphQLErrors[0].extensions.exception.code
            )
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
