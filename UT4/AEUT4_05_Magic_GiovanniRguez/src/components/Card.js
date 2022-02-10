import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <>
            <Link to={`/detail/${props.name}`}></Link>
            <li className="card">
                <img src={props.image} alt={props.name} className="card-image"/>
                <main className="card-info">
                    <h3 className="card-name">{props.name}</h3>
                    <button>Add to Deck</button>
                </main>
            </li>
        </>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Card;