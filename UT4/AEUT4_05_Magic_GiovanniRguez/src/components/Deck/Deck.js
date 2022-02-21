import React from "react";

/**
 * Función Deck que recogerá las cartas seleccionadas
 * @param props con las cartas seleccionadas por el usuario
 * @returns {JSX.Element}
 * @constructor
 */
export default function Deck(props) {
    let totalPrice = 0;

    return (
        <>
            <h4 className="ms-3 mt-3 text-center">Selected cards</h4>
            <table className="table text-center ms-3 mt-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="cards">
                {props.deckList.map((card) => {
                    totalPrice += card.quantity * card.card.prices['eur'];
                    return (
                        <tr key={card.card.id}>
                            <td>{card.card.name}</td>
                            <td>{card.card.prices['eur']}</td>
                            <td>{card.quantity}</td>
                            <td>
                                <button onClick={()=> props.addToDeck(card.card)} className="btn btn-success">+</button>
                                <button onClick={()=> props.removeFromDeck(card.card)} className="btn btn-danger">-</button>
                            </td>
                            <td>{(card.quantity * card.card.prices['eur']).toFixed(2)}</td>
                        </tr>
                    );
                })}
                </tbody>
                <tfoot>
                    <tr id="footer">
                        <th scope="row" colSpan="5" id="empty">Total Cards: {props.totalCards} | Total Price: {totalPrice.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}