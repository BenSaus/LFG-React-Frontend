import { useFormik } from "formik"
import React from "react"
import * as Types from "../../generated/graphql"

interface GroupFormProps {
    leader: string
    onSubmit: (values: any) => void
    onCancel: () => void
    formData: {
        name: string
        member_max: number
        min_age: number
        max_age: number
        description: string
        preferred_rooms: string[]
    }
    roomData: Types.Room[]
    submitButtonText: string
}

const GroupForm: React.FC<GroupFormProps> = (props) => {
    // State
    const formik = useFormik({
        initialValues: {
            name: props.formData.name,
            member_max: props.formData.member_max,
            min_age: props.formData.min_age,
            max_age: props.formData.max_age,
            description: props.formData.description,
            preferred_rooms: props.formData.preferred_rooms,
        },
        onSubmit: props.onSubmit,
    })

    const options = props.roomData.map((room) => {
        return (
            <option value={room.id} key={room.id}>
                {room.name} room at {room.business?.name}
            </option>
        )
    })

    // Render
    return (
        <React.Fragment>
            {/* <p>Leader: {props.leader}</p> */}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Name: </label>
                <input
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                />
                <br />
                <label>Description: </label>
                <textarea
                    placeholder="Describe your group here..."
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                ></textarea>
                <br />
                <label htmlFor="">Open Slots: </label>
                <input
                    id="member_max"
                    name="member_max"
                    onChange={formik.handleChange}
                    value={formik.values.member_max}
                    type="number"
                />
                <br />
                <label htmlFor="">Room Preference: </label>
                <select
                    name="preferred_rooms"
                    id="preferred_rooms"
                    value={formik.values.preferred_rooms}
                    onChange={formik.handleChange}
                    multiple
                >
                    {options}
                </select>
                <br />
                <label htmlFor="">Age Range: </label>
                <br />
                <label htmlFor="">Min: </label>
                <input
                    id="min_age"
                    name="min_age"
                    onChange={formik.handleChange}
                    value={formik.values.min_age}
                    type="number"
                />
                <br />
                <label htmlFor="">Max: </label>
                <input
                    id="max_age"
                    name="max_age"
                    onChange={formik.handleChange}
                    value={formik.values.max_age}
                    type="number"
                />
                <br />
                <br />
                {/* <label htmlFor="">Available Days: </label>
                <input type="text" />
                <br />
                <label htmlFor="">Available Times: </label>
                <input type="text" /> */}
                <br />

                <button style={{ margin: "1rem 0" }} type="submit">
                    {props.submitButtonText}
                </button>
                <button
                    style={{ margin: "1rem 0" }}
                    onClick={(event) => {
                        event.preventDefault()
                        props.onCancel()
                    }}
                >
                    Cancel
                </button>
            </form>
        </React.Fragment>
    )
}

export default GroupForm
