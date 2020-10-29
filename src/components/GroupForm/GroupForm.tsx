import { useFormik } from "formik"
import React, { useEffect } from "react"

interface GroupFormProps {
    leader: string
    onSubmit: (values: any) => void
    onCancel: () => void
    data: {
        name: string
        open_slots: number
        min_age: number
        max_age: number
        description: string
        rooms: null
    }
    submitButtonText: string
}

const GroupForm: React.FC<GroupFormProps> = (props) => {
    // State
    const formik = useFormik({
        initialValues: {
            name: props.data.name,
            open_slots: props.data.open_slots,
            min_age: props.data.min_age,
            max_age: props.data.max_age,
            description: props.data.description,
            rooms: null,
            // name: "",
            // open_slots: 0,
            // min_age: 0,
            // max_age: 0,
            // description: "",
            // rooms: null,
        },
        onSubmit: props.onSubmit,
    })

    // useEffect(() => {
    //     formik.setValues({
    //         name: props.data.name,
    //         open_slots: props.data.open_slots,
    //         min_age: props.data.min_age,
    //         max_age: props.data.max_age,
    //         description: props.data.description,
    //         rooms: null,
    //     })
    // }, [props.data])

    // Render
    return (
        <React.Fragment>
            <p>Leader: {props.leader}</p>
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
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                ></textarea>
                <br />
                <label htmlFor="">Open Slots: </label>
                <input
                    id="open_slots"
                    name="open_slots"
                    onChange={formik.handleChange}
                    value={formik.values.open_slots}
                    type="number"
                />
                <br />
                <label htmlFor="">Room Preference: </label>
                {/* <RoomSelect rooms={data.rooms} /> */}
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
                <label htmlFor="">Available Days: </label>
                <input type="text" />
                <br />
                <label htmlFor="">Available Times: </label>
                <input type="text" />
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
