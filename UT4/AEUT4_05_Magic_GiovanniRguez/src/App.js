import React, {useEffect, useState} from "react";
import CardList from "./components/CardList";
import Deck from "./components/Deck";

/**
 * Función App que recoge todo lo necesario para su correcto funcionamiento
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [cardList, setCardList] = useState([]);
    const [data, setData] = useState(false);
    const [url, setUrl] = useState('https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints');
    const [deckList, setDeckList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setCardList(data.data);
            setData(true);
        }
        fetchData();
    }, [url]);

    const totalCards = deckList
        .map(card => card.quantity)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    function addToDeck(card) {
        let found = deckList.find(element => element.card === card);

        if (found !== undefined) {
            if (found.quantity < 4 && totalCards < 60) {
                let newDeckList = [...deckList];
                newDeckList[newDeckList.indexOf(found)].quantity++;
                setDeckList(newDeckList);
            }
        } else {
            if (totalCards < 60) {
                let newDeckList = [...deckList];
                newDeckList = newDeckList.concat([
                    {
                        'card': card,
                        'quantity': 1
                    }
                ]);
                setDeckList(newDeckList);
            }
        }
    }

    function removeFromDeck(card) {
        let found = deckList.find(element => element.card === card);

        if (found !== undefined) {
            if (found.quantity > 1) {
                let newDeckList = [...deckList];
                newDeckList[newDeckList.indexOf(found)].quantity--;
                setDeckList(newDeckList);
            } else if (found.quantity === 1) {
                let newDeckList = [...deckList];
                newDeckList.splice(newDeckList.indexOf(found), 1);
                setDeckList(newDeckList);
            }
        }
    }

    if (data) {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <CardList cardList={cardList} addToDeck={addToDeck}></CardList>
                        </div>
                        <div className="col-4">
                            <Deck deckList={deckList} addToDeck={addToDeck} removeFromDeck={removeFromDeck} totalCards={totalCards}></Deck>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <h1>¡Error! No se han recibido los datos de la API</h1>
        );
    }
}

export default App;