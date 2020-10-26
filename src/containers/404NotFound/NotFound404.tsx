import React from 'react'

interface NotFound404Props {

}

const NotFound404: React.FC<NotFound404Props> = ({}) => {
    return (
        <React.Fragment>
            <h2>We couldn't find that page ☹️</h2>
            <h3>404 Page Not Found</h3>
        </React.Fragment>
    )
}

export default NotFound404