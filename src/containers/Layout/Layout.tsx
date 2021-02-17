import React, { useState } from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router"
import { RouteComponentProps } from "react-router-dom"

import { RootType } from "../../store/rootReducer"

import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Menu,
    MenuItem,
    Container,
} from "@material-ui/core"

import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"

import { makeStyles } from "@material-ui/core/styles"
import { requirePropFactory } from "@material-ui/core"

interface LayoutParams {}
interface LayoutProps extends RouteComponentProps<LayoutParams> {}

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    main: {
        marginTop: "50px",
    },
}))

export const Layout: React.FC<LayoutProps> = (props) => {
    const classes = useStyles()

    // State
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

    // Handlers
    const onNavLinkClick = (pageUrl: string) => {
        props.history.push(pageUrl)
        setAnchorEl(null)
    }

    const handleMenuOpenClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    // Render
    let navLinksJSX = null
    if (isAuthenticated) {
        navLinksJSX = (
            <React.Fragment>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleMenuOpenClick}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => onNavLinkClick("/myProfile")}>
                        Profile
                    </MenuItem>
                    <MenuItem onClick={() => onNavLinkClick("/myGroups")}>
                        Groups
                    </MenuItem>
                    <MenuItem onClick={() => onNavLinkClick("/myInvites")}>
                        Invites
                    </MenuItem>
                    <MenuItem onClick={() => onNavLinkClick("/myApps")}>
                        Applications
                    </MenuItem>
                </Menu>

                <Button onClick={() => onNavLinkClick("/logout")}>
                    <Typography variant="button" style={{ color: "white" }}>
                        LOGOUT
                    </Typography>
                </Button>
            </React.Fragment>
        )
    } else {
        navLinksJSX = (
            <React.Fragment>
                <Button onClick={() => onNavLinkClick("/login")}>
                    <Typography variant="button" style={{ color: "white" }}>
                        LOGIN
                    </Typography>
                </Button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        
                        style={{ cursor: "pointer" }}
                    >
                        Looking For Group
                    </Typography> */}

                    <img
                        src={require("assets/images/logo.png")}
                        onClick={() => onNavLinkClick("/openGroups")}
                        style={{ width: "140px", cursor: "pointer" }}
                    />

                    <div className={classes.grow}></div>
                    {navLinksJSX}
                </Toolbar>
            </AppBar>
            <Container>
                <main className={classes.main}>{props.children}</main>
            </Container>
        </React.Fragment>
    )
}

export default withRouter(Layout)
