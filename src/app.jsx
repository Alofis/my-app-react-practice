import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Card from "./card";

const contacts = [{
    id:1,
    name: "test",
    img: "https://picsum.photos/200",
    tel: "+123131231",
    email: "mail@mail.com",
},
{
    id:2,
    name: "2test",
    img: "https://picsum.photos/200",
    tel: "+123131231",
    email: "mail@mail.com",
},
{   
    id:3,
    name: "3test",
    img: "https://picsum.photos/200",
    tel: "+123131231",
    email: "mail@mail.com",
}];

function createCard(contact){
    return (
    <div key={contact.id}>
        <Card data={contact} />
    </div>
    )
}

function App() {
    return <div>
        <Header />
        <Note />
        {contacts.map(createCard)}
        <Footer />
    </div>
}

export default App;