import React, { useState } from "react"
import { useSelector } from "react-redux"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import styles from "./Layout.module.css"
import { RootType } from "../../store/rootReducer"

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const isAuthenticated = useSelector<RootType, boolean>(
        (state) => state.auth.token !== null
    )

    // const sidedrawerClosedHandler = () => {
    //     setShowSideDrawer(false)
    // }

    const sidedrawerToggleHandler = () => {
        // TODO: Is this the proper way to read and modify current state?????????????????
        setShowSideDrawer(!showSideDrawer)
    }

    return (
        <React.Fragment>
            <div>
                <Toolbar
                    isAuthenticated={isAuthenticated}
                    drawerToggleClicked={sidedrawerToggleHandler}
                />
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
