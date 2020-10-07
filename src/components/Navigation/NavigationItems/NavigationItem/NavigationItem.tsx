import React from "react"
import { Link } from "react-router-dom"
import style from "./NavigationItem.module.css"

interface NavigationItemProps {
    link: string
}

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    return (
        <li className={style.NavigationItem}>
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}

export default NavigationItem
