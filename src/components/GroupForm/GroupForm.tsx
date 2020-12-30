import { useFormik } from "formik"
import React, { ChangeEvent, useState } from "react"
import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from "@material-ui/core/styles"
import * as Types from "../../generated/graphql"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import RoomList from "../../components/RoomList/RoomList"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
            maxWidth: 300,
        },
        roomList: {
            // display: "flex",
            // justifyContent: "center",
        },
        preferredRoomsCard: {
            textAlign: "left",
            padding: "1rem",
        },
        ageRangeCard: {
            textAlign: "left",
            padding: "1rem",
        },
        dayTimeCard: {
            marginTop: "1rem",
            textAlign: "left",
            padding: "1rem",
        },
        buttonContainer: {
            margin: "2rem",
        },
        button: {
            margin: "0.5rem",
        },
    })
)

interface GroupFormProps {
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
    openSlotsEditable: boolean
}

const GroupForm: React.FC<GroupFormProps> = (props) => {
    const classes = useStyles()

    console.log("pref rooms:", props.formData.preferred_rooms)

    // State
    // Ages are controlled outside of formik because of event handling
    const [age, setAge] = React.useState<number[]>([
        props.formData.min_age,
        props.formData.max_age,
    ])

    const [preferredRooms, setPreferredRooms] = useState<string[]>(
        props.formData.preferred_rooms
    )

    const formik = useFormik({
        initialValues: {
            name: props.formData.name,
            member_max: props.formData.member_max,
            description: props.formData.description,
        },
        onSubmit: (data: any) => {
            // Copy manually controlled data into the form data
            const modifiedData = { ...data }
            modifiedData.min_age = age[0]
            modifiedData.max_age = age[1]
            modifiedData.preferred_rooms = preferredRooms

            // console.log(modifiedData)
            props.onSubmit(modifiedData)
        },
    })

    // Handlers
    const ageSliderHandler = (
        event: React.ChangeEvent<{}>,
        value: number | number[]
    ) => {
        if (Array.isArray(value)) {
            setAge(value)
        }
    }

    const onPreferredRoomsChangedHandler = (updatedRoomsArray: string[]) => {
        setPreferredRooms(updatedRoomsArray)
    }

    // Render
    let openSlotsJSX = null
    if (props.openSlotsEditable) {
        openSlotsJSX = (
            <React.Fragment>
                <label htmlFor="">Open Slots: </label>
                <input
                    id="member_max"
                    name="member_max"
                    onChange={formik.handleChange}
                    value={formik.values.member_max}
                    type="number"
                />
                <br />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            label="Group Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            rows={4}
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            multiline
                            fullWidth
                        />
                    </Grid>

                    {openSlotsJSX ? (
                        <Grid item xs={12} sm={12}>
                            {openSlotsJSX}
                        </Grid>
                    ) : null}

                    <Grid item xs={12} sm={6}>
                        <Card
                            variant="outlined"
                            className={classes.ageRangeCard}
                        >
                            <label htmlFor="">Age Range</label>
                            <Slider
                                id="age"
                                name="age"
                                onChange={ageSliderHandler}
                                value={age}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                            <Typography variant="subtitle1">
                                {age[0]} - {age[1]} years of age
                            </Typography>
                        </Card>
                        <Card
                            variant="outlined"
                            className={classes.dayTimeCard}
                        >
                            <label htmlFor="">Day and Time</label>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card
                            variant="outlined"
                            className={classes.preferredRoomsCard}
                        >
                            <label>Preferred Rooms</label>
                            <div className={classes.roomList}>
                                <RoomList
                                    rooms={props.roomData}
                                    preferred={preferredRooms}
                                    onChange={onPreferredRoomsChangedHandler}
                                />
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <div className={classes.buttonContainer}>
                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.button}
                    >
                        {props.submitButtonText}
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={(event) => {
                            event.preventDefault()
                            props.onCancel()
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default GroupForm
