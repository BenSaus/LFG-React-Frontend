import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { logout } from "../../store/slices/auth"

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    }, [])

    return <Redirect to="/" />
}

export default Logout
