import React from "react";
import Card from "../Card";

/**
 * Función que lista las cartas recogidas desde la API
 * @param props con las cartas recogidas
 * @returns {JSX.Element} lista de cartas
 * @constructor
 */
export default function CardList(props) {
    return (
        <div className="row">
            {props.cardList.map((card) => {
                return <Card card={card} key={card.id} addToDeck={() => props.addToDeck(card)}></Card>
            })};
        </div>
    );
}