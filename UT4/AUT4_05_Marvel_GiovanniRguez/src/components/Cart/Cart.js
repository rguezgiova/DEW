import React from 'react';

/**
 * Componente Cart que recibe la lista de películas seleccionadas
 * @param props con las películas seleccionadas
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cart(props) {
    let totalTime = 0;
    return (
        <>
            <h4 className="ms-3 mt-3 text-center">Selected</h4>
            <table className="table text-center ms-3 mt-3">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Minutes</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody id="items">
                {props.selectedList.map((film) => {
                    totalTime += film.quantity * film.movie.duration;
                    return (
                        <tr key={film.movie.id}>
                            <td> {film.movie.title}</td>
                            <td> {film.movie.duration} </td>
                            <td >{film.quantity}</td>
                            <td>
                                <button onClick={() => props.addToSelected(film.movie)} className="btn btn-dark">+</button>
                                <button onClick={() => props.removeFromSelected(film.movie)} className="btn btn-danger">-</button></td>
                            <td>{(film.quantity * film.movie.duration).toFixed(2)}</td>
                        </tr>
                    )
                })}
                </tbody>
                <tfoot>
                <tr id="footer">
                    <th scope="row" colSpan="5" id="empty">Total films: {props.totalFilms} | Total time: {totalTime.toFixed(2)}</th>
                </tr>
                </tfoot>
            </table>
        </>
    )
}