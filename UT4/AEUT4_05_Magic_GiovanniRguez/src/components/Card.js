import React, {Component } from "react";

export class Card extends Component {
    render() {
        const {name, image} = this.props.data;

        return (
            <div className="card-item">
                <div className="card-info">
                        <img src={image} alt={name} className="card-image"/>
                </div>
                <h2 className="card-title">{name}</h2>
            </div>
        );
    }
}

export default Card;