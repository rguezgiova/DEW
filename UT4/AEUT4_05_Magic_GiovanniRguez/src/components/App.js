import {useEffect, useState} from "react";

export default  function App() {
    let urlCards = 'https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(urlCards);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let data = await response.json();
                setData(data.data);
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    return (
        <div className="App">
            <div className="container-fluid">
                {loading && <div><h1>Cargando...</h1></div>}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {data &&
                                data.map(({ name, image_uris }) => (
                                    <div className="card col-3 mt-2">
                                        <img className="card-img-top" src={image_uris.large} alt={name}/>
                                        <div className="card-body align-content-center">
                                            <h5 className="card-title">{name}</h5>
                                            <button className="btn btn-primary">Add to deck</button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="col-3">
                        <table className="table" id="table-cards">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}