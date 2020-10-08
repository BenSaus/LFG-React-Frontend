import { gql, useQuery, useMutation } from "@apollo/client"
import React from "react"
import RoomSelect from "../../components/RoomSelect/RoomSelect"
import { useFormik } from "formik"
import { RouteComponentProps } from "react-router"

const GET_ROOMS = gql`
    query {
        rooms {
            id
            name
            business {
                name
            }
        }
    }
`

const CREATE_GROUP = gql`
    mutation(
        $name: String!
        $open_slots: Int!
        $max_age: Int!
        $min_age: Int!
        $description: String!
        $leader: ID!
        $booking_status: ENUM_GROUP_BOOKING_STATUS!
    ) {
        createGroup(
            input: {
                data: {
                    name: $name
                    open_slots: $open_slots
                    booking_status: $booking_status
                    max_age: $max_age
                    min_age: $min_age
                    leader: $leader
                    description: $description
                }
            }
        ) {
            group {
                id
                name
                open_slots
                booking_status
                min_age
                max_age
            }
        }
    }
`

interface CreateGroupProps extends RouteComponentProps {}

const CreateGroup: React.FC<CreateGroupProps> = (props) => {
    const { loading, error, data } = useQuery(GET_ROOMS)
    const [createGroup] = useMutation(CREATE_GROUP)

    const formik = useFormik({
        initialValues: {
            name: "",
            open_slots: 1,
            min_age: 18,
            max_age: 90,
            description: "",
        },
        onSubmit: (values, actions) => {
            console.log(values)
            createGroup({
                variables: {
                    name: formik.values.name,
                    open_slots: formik.values.open_slots,
                    booking_status: "notBooked",
                    max_age: formik.values.max_age,
                    min_age: formik.values.min_age,
                    leader: 34,
                    description: formik.values.description,
                },
            })

            // TODO: Move to the group management page
            props.history.push("/")
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const leader = "Ben" // HARDCODED... move to store

    return (
        <React.Fragment>
            <h1>Create Group</h1>
            <p>Leader: {leader}</p>

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
                <RoomSelect rooms={data.rooms} />
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
                    Create Group
                </button>
            </form>
        </React.Fragment>
    )
}

export default CreateGroup
