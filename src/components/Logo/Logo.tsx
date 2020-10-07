import React from "react"
import logoImage from "../../assets/images/logo.png"

interface LogoProps {
    height: string
}

export const Logo: React.FC<LogoProps> = (props) => {
    return (
        <div>
            <img src={logoImage} alt="Logo" style={{ height: props.height }} />
        </div>
    )
}

export default Logo
