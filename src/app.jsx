import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Card from "./card";
import { tests } from "./contacts";
import Login from "./login";
import Usestate_Practice from "./usestate-practice";
import Todolist from "./todolist";

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
        <Todolist />

    </div>
}

export default App;