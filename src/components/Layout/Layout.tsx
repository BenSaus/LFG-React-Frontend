import React, { useState } from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import styles from "./Layout.module.css"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const sidedrawerClosedHandler = () => {
        setShowSideDrawer(false)
    }

    const sidedrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer) // TODO: Is this the proper way to read and modify current state?????????????????
    }

    return (
        <React.Fragment>
            <div>
                <Toolbar drawerToggleClicked={sidedrawerToggleHandler} />
                {/* <Sidedrawer
                    open={this.state.showSidedrawer}
                    closed={this.sidedrawerClosedHandler}
                /> */}
            </div>
            <main className={styles.Content}>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout
