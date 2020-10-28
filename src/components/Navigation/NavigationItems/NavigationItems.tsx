import React from "react"
import style from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

interface NavigationItemsProps {
    isAuthenticated: boolean
}

const NavigationItems: React.FC<NavigationItemsProps> = (props) => {
    if (props.isAuthenticated) {
        return (
            <ul className={style.NavigationItems}>
                <NavigationItem link="/openGroups">Open Groups</NavigationItem>
                <NavigationItem link="/myGroups">My Groups</NavigationItem>
                <NavigationItem link="/myInvites">My Invites</NavigationItem>
                <NavigationItem link="/myApps">My Applications</NavigationItem>
                <NavigationItem link="/myProfile">My Profile</NavigationItem>
                <NavigationItem link="/logout">Log Out</NavigationItem>
            </ul>
        )
    } else {
        return (
            <ul className={style.NavigationItems}>
                <NavigationItem link="/login">Log in</NavigationItem>
            </ul>
        )
    }
}

export default NavigationItems
