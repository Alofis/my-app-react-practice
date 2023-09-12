import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Card from "./card";
import { tests } from "./contacts";
import Login from "./login";
import Usestate_Practice from "./usestate-practice";

var userIsRegistered = false;

function App() {
    return <div>    
        {/* <Header />
        <Note />
        {tests.map(test => (
            <Card key={test.id} data={test} />
            ))}
        <Footer /> 
        
         <Login isUserRegistered={userIsRegistered} />
        */}
        <Usestate_Practice />

    </div>
}

export default App;