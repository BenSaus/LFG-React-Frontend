import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    MenuItem,
    Select,
    Tooltip,
    Typography,
} from "@material-ui/core"
import { Add, Delete } from "@material-ui/icons"
import { DatePicker } from "@material-ui/pickers"
import React, { useState } from "react"
import * as Types from "../../../generated/graphql"

import { parseISO, format } from "date-fns"
import { DateTime } from "luxon"

const useStyles = makeStyles((theme) => ({
    controlContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },

    timeControl: {
        minWidth: "150px",
        marginLeft: "1rem",
    },

    dateControl: {
        maxWidth: "150px",
    },
}))

export interface DateTimeItem {
    date: string
    time: Types.Enum_Preferreddatetime_Time | null | undefined
}

interface PreferredDateListProps {
    preferredDateTimeItems: DateTimeItem[]
    onChange: (dates: any) => void
}

const PreferredDateList: React.FC<PreferredDateListProps> = (props) => {
    const classes = useStyles()

    const [dates, setDates] = useState(props.preferredDateTimeItems)

    const onAddDateTime = () => {
        const updatedDates = [...dates]

        updatedDates.push({
            date: DateTime.local().toISO({ includeOffset: true }), // BROKE
            time: Types.Enum_Preferreddatetime_Time.Afternoon,
        })

        setDates(updatedDates)
        props.onChange(updatedDates)
    }

    const onDeleteDateTime = (index: number) => {
        let updatedDates = [...dates]

        updatedDates.splice(index, 1)
        setDates(updatedDates)
        props.onChange(updatedDates)
    }

    // Note: the incoming value here is a Luxon DateTime
    const onDateChange = (index: number, value: any) => {
        let updatedDates = [...dates]

        if (value) {
            // https://stackoverflow.com/questions/60382084/material-ui-datepicker-showing-wrong-date/64805720#64805720

            updatedDates[index].date = value.toISOString()
            setDates(updatedDates)
            props.onChange(updatedDates)
        }
    }

    const onTimeChange = (index: number, value: any) => {
        let updatedDates = [...dates]

        updatedDates[index].time = value
        setDates(updatedDates)
        props.onChange(updatedDates)
    }

    return (
        <React.Fragment>
            <List dense>
                {dates.map((daytime, index) => (
                    <ListItem role={undefined} dense key={index}>
                        <ListItemText className={classes.controlContainer}>
                            <DatePicker
                                disablePast
                                value={parseISO(daytime.date)}
                                onChange={(dateTime) => {
                                    onDateChange(index, dateTime)
                                }}
                                className={classes.dateControl}
                            />

                            <Select
                                label="Time"
                                id="time"
                                value={daytime.time}
                                onChange={(event) => {
                                    onTimeChange(index, event.target.value)
                                }}
                                className={classes.timeControl}
                            >
                                <MenuItem value={"afternoon"}>
                                    Afternoon
                                </MenuItem>
                                <MenuItem value={"late_afternoon"}>
                                    Later afternoon
                                </MenuItem>
                                <MenuItem value={"evening"}>Evening</MenuItem>
                                <MenuItem value={"late_evening"}>
                                    Late evening
                                </MenuItem>
                            </Select>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={() => onDeleteDateTime(index)}
                            >
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            {dates.length < 7 ? (
                <Tooltip title="Add another preferred day and time">
                    <Button
                        variant="outlined"
                        color="default"
                        startIcon={<Add />}
                        onClick={onAddDateTime}
                    >
                        Add Date
                    </Button>
                </Tooltip>
            ) : null}
        </React.Fragment>
    )
}

export default PreferredDateList
