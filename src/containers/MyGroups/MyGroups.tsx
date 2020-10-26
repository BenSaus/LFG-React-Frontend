import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { RootType } from '../../store/rootReducer'
import { UserState } from '../../store/slices/user'
import { useSelector } from "react-redux"
import {MY_GROUPS} from '../../graphql/queries'
import * as Types from '../../types-and-hooks'

interface MyGroupsProps extends RouteComponentProps {}



const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const [memberGroups, setMemberGroups] = useState<Types.Group[]>([])
    const [leadingGroups, setLeadingGroups] = useState<Types.Group[]>([])

    const myUser = useSelector<RootType, UserState>(state => state.user)
    let myId:string = ''
    if(myUser.user !== null){
        myId = myUser.user.id
    } 
 
    const { loading, error, data } = useQuery(MY_GROUPS, {
        variables: {
            id: myId,
        },
        onCompleted: () => {
            setLeadingGroups(data.user.leading_groups)
            // filter out groups this user leads
            setMemberGroups(data.user.groups.filter((group: Types.Group) => Number(group.leader?.id) !== Number(myId)))
        },
    })

    console.log('data', data?.user)


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    


    const onGroupLeadClick = (groupId: string) => {
        console.log("Clicked group: ", groupId)

        // This is a group the user leads so send to manage
        props.history.push("/group/manage/" + groupId)
    }

    const onGroupMemberClick = (groupId: string) => {
        console.log("Clicked member group: ", groupId)
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
            <Groups groups={leadingGroups} clickedGroup={onGroupLeadClick} />
            <h3>Groups I'm a member of </h3>
            <Groups
                groups={memberGroups}
                clickedGroup={onGroupMemberClick}
            />
        </div>
    )
}

export default MyGroups
