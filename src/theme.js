import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
    palette: {
        background: { paper: "#fff", default: "#fafafa" },
        // primary: {
        //     main: "#2b444b",
        //     contractText: "#fafafa",
        // },
        // secondary: {
        //     main: "#7e0000",
        //     contractText: "#fafafa",
        // },
    },
})

theme.overrides = {
    MuiCard: {
        root: {},
    },
    MuiTableHead: {
        root: {
            backgroundColor: "#fafafa",
            fontWeight: "bold",
        },
    },
    MuiTableCell: {
        root: {
            borderBottom: "0px",
        },
    },
}

// "#3e0000"
// "#7e0000"
// "#232c2b"
export default theme
