/**
 * Función que obtiene los mazos según la URL
 * @param url de la petición
 * @returns {Promise<*>} con las cartas del mazo
 */
async function fetchCards(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}