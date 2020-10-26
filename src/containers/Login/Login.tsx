import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { fetchAuth } from '../../store/slices/auth'


interface LoginProps extends RouteComponentProps {}


const Login: React.FC<LoginProps> = (props) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values, actions) => {
            console.log(values)

            // sanitize and check that both are valid here...
            try {
                await dispatch(fetchAuth(formik.values.username, formik.values.password))
                
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