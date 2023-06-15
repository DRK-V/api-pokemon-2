let zoneBusqueda = document.querySelector('.busquedas');
let inputBuscador = document.getElementById("pokemon-busqueda");
let pokemonData = [];
1
window.addEventListener('DOMContentLoaded', async () => {
  zoneBusqueda.innerHTML = `<div class="load"> <img src="./IMG/pikachumove.gif" alt=""> 
                                
                                </div>`;
  const data = await cargarPokemon();
  pokemonList.innerHTML="";
  pokemonData = await obtenerDatosPokemon(data.results);
  renderPokemon(pokemonData);
});

async function cargarPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010&offset=0");
  return await response.json();
}

async function obtenerDatosPokemon(pokemonList) {
  const promises = pokemonList.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    return response.json();
  });
  return Promise.all(promises);
}

function createPokemonitems(pokemon) {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = pokemon.map(poke => cardPoke(poke)).join("");
  return container;
}


function cardPoke(poke) {
  function imagenPokemon(poke) {
    let imagenes = poke.sprites.other.dream_world.front_default;
    let imagenesDos = poke.sprites.other['official-artwork'].front_default;
    if (imagenes != null) {
      return imagenes;
    } else {
      return imagenesDos;
    }
  }

  let tipos = poke.types.map(type => `
    <p class="${type.type.name} tipo">${type.type.name}</p>`);
  tipos = tipos.join("");

  const div = document.createElement("div");
  div.classList.add("contenedor-card");
  div.id = poke.id;
  div.innerHTML = `
    <div class="${poke.name}" id="${poke.id} ">
        <div class="imagen-pokemon">
            <img class="img-poke" src="${imagenPokemon(poke)}"> 
        </div>
        <div class="contenedor-info">
            <div class="contenedor-id"><p class="id">#${poke.id}</p></div>
            <div class="contenedor-tipos">${tipos}</div>
        </div>
        <div class="contenedor-nombre">
            <p class="nombre-pokemon">${poke.name}</p>
        </div>
    </div>
  `;
  div.addEventListener("click", function() {
    infoCardBig(poke);
  });
  return div; // Devolver el elemento div en lugar de div.outerHTML
}



function renderPokemon(pokes) {
  zoneBusqueda.innerHTML = ""; // Limpia el contenido actual

  const fragment = document.createDocumentFragment();
  pokes.forEach(poke => {
    const pokemonItem = cardPoke(poke);
    fragment.appendChild(pokemonItem);
  });

  zoneBusqueda.appendChild(fragment);
}





inputBuscador.addEventListener('keyup', e => {
  const texto = inputBuscador.value.toLowerCase();
  const newPokemon = pokemonData.filter(user => `${user.name}${user.id}`.includes(texto));
  renderPokemon(newPokemon);
});



