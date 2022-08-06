import React from 'react'
import { Card, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Css/Login.css'

const Login = () => {

    var user = JSON.parse(localStorage.getItem('UserData'))
    if (user != null && user.isLogin) {
        window.location.href = "/Home"
    }


    return (
        <>
            <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" className='Login__Img' alt="Logo" />
            <div className='Login__page'>
                <Card variant="outlined" className='Login__Card'>
                    <h2 className='Login__Text'>Sign in</h2>
                    <p className='p1'>Stay updated on your professional world</p>
                    <form action='Login' className='Login__Form' method='Get'>
                        <TextField className='Form__Input' type="email" name='email' label="Email" />
                        <TextField className='Form__Input' type="password" name='password' label="Password" />
                        <h4>Forget Password?</h4>
                        <Button type="submit" variant="contained">Sign in</Button>
                    </form>
                    <div className='hr__02' />
                    <p className='Login__signup_btn'>New to LinkedIn? <Link to="/SignupPage"><span>Join Now</span></Link></p>
                </Card>
            </div>
        </>
    )
}

export default Login