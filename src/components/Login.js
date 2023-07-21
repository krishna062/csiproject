import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./LoginStyles.css";

const Login = () => {

    //need to understand
    const navigate= useNavigate();
    const [cred,setCred]=useState({});
    
    const users=[
        {
            mail:"admin1@gmail.com",
            password:"1234"
        },
        {
            mail:"admin2@gmail.com",
            password:"4321"
        },
        {
            mail:"admin3@gmail.com",
            password:"5678"
        },
        {
            mail:"admin4@gmail.com",
            password:"8765"
        }
    ];

    const handleLogin=(e)=>{
        const credentialsMatched=users.find((item)=>{
            return item.mail===cred?.email && item?.password===cred.password;
        });
        if(credentialsMatched){
            localStorage?.setItem("authToken","dummyToken");
            navigate("/");
        }
    }
    
    const handleChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value});
    
};
return(
    <>
    <div className='loginPage'>
        <div className='msg'>
        <h1>Welcome to Bloggers! </h1>
        <p>Log In to Continue</p>
        </div>
    <div className='authContainer'>
    <h1>User Authentication</h1>
    <input onChange ={handleChange} value={cred?.email} placeholder='E-mail' name="email"/>
    <input onChange ={handleChange} value={cred?.password} placeholder='Password' name="password"/>
    <button className="userlogin" onClick={handleLogin}>Login</button>

    
    {users[0].name}
    </div>
    </div>
    </>
);
};

export default Login;