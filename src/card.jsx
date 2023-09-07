import React from "react";
import Details from "./details";

function Card ({data}){
    return (
    <div className="card" >
        <h1>{data.name}</h1>
        <img className="circle-img" src={data.img} alt={data.name}></img>
        <Details props={data.tel} />
        <Details props={data.email} />
    </div>
    );
}

export default Card;