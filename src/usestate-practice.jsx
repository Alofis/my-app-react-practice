import React, { useState} from "react";

function Usestate_Practice(){

let [fullName, setFullName] = useState({
    fName: "",
    lName: ""
})

function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setFullName(prevValue => {
        if (name === "firstName"){
            return {
                fName: value,
                lName: prevValue.lName
            };
        } else if ( name === "lastName") {
            return {
                fName: prevValue.fName,
                lName: value
            }
        }
    })


    // setFullName(prevValue => {
    //     name === "firstName" && { fName: value, lName: prevValue.lName};
    //     name === "lastName" && {
    //             fName: prevValue.fName,
    //             lName: value
    //         }
    //     }
    // })
}

return (
    <div className="container">
        <div className="login-holder-items">
        <form className="login-form">
        <h1>Hi{fullName.fName} {fullName.lName}</h1>
        <input onChange={handleChange} name="firstName" value={fullName.fName} type="text" placeholder="Your name?" ></input>
        <input onChange={handleChange} name="lastName" value={fullName.lName} type="text" placeholder="Your family name?"></input>
        <button >Click</button>
        </form>
        </div>
    </div>
)
}
export default Usestate_Practice;