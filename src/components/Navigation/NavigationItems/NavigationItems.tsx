import React from "react"
import style from "./NavigationItems.module.css"

import NavigationItem from "./NavigationItem/NavigationItem"

export default function NavigationItems() {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/myProfile">My Profile</NavigationItem>
            <NavigationItem link="/myGroups">My Groups</NavigationItem>
            <NavigationItem link="/myInvites">My Invites</NavigationItem>
            <NavigationItem link="/myApps">My Applications</NavigationItem>
            <NavigationItem link="/logout">Log Out</NavigationItem>
        </ul>
    )
}
