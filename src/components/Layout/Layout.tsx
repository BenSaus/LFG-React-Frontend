import React, { Component } from "react"

interface Props {}
interface State {}

export default class Layout extends Component<Props, State> {
    state = {}

    render() {
        return (
            <React.Fragment>
                <main>{this.props.children}</main>
            </React.Fragment>
        )
    }
}
