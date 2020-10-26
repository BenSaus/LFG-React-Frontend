import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { fetchAuth } from '../../store/slices/auth'


interface LoginProps extends RouteComponentProps {}


const Login: React.FC<LoginProps> = (props) => {
    // const [username, setUsername] = useState<string>('')
    // const [password, setPassword] = useState<string>('')
    // const [error, setError] = useState(null)
    const dispatch = useDispatch()

    // const [login, {data}] = useMutation(LOG_IN, {variables: {
    //     identifier: 'Ben',
    //     password: '123456'
    // }})


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values, actions) => {
            console.log(values)

            // sanitize and check that both are valid here...
            try {
                // const resp = await login()
                
                // console.log(resp)

                // // TODO: Need some kind of status check here
                // if(resp.data){
                //     // WARNING: TODO: This is an insecure way to store JWT. Meant for testing purposes only
                //     localStorage.setItem('token', resp.data.login.jwt)

                //     console.log('user', resp.data.login.user)
                //     dispatch(setUser(resp.data.login.user))
                // }

                await dispatch(fetchAuth('Ben', '123456'))
                
                props.history.push('/myGroups')
            }
            catch(error){
                // setError(error)
                console.error(error)
            }

        },
    })

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Username:</label>
                <input id="username" name="username" type="text" value={formik.values.username} onChange={formik.handleChange}/>
                <br />
                <label htmlFor="">Password:</label>
                <input id="password" name="password" type="password" value={formik.values.password} onChange={formik.handleChange}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Login