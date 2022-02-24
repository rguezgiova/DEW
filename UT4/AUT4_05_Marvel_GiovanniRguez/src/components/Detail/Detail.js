import React from 'react';
import { Link, useParams} from 'react-router-dom';

/**
 * Componente Detail que mostrará la información de la película seleccionada
 * @param props con la película seleccionada
 * @returns {JSX.Element}
 * @constructor
 */
export default function Detail(props) {
    const { id } = useParams();
    const film = props.filmList.find(element => element.id === parseInt(id));

    return (
        <div className="row">
            <div className="col-4">
                <img src={film.cover_url} alt=""
                     className="img-fluid" />
            </div>
            <div className="col-8 d-flex align-items-center">
                <div className="row">
                    <h2 className="mt-2">{film.title}</h2>
                    <h4 className="mt-2">Year released: </h4>
                    <div>{film.release_date}</div>
                    <h4 className="my-3 mt-2" >Synopsis:</h4>
                    <div>{film.overview}</div>
                </div>
            </div>
            <div className="col-4">
                <div className="d-flex justify-content-between my-3">
                    <Link className="btn btn-dark" to="/">Go back</Link>
                </div>
            </div>
        </div>
    )
}