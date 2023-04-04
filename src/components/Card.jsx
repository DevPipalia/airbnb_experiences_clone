import React from "react";

function Card(props){
    

    return(
        
        <div className="cardd">
        <div className="card-container">
            <div  className="card-badge"> ❤</div>
            <img className="card-img" src={props.image}></img>
            <p className="card-content rating">{props.rating}</p>
            <p className="card-content info">{props.info}</p>
            <p className="card-conten price"><b className="pricee">{props.pricing} </b>/ <em>per person</em></p>
        
        
        </div>
        </div>
    )
}

export default Card;