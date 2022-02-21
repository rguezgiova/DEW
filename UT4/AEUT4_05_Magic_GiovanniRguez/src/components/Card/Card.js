import React from "react";

/**
 * Función carta con los datos que vamos a tratar
 * @param props con la carta
 * @returns {JSX.Element} carta con sus datos
 * @constructor
 */
export default function Card(props) {
    return (
        <>
            <div className="card col-3 mt-2">
                <img className="card-img-top" src={props.card.image_uris.large} alt={props.card.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.card.name}</h5>
                    <button onClick={props.addToDeck} className="btn btn-primary">Add to Deck</button>
                </div>
            </div>
        </>
    );
}