import React from "react"
import { useQuery } from "@apollo/client"
import Groups from "../../components/Groups/Groups"
import { RouteComponentProps } from "react-router"
import { RootType } from '../../store/rootReducer'
import { UserState } from '../../store/slices/user'
import { useSelector } from "react-redux"
import {MY_GROUPS} from '../../graphql/queries'

interface MyGroupsProps extends RouteComponentProps {}



const MyGroups: React.FC<MyGroupsProps> = (props) => {
    const myUser = useSelector<RootType, UserState>(state => state.user)
    const myId = Number(myUser.user.id)

    const { loading, error, data } = useQuery(MY_GROUPS, {
        variables: {
            id: myId,
        },
        onCompleted: () => {
            // filter out leadership groups and store in state here
            console.log('completed GET_GROUPS')
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
            <Groups groups={data.user.leading_groups} clickedGroup={onGroupLeadClick} />
            <h3>Groups I'm a member of </h3>
            <Groups
                groups={data.user.groups}
                clickedGroup={onGroupMemberClick}
            />
        </div>
    )
}

export default MyGroups
