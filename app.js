const colores = {
    fire: '#e63946',
    grass: '#caffbf',
    electric: '#fca311',
    water: '#9bf6ff',
    ground: '#9c6644',
    rock: '#6d6875',
    fairy: '#ff0a54',
    poison: '#9d4edd',
    bug: '#4d908e',
    dragon: '#5a189a',
    psychic: '#f9bec7',
    flying: '#bcb8b1',
    fighting: '#e71d36',
    normal: '#ffffff',
    ghost: '#5a189a',
    ice: '#5390d9',
    steel: '#4a4e69',
    sinister:'#6c757d' ,
    dark: '#003049'
}
const tipoPrincipal = Object.keys(colores);

const contenedor = document.querySelector('#contenedor');
const numeroDePokemons = 50; 

const esperarPokemon = async () => {
    for(let i = 1; i<= numeroDePokemons; i++){
        await obtenerPokemon(i);
    }
}
//En este caso el parámetro "id" va sin comillas por ser un sólo parámetro y ser de tipo entero.
const obtenerPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    crearCarta(pokemon);
    console.log(pokemon);
}
//creando elementos en html desde js dinámicamente
const crearCarta = (pokemon) => {
   const pokemonDiv = document.createElement('div');
   
   pokemonDiv.classList.add('pokemon');

   const tipoPokemon = pokemon.types.map(type => type.type.name);
   const tipo = tipoPrincipal.find(type => tipoPokemon.indexOf(type) > -1);
   const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
   const color = colores[tipo];
   pokemonDiv.style.backgroundColor = color;
   const pokemonHTML = `
                    <div class="imgContenedor">
                        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                    </div>
                    <div class="informacion">
                    <span class="numeroPokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
                    <h3 class="nombrePokemon">${nombre}</h2>
                    <h4 class"tipo">Tipo: ${tipo}</h3>
   `;
   
   pokemonDiv.innerHTML = pokemonHTML;

   contenedor.appendChild(pokemonDiv);
}

esperarPokemon();