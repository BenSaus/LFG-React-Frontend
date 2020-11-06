import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { RootType } from "../../store/rootReducer"
import { useSelector } from "react-redux"
import * as Types from "../../generated/graphql"
import { AuthState } from "../../store/slices/auth"
import { GetMyGroupsDocument } from "../../generated/graphql"

interface MyGroupsProps extends RouteComponentProps {}

const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const [memberGroups, setMemberGroups] = useState<Types.Group[]>([])
    const [leadingGroups, setLeadingGroups] = useState<Types.Group[]>([])

    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    const { loading, error, data } = useQuery(GetMyGroupsDocument, {
        variables: {
            id: myId,
        },
        onCompleted: () => {
            console.log("GetMyGroupsDocument Completed")

            const groups: Types.Group[] = data.groups

            // Seperate groups this user leads and groups this user is just a member of
            const leadingGroups = groups.filter(
                (group) => group?.leader?.id === myId
            )
            const memberGroups = groups.filter(
                (group) => group?.leader?.id !== myId
            )

            setLeadingGroups(leadingGroups)
            setMemberGroups(memberGroups)
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const onGroupLeadClick = (groupId: string) => {
        // This is a group the user leads so send the user to manage
        props.history.push("/group/manage/" + groupId)
    }

    const onGroupMemberClick = (groupId: string) => {
        console.log("Clicked member group: ", groupId)
    }

    let leadGroupsJSX = <p>No Groups Found</p>
    if (leadingGroups.length > 0) {
        leadGroupsJSX = (
            <Groups groups={leadingGroups} clickedGroup={onGroupLeadClick} />
        )
    }

    let memberGroupsJSX = <p>No Groups Found</p>
    if (memberGroups.length > 0) {
        memberGroupsJSX = (
            <Groups groups={memberGroups} clickedGroup={onGroupMemberClick} />
        )
    }

    return (
        <div>
            <h1>My Groups</h1>
            <button
                style={{ padding: "0.5rem" }}
                onClick={(_) => {
                    props.history.push("/group/create")
                }}
            >
                Create New Group
            </button>
            <h3>Groups I Lead</h3>
            {leadGroupsJSX}
            <h3>Groups I'm a member of </h3>
            {memberGroupsJSX}
        </div>
    )
}

export default MyGroups
