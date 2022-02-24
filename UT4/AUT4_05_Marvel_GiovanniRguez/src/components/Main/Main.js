import React from 'react';
import { Link } from 'react-router-dom';
import FilmList from '../FilmList';
import Cart from '../Cart';

/**
 * Componente Main que contiene todas las películas, tanto la lista como las seleccionadas
 * @param props con las películas
 * @returns {JSX.Element}
 * @constructor
 */
export default function Main(props) {
    return (
        <div className="row">
            <Link className="btn btn-danger mx-auto" to="/new">Add Film</Link>
            <div className="col-8">
                <FilmList filmList={props.filmList} addToSelected={props.addToSelected}></FilmList>
            </div>
            <div className="col-4">
                <Cart
                    selectedList={props.selectedList}
                    addToSelected={props.addToSelected}
                    removeFromSelected={props.removeFromSelected}
                    totalFilms={props.totalFilms}>
                </Cart>
            </div>
        </div>
    );
}