import React from 'react';
import Film from "../Film";

/**
 * Componente FilmList con la lista de películas
 * @param props con la lista de películas
 * @returns {JSX.Element}
 * @constructor
 */
export default function FilmList(props) {
    return (
        <div className="row">
            {props.filmList.map((film) => {
                return <Film film={film} key={film.id} addToSelected={()=>props.addToSelected(film)}></Film>
            })}
        </div>
    );
}