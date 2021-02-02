import { useFormik } from "formik"
import React, { useEffect, useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import * as Types from "../../generated/graphql"

import {
    Button,
    TextField,
    Slider,
    Typography,
    Grid,
    Card,
    CardContent,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import RoomList from "../../components/RoomList/RoomList"
import { CardContent } from "@material-ui/core"

import PreferredDateList, {
    DateTimeItem,
} from "./PreferredDateList/PreferredDateList"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roomList: {},
        preferredRoomsCard: {
            textAlign: "left",
        },
        dayTimeCard: {
            marginTop: "1rem",
        },
        buttonContainer: {
            margin: "2rem",
        },
        button: {
            margin: "0.5rem",
        },
        textAlignLeft: {
            textAlign: "left",
        },
        ageCardTitle: {
            marginBottom: "1rem",
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
        preferred_dateTimes: Types.PreferredDateTime[]
    }
    roomData: Types.Room[]
    submitButtonText: string
    openSlotsEditable: boolean
}

const GroupForm: React.FC<GroupFormProps> = (props) => {
    const classes = useStyles()

    // State
    // Ages, Preferred Rooms, and Preferred DateTimes are controlled outside of formik because of event handling
    const [age, setAge] = React.useState<number[]>([
        props.formData.min_age,
        props.formData.max_age,
    ])
    const [preferredRooms, setPreferredRooms] = useState<string[]>(
        props.formData.preferred_rooms
    )
    const [preferredDateTimes, setPreferredDateTimes] = useState<
        DateTimeItem[]
    >()

    // Load and reformat DateTime objects for PreferredDateList component
    useEffect(() => {
        const dateTimeItems: DateTimeItem[] = props.formData.preferred_dateTimes.map(
            (dateTime) => {
                return {
                    date: dateTime.date,
                    time: dateTime.time,
                }
            }
        )

        setPreferredDateTimes(dateTimeItems)
    }, [])

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
            modifiedData.preferred_dateTimes = preferredDateTimes

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

    const onPreferredDateTimesChangedHandler = (
        updatedDateTimeArray: DateTimeItem[]
    ) => {
        setPreferredDateTimes(updatedDateTimeArray)
        console.log("SetPreferredDateTimes", updatedDateTimeArray)
    }

    // Render
    let openSlotsJSX = null
    if (props.openSlotsEditable) {
        openSlotsJSX = (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Card
                            variant="outlined"
                            className={classes.preferredRoomsCard}
                        >
                            <CardContent>
                                <div className={classes.textAlignLeft}>
                                    <Typography
                                        className={classes.ageCardTitle}
                                    >
                                        Maximum Group Size
                                    </Typography>
                                </div>

                                <input
                                    id="member_max"
                                    name="member_max"
                                    onChange={formik.handleChange}
                                    value={formik.values.member_max}
                                    type="number"
                                />
                                <br />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
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
                        <Card variant="outlined">
                            <CardContent>
                                <div className={classes.textAlignLeft}>
                                    <Typography
                                        className={classes.ageCardTitle}
                                    >
                                        Age Range
                                    </Typography>
                                </div>
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
                            </CardContent>
                        </Card>
                        <Card
                            variant="outlined"
                            className={classes.dayTimeCard}
                        >
                            <CardContent>
                                <div className={classes.textAlignLeft}>
                                    <Typography>
                                        Preferred Days and Times
                                    </Typography>

                                    {preferredDateTimes ? (
                                        <PreferredDateList
                                            preferredDateTimeItems={
                                                preferredDateTimes
                                            }
                                            onChange={(
                                                dates: DateTimeItem[]
                                            ) => {
                                                onPreferredDateTimesChangedHandler(
                                                    dates
                                                )
                                            }}
                                        />
                                    ) : null}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card
                            variant="outlined"
                            className={classes.preferredRoomsCard}
                        >
                            <CardContent>
                                <div className={classes.textAlignLeft}>
                                    <Typography>Preferred Rooms</Typography>
                                </div>
                                <div className={classes.roomList}>
                                    <RoomList
                                        rooms={props.roomData}
                                        preferred={preferredRooms}
                                        onChange={
                                            onPreferredRoomsChangedHandler
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <div className={classes.buttonContainer}>
                    <Button
                        color="primary"
                        className={classes.button}
                        variant="contained"
                        onClick={(event: any) => {
                            event.preventDefault()
                            props.onCancel()
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        className={classes.button}
                    >
                        {props.submitButtonText}
                    </Button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default GroupForm
