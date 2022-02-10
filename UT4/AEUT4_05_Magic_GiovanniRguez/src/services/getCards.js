const getCards = () => {
    return fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints')
        .then((response => response.json()))
        .then((data) => {
            return data.results.map((card) => {
                return {
                    name: card.name,
                    image: card.image_uris.normal,
                };
            });
        });
}

export default getCards;