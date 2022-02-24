import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Film donde se crean las cartas con una determinada película
 * @param props con la película en cuestión
 * @returns {JSX.Element}
 * @constructor
 */
export default function Film(props) {
    let routeUrl = "/detail/" + props.film.id;
    return (
        <>
            <div className="card col-3 px-4 my-2 border-0 text-center">
                <Link to={routeUrl}>
                    <img className="card-img-top" src={props.film.cover_url} alt={props.film.name} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.film.title}</h5>
                    <button onClick={props.addToSelected} className="btn btn-danger">Add to selected</button>
                    <Link className="btn btn-dark ms-2" to={routeUrl}>Detail</Link>
                </div>
            </div>
        </>
    );
}