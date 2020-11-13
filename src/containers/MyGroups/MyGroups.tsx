import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { RootType } from "../../store/rootReducer"
import { useSelector } from "react-redux"
import * as Types from "../../generated/graphql"
import { AuthState } from "../../store/slices/auth"
import {
    GetMyGroupsDocument,
    GetMyLeadGroupsDocument,
} from "../../generated/graphql"

interface MyGroupsProps extends RouteComponentProps {}

const MyGroups: React.FC<MyGroupsProps> = (props) => {
    // State
    const [memberGroups, setMemberGroups] = useState<Types.Group[]>([])
    const [leadingGroups, setLeadingGroups] = useState<Types.Group[]>([])

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const {
        loading: loadingGroups,
        error: errorGroups,
        data: groupsData,
    } = useQuery(GetMyGroupsDocument, {
        variables: {
            id: myId,
        },
        onCompleted: (data) => {
            console.log("GetMyGroupsDocument Completed", data.groups)
            setMemberGroups(data.groups)
        },
    })

    const {
        loading: loadingLeadGroups,
        error: errorLeadGroups,
        data: leadGroupsData,
    } = useQuery(GetMyLeadGroupsDocument, {
        variables: {
            id: myId,
        },
        onCompleted: (data) => {
            console.log("GetMyLeadGroupsDocument Completed", data.groups)
            setLeadingGroups(data.groups)
        },
    })

    // Handlers
    const onGroupLeadClick = (groupId: string) => {
        props.history.push("/group/chat/" + groupId)
    }

    const onGroupMemberClick = (groupId: string) => {
        props.history.push("/group/chat/" + groupId)
    }

    // Render
    if (loadingGroups && loadingLeadGroups) return <p>Loading...</p>
    if (errorLeadGroups || errorGroups) {
        console.log(errorLeadGroups, errorGroups)
        return <p>Error :(</p>
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
                onClick={() => {
                    props.history.push("/group/create")
                }}
            >
                Create New Group
            </button>
            <h3>Groups I Lead</h3>
            {leadGroupsJSX}
            <h3>Groups I'm a member of </h3>
            {memberGroupsJSX}

            <br />
        </div>
    )
}

export default MyGroups
