import React from 'react'
import { Card, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Css/Signup.css'

const SignupPage = () => {

    return (
        <>
            <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" className='Login__Img' alt="Logo" />
            <div className='Login__page'>
                <Card variant="outlined" className='Login__Card'>
                    <h2 className='Login__Text'>Create an account</h2>
                    <p className='p1'>Stay updated on your professional world</p>
                    <form action='Signup' className='Login__Form' method='Get'>
                        <div className='Signup__Name'>
                            <TextField className='Form__Input' type="text" name='firstname' label="First name" />
                            <TextField className='Form__Input' type="text" name='lastname' label="Last name" />
                        </div>
                        <TextField className='Form__Input' type="text" name='username' label="Username" />
                        <TextField className='Form__Input' type="email" name='email' label="Email" />
                        <TextField className='Form__Input' type="password" name='password' label="Password" />
                        <Button className='SubmitForm' type="submit" variant="contained">Sign up</Button>
                    </form>
                    <div className='hr__02' />
                    <p className='Login__signup_btn'>Alredy on LinkedIn? <Link to="/"><span>Login Now</span></Link></p>
                </Card>
            </div>
        </>
    )

}

export default SignupPage