var pokemonList = [getType(), getRace(), getName()];

/**
 * Función que convierte en objeto los datos según sea Pokemon o Huevo
 */
function getCreature() {
    if (getType() === 'Pokemon') {
        new PokemonClass(getType(), getRace(), getName());
    } else {
        new CreatureClass(getType(), getRace(), getName());
    }
    createOption();
}

/**
 * Función que recibe el tipo y lo transforma según lo que reciba
 * @returns {string} según es Huevo o Pokemon
 */
function getType() {
    let optionType = document.getElementById('tipo').value;
    if (optionType === 0) {
        return 'Huevo';
    } else {
        return 'Pokemon';
    }
}

/**
 * Función que recibe la raza y la transforma a la que significa
 * @returns {string} según lo que signifique
 */
function getRace() {
    let optionRace = document.getElementById('raza').value;
    if (optionRace === 'Pikachu') {
        return 'Pikachu';
    } else if (optionRace === 'Charmander') {
        return 'Charmander';
    } else if (optionRace === 'Bulbasaur') {
        return 'Bulbasaur';
    } else if (optionRace === 'Pidgey') {
        return 'Pidgey';
    } else if (optionRace === 'Rattata') {
        return 'Rattata';
    } else {
        return 'Kakuna';
    }
}

/**
 * Función que recoge el nombre
 * @returns {*} nombre que recibe
 */
function getName() {
    return document.getElementById('name').value;
}

/**
 * Función que crea la opción en el select
 */
function createOption() {
    let drawNode = document.getElementById('pokemonContainer');
    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-pokemon').content;
    template.querySelector('option').textContent = pokemonList[2];
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    drawNode.appendChild(fragment);
}