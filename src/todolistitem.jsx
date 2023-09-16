import React, { useState } from "react";

function ToDoListItem(props){
    //use useState to change the boolean state -> add/remove style
    //html => return <li style={{textDecoration: isDone ? "line-through" : "none"}} onClick={checked} >{props.text}</li>

    let [isDone, setIsDone ] = useState(false);

    function checked(){
    setIsDone(prevValue => {
        return !prevValue;
    })}
    
    return <li onClick={() => {props.onChecked(props.id)}}key={props.index} id={props.index}>{props.text}</li>
}

export default ToDoListItem;