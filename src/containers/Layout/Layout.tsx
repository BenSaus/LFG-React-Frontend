import React, { useState } from "react"
import { useSelector } from "react-redux"
// import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import { withRouter } from "react-router"

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
import { Link, RouteComponentProps } from "react-router-dom"
import Container from "@material-ui/core/Container"
import { Paper } from "@material-ui/core"

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

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

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

    let navLinksJSX = null
    if (isAuthenticated) {
        navLinksJSX = (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    onClick={() => onNavLinkClick("/openGroups")}
                >
                    <SearchIcon />
                </IconButton>
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
                    <Typography variant="h6" noWrap>
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

export default withRouter(Layout)
