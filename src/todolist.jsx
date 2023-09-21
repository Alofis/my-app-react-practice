import React, { useState } from "react"; 
import ToDoListItem from "./todolistitem";

function Todolist (){

let [ inputText, setInputText] = useState("");
let [ items, setItems] = useState([])

function changeHandler(event) {
    const newValue = event.target.value;
    setInputText(newValue);
}

function addItem(event){
    setItems((prevItem) => {
        return [...prevItem, inputText]
    })
    setInputText("")
    event.preventDefault();
    //prevent auto submit/refresh of the page
    //onSubmit from the button to form
}

function deleteItem(id){
    setItems((prevItem) =>{
        return prevItem.filter((item,index) =>{
            return index !== id;
        })
    })
    console.log(items)
}


    return(
        <div className="container">
        <div className="login-holder-items">
        <form className="login-form" onSubmit={addItem}>
        <input onChange={changeHandler} value={inputText} name="item" type="text" placeholder="Your name?" ></input>
        <button type="submit" >Add</button>
        </form>
        {/* <ul>
            {items.map(item => <li style={{textDecoration: isDone ? "line-through" : "none"}} onClick={checked} 
            key={items.indexOf(item)}>{item}</li>)}
        </ul> */}
        <ul>
            {items.map((item, index = items.indexOf(item)) => <ToDoListItem key={index} id={index} text={item} onChecked={deleteItem} />)}
        </ul>
        </div>
    </div>
    )
};

export default Todolist;