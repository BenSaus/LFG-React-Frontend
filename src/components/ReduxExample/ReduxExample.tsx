import React from "react"
import {useDispatch, useSelector} from 'react-redux'

import * as Types from '../../types-and-hooks'
import { increment } from '../../store/slices/counter'
import { RootType } from '../../store/rootReducer'
import { add, fetchTasks } from '../../store/slices/tasks'
import { fetchApplications } from "../../store/slices/applications"



interface UserProps {}

const User: React.FC<UserProps> = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootType, number>(state => state.counter)
    console.log('counter', counter)

    const applications = useSelector<RootType, Types.Application[]>(state => state.applications.applications)
    console.log('applications', applications);
    
    const tasks = useSelector<RootType, string[]> (state => state.tasks.tasks)
    console.log('tasks', tasks);

    
    

    const taskJsx = tasks.map((task,index)=> {
        return (
            <React.Fragment key={index}>
                <div>
                    <h3>{task}</h3>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            {taskJsx}
            <button onClick={() => dispatch(add('Redux Is Bad'))}>Inc</button>
            <button onClick={() => dispatch(fetchTasks())}>Fetch</button>

            <h3>Redux is Garbo</h3>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(increment())}>Inc</button>

            <h3>Applications</h3>
            <button onClick={() => dispatch(fetchApplications())}>Fecth Applications</button>
        </div>
    )
}

export default User
