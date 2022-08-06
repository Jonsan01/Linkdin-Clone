import React from 'react'
import { useLocation, Navigate } from "react-router-dom";
import { db } from './FireBase_Auth';
import firebase from 'firebase/compat/app';

const SignUp = () => {
    const location = useLocation();

    const firstname = new URLSearchParams(location.search).get('firstname')
    const lastname = new URLSearchParams(location.search).get('lastname')
    const username = new URLSearchParams(location.search).get('username')
    const email = new URLSearchParams(location.search).get('email').toLowerCase()
    const password = new URLSearchParams(location.search).get('password')

    const AddInDB = async () => {
        const collection = db.collection('Users');
        const snapshot = await collection.where('email', '==', email).get();
        
        if (snapshot.empty) {
            await collection.add({
                fname: firstname,
                lname: lastname,
                username: username,
                email: email,
                password: password,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            alert("SignUp Sucessfull")
            return true
        } else {
            alert("Email Alredy Register");
            return false
        }
    }

    if (firstname == null || firstname == "" || firstname == undefined || lastname == null || lastname == "" || lastname == undefined || username == null || username == undefined || username == "" || email == "" || email == null || email == undefined || password == null || password == undefined || password == "") {
        alert("Enter a valid details");
        return (<>
            <Navigate to="/SignupPage" />
        </>)
    } else {
        if (AddInDB()) {
            return (
                <>
                    <Navigate to="/" />
                </>
            )
        } else {
            return (
                <>
                    <Navigate to="/SignupPage" />
                </>
            )
        }
    }

    return (
        <></>
    )
}

export default SignUp