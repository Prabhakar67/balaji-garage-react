import React from "react";
import { CardArray } from "../data/data"

const Services = () => {
    return (
        <div className="container">
            {CardArray.map((card) => (<div className="card">
                <h3 className="cardTitle">{card.title}</h3>
                <span>{card.details}</span>
                <span>{card.moreInfo}</span>
                <span>{card.services}</span>
                <span className="priceTag">{card.price}</span>
                <span>{card.offer}</span>
                <span>{card.location}</span>
                <span>{card.packages}</span> </div>))}
        </div>
    )
}


export default Services;  