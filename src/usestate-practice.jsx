import React, { useState} from "react";

function Usestate_Practice(){

let [ contact, setContact ] = useState({
    fName: "",
    lName: "",
    email: ""
})

function handleChange(event){
    let { name, value } = event.target;
    // setContact(prevValue => {
    //     if (name === "firstName") 
    //     return {
    //         fName: value,
    //         lName: prevValue.lName,
    //         email: prevValue.lName
    //     };
    //      else if (name === "lastName") 
    //      return{
    //         fName: prevValue.fName,
    //         lName: value,
    //         email: prevValue.email
    //     };
    //     else if (name === "email")
    //     return {
    //         fName: prevValue.fName,
    //         lName: prevValue.lName,
    //         email: value
    //     };
    // })

    setContact(prevValue => {
        return {
            ...prevValue,
            [name]: value,
        }
    })
}

    // setFullName(prevValue => {
    //     name === "firstName" && { fName: value, lName: prevValue.lName};
    //     name === "lastName" && {
    //             fName: prevValue.fName,
    //             lName: value
    //         }
    //     }
    // })


    

return (
    <div className="container">
        <div className="login-holder-items">
        <form className="login-form">
        <h1>Hi {contact.fName} {contact.lName}</h1>
        <p>{contact.email}</p>
        <input onChange={handleChange} name="fName" value={contact.fName} type="text" placeholder="Your name?" ></input>
        <input onChange={handleChange} name="lName" value={contact.lName} type="text" placeholder="Your family name?"></input>
        <input onChange={handleChange} name="email" value={contact.email} type="text" placeholder="email?"></input>
        <button >Click</button>
        </form>
        </div>
    </div>
)
}

export default Usestate_Practice;