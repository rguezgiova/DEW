import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente Crud que se encarga de añadir una nueva película
 * @param props con la película
 * @returns {JSX.Element}
 * @constructor
 */
export default function Crud(props) {
    const navigate = useNavigate();

    /**
     * Función que al enviar el formulario crea la película
     * @param event utilizado
     */
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target[0].value;
        const image = event.target[1].value;
        const synopsis = event.target[2].value;
        const year = event.target[3].value;
        const duration = event.target[4].value;
        const id = props.filmList[props.filmList.length-1].id + 1
        const newFilm = {
            title: name,
            overview: synopsis,
            release_date: year,
            cover_url: image,
            duration: duration,
            id: id
        }
        props.addNewFilm(newFilm);
        navigate('/');
    }
    return (
        <div>
            <form action="" id="inputForm" onSubmit={handleSubmit}>
                <h2 className='text-center'>Add film:</h2>
                <label className="form-text" htmlFor="name">Name: </label>
                <input className="form-control mb-2" type="text" name="name" />
                <label className="form-text" htmlFor="imageurl">Image URL: </label>
                <input className="form-control mb-2" type="text" name="imageUrl" />
                <label className="form-text" htmlFor="synopsis">Synopsis: </label>
                <textarea className="form-control mb-2" name="synopsis" id="" cols="30" rows="10">
                </textarea>
                <label className="form-text" htmlFor="year">Year: </label>
                <input className="form-control mb-2" type="number" name="year" />
                <label className="form-text" htmlFor="duration">Duration: </label>
                <input className="form-control mb-2" type="number" name="duration" />
                <button className="btn btn-danger" type="submit">Add</button>
            </form>
        </div>
    )
}