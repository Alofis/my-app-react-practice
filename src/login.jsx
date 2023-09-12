import React from "react";
import Input from "./input";

function Login(props){
    return (
        <div className="container">
            <div className="login-holder">
                <div className="login-holder-items">
                <h1>Loggin</h1>
                <form className="login-form">
                    <Input type={"text"} placeholder={"Username"}/> 
                    <Input type={"password"} placeholder={"Password"}/>
                    {!props.isUserRegistered && <Input type={"password"} placeholder={"Confirm Password"}/>}
                    <button type="submit">{props.isUserRegistered ? "Login" : "Register"}</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login;