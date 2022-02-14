import React, { Component } from "react";
import Card from "./Card";
import card from "./Card";

export class CardList extends Component {
    render() {
        return <Card key={card.name} data={card} />
    }
}

export default CardList;