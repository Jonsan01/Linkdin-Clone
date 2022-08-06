import React from 'react'
import { useLocation, Navigate } from "react-router-dom";
import { db } from './FireBase_Auth';

const Login = () => {

    const location = useLocation();

    const email = new URLSearchParams(location.search).get('email').toLowerCase();
    const password = new URLSearchParams(location.search).get('password')

    const snapshot = async () => {
        const collection = db.collection('Users');
        const snapshot = await collection.where('email', '==', email).get();

        if (snapshot.empty) {
            return false
        } else {
            const data = snapshot.docs[0].data()
            if (data.password == password) {
                const obj = {
                    isLogin: true,
                    UserInfo: {
                        FullName: data.fname + " " + data.lname,
                        Email: data.email,
                        ProfileUrl: data.fname[0],
                        FirstName: data.fname,
                        LastName: data.lname,
                    }
                }
                localStorage.setItem('UserData', JSON.stringify(obj))
                
                window.location.href = "/Home"
            } else {
                return false
            }
        }
    }

    snapshot()
    return (
        <>
            <Navigate to="/" />
        </>
    )
}

export default Login