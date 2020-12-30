import React, { useState } from "react"
import { useSelector } from "react-redux"
// import Toolbar from "../../components/Navigation/Toolbar/Toolbar"

import { RootType } from "../../store/rootReducer"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container"

interface LayoutProps {}

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

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    let navLinksJSX = null
    if (isAuthenticated) {
        navLinksJSX = (
            <React.Fragment>
                <IconButton color="inherit">
                    <Link to={`/openGroups`}>
                        <SearchIcon />
                    </Link>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleClick}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to={`/myProfile`}>My Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={`/myGroups`}>Groups</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={`/myInvites`}>Invites</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to={`/myApps`}>Applications</Link>
                    </MenuItem>
                </Menu>

                <Button color="inherit">LOGOUT</Button>
            </React.Fragment>
        )
    } else {
        navLinksJSX = (
            <React.Fragment>
                <Button color="inherit">LOGIN</Button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Looking For Group
                    </Typography>
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

export default Layout
