import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core"
import { DatePicker } from "@material-ui/pickers"
import React, { useState } from "react"

const useStyles = makeStyles((theme) => ({
    controlContainer: {
        display: "flex",
        flexDirection: "row",
    },
    timeControl: {
        marginLeft: "1rem",
        minWidth: "100px",
    },
    dateControl: {
        maxWidth: "150px",
    },
}))

interface PreferredDateProps {}

const PreferredDate: React.FC<PreferredDateProps> = ({}) => {
    const classes = useStyles()

    const [selectedDate, handleDateChange] = useState(new Date())
    const [age, setAge] = React.useState("")

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string)
    }

    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <DatePicker
                        disablePast
                        value={selectedDate}
                        onChange={() => console.log("change")}
                        className={classes.dateControl}
                    />
                </div>
                <div>
                    <Select
                        label="Time"
                        id="time"
                        value={age}
                        onChange={handleChange}
                        className={classes.timeControl}
                    >
                        <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
                        <MenuItem value={"Later"}>Later afternoon</MenuItem>
                        <MenuItem value={"Evening"}>Evening</MenuItem>
                        <MenuItem value={"Late"}>Late evening</MenuItem>
                    </Select>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PreferredDate
