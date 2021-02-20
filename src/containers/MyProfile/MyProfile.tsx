import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { RootType } from "store/rootReducer"
import { AuthState } from "store/slices/auth"

interface MyProfileProps {}

const MyProfile: React.FC<MyProfileProps> = () => {
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId = auth?.user?.id
    return <Redirect to={`/user/${myId}`} />
}

export default MyProfile
