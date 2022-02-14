const CARDURL = 'https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints';

export const getCard = async () => {
    const cards = await fetch(`${CARDURL}`);
    const apiCards = await cards.json();
    return apiCards;
}

export default getCard ;