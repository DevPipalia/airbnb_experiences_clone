import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import card_info from "../card_info";

function createElement(carditem){
    return (
        <Card
            key={carditem.id}
            image={carditem.source}
            rating={carditem.information}
            info={carditem.descr}
            pricing={carditem.price}
         />
    )
}

function App(){
    return(
    <div>
    <Navbar/>
    <Hero/>
    <h2 className="card-header">Choose from large variety of experiences</h2>
    <Card
        image="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        rating="⭐4.5(45) Japan"
        info="Plan the perfect indian Vacation"
        pricing="From 1500"
    />
    {card_info.map(createElement)}

    </div>
    )
}

export default App;