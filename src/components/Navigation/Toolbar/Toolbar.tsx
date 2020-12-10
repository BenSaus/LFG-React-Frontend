import React from "react"
import styles from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle"
import { Link } from "react-router-dom"

interface ToolbarProps {
    drawerToggleClicked: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void
    isAuthenticated: boolean
}

export const Toolbar: React.FC<ToolbarProps> = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={styles.Logo}>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <Logo height="75px" />
                </Link>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuthenticated} />
            </nav>
        </header>
    )
}

export default Toolbar
