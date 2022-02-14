import { Link } from "react-router-dom";

const BackToList = () => {
    return (
        <Link to="/" className="detailLink" aria-label="Go home" title="Go home">
            &lt; Back to list
        </Link>
    );
}

export default BackToList;