var attackDamage = [];
var usedPokemon = [];
var buttons = document.getElementsByTagName('button');

/**
 * Función que añade un Pokemon seleccionado a la mochila
 */
function addPokemon() {
    if (buttons.valueOf()[0].value === 'bulbasaur') {
        let damage = document.getElementById('bulbasaur').getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById('bulbasaur').getElementsByTagName("span")[0].firstChild.nodeValue;
        attackDamage.push(parseInt(damage));
        usedPokemon.push(name);
    } else if (buttons.valueOf()[1].value === 'ivysaur') {
        let damage = document.getElementById('ivysaur').getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById('ivysaur').getElementsByTagName("span")[0].firstChild.nodeValue;
        attackDamage.push(parseInt(damage));
        usedPokemon.push(name);
    } else if (buttons.valueOf()[2].value === 'venusaur') {
        let damage = document.getElementById('venusaur').getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById('venusaur').getElementsByTagName("span")[0].firstChild.nodeValue;
        attackDamage.push(parseInt(damage));
        usedPokemon.push(name);
    } else if (buttons.valueOf()[3].value === 'charmander') {
        let damage = document.getElementById('charmander').getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById('charmander').getElementsByTagName("span")[0].firstChild.nodeValue;
        attackDamage.push(parseInt(damage));
        usedPokemon.push(name);
    } else {
        let damage = document.getElementById('charmeleon').getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById('charmeleon').getElementsByTagName("span")[0].firstChild.nodeValue;
        attackDamage.push(parseInt(damage));
        usedPokemon.push(name);
    }
    totalPokemon(attackDamage);
    totalAttackDamage(attackDamage);
    drawName(usedPokemon);
}

/**
 * Función que calcula los pokemons del array
 * @param usedPokemon array con los Pokemons a calcular
 */
function totalPokemon(usedPokemon) {
    let bulbasaur  = 0;
    let ivysaur  = 0;
    let venusaur  = 0;
    let charmander  = 0;
    let charmeleon  = 0;
    for (let i = 0; i <= usedPokemon.length; i++) {
        if (usedPokemon.forEach(element => {
            element.contains('Bulbasaur')})) {
            bulbasaur++;
        }
        if (usedPokemon[0] === 'Ivysaur') {
            ivysaur++;
        }
        if (usedPokemon[0] === 'Venasaur') {
            venusaur++;
        }
        if (usedPokemon[0] === 'Charmander') {
            charmander++;
        }
        if (usedPokemon[0] === 'Charmeleon') {
            charmeleon++;
        }
        if (bulbasaur >= 3 || ivysaur >=3 || venusaur >=3 || charmander >=3 || charmeleon >=3) {
            alert('No se pueden añadir 3 Pokemons iguales');
        }
        if (usedPokemon.length > 10) {
            alert('No se pueden añadir más de 10 Pokemons');
        }
    }
    console.log('Bul' +bulbasaur);
    console.log('Ivy' +ivysaur);
    console.log('Ven' +venusaur);
    console.log('Charma' +charmander);
    console.log('Charme' +charmeleon);
}

/**
 * Función que calcula el daño total del array de daño
 * @param attackDamage array con el daño a calcular
 */
function totalAttackDamage(attackDamage) {
    let totalDamage = 0;
    console.log(totalDamage)
    for (let i = 0; i < attackDamage.length; i++) {
        totalDamage += attackDamage[i];
    }
    console.log(totalDamage)
    document.getElementById("daño").getElementsByTagName("p")[1].innerHTML = "Total attack: " + totalDamage;
}

/**
 * Función que pinta los nombres de la array
 * @param usedPokemon array con el nombre de los Pokemons
 */
function drawName(usedPokemon) {
    let nodoPintar = document.getElementById("mochila");
    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-nombre').content;
    for (let i = 0; i < usedPokemon.length; i++) {
        template.querySelector("p").textContent = usedPokemon[i];
    }
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    nodoPintar.appendChild(fragment);
}

