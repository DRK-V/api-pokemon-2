const pokemonContainer = document.getElementById('pokemon-container');

function mostrarPokemonContainer() {


  pokemonContainer.style.display = "flex";
}


  function imagenPokemon(poke) {
    let imagenes = poke.sprites.other.dream_world.front_default;
    let imagenesDos = poke.sprites.other['official-artwork'].front_default;
    if (imagenes != null) {
      return imagenes;
    } else {
      return imagenesDos;
    }
  }
 

  function mostrarInfoPokemon(pokemonData) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("contenido-inic", "flotante");
    infoDiv.innerHTML = `
      <div class="contenido-pop">
        <div class="nombre-imagen">
          <h2>${pokemonData.name.toUpperCase()}</h2>
          <div class="imagen-pokemon"><img class='img-pokemon' src="${imagenPokemon(pokemonData)}" alt="${pokemonData.name}"></div>
        </div>
        <div class="info-pokemon">
          <p class="text-pokemon"></p>
          <div class="peso-altu">
            <div><p class="altura">Altura: ${pokemonData.height}</p></div> 
            <div><p class="peso">Peso: ${pokemonData.weight}</p></div> 
          </div>
          <div  class="Tipes">${pokemonData.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join("")}</div>
          <div class="estadisticas">
            <h3>Estadisticas</h3>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Vida</p><p class="num-states">${pokemonData.stats[0].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[0].base_stat}"></progress>
            </div>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Ataque</p><p class="num-states">${pokemonData.stats[1].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[1].base_stat}"></progress>
            </div>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Defensa</p><p class="num-states">${pokemonData.stats[2].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[2].base_stat}"></progress>
            </div>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Ataque Especial</p><p class="num-states">${pokemonData.stats[3].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[3].base_stat}"></progress>
            </div>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Defensa Especial</p><p class="num-states">${pokemonData.stats[4].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[4].base_stat}"></progress>
            </div>
            <div class="contenido-bar">
              <div class="states"><p class="text-states">Velocidad</p><p class="num-states">${pokemonData.stats[5].base_stat}</p></div>
              <progress class="barras" max="150" value="${pokemonData.stats[5].base_stat}"></progress>
            </div>
          </div>
          <button class="close-button" onclick="closePokemonInfo()"><img width="50%" src="https://cdn-icons-png.flaticon.com/512/1004/1004763.png" alt="Cerrar"></button>
        </div>
      </div>
    `;
  
    document.body.appendChild(infoDiv);
  }
  
  function obtenerPokemonG(generacion) {
    zoneBusqueda.innerHTML=""
    pokemonContainer.innerHTML=""

  
    fetch(`https://pokeapi.co/api/v2/generation/${generacion}`)
      .then(response => response.json())
      .then(data => {
        const pokemonList = data.pokemon_species;
        const sortedPokemonList = pokemonList.sort((a, b) => {
          const idA = parseInt(a.url.split('/').slice(-2, -1)[0]);
          const idB = parseInt(b.url.split('/').slice(-2, -1)[0]);
          return idA - idB;
        });
  
        sortedPokemonList.forEach(pokemon => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(response => response.json())
            .then(pokemonData => {
              const tipos = pokemonData.types.map(type => type.type.name);
              const div = document.createElement("div");
              div.classList.add("contenedor-card");
              div.id = pokemonData.id;
              div.innerHTML = `
                <div class="${pokemon.name}" id="${pokemonData.id}">
                  <div class="imagen-pokemon">
                    <img class="img-poke" src="${imagenPokemon(pokemonData)}"> 
                  </div>
                  <div class="contenedor-info">
                    <div class="contenedor-id"><p class="id">#${pokemonData.id}</p></div>
                    <div class="contenedor-tipos">${tipos.map(type => `<p class="tipo ${type}">${type}</p>`).join("")}</div>
                  </div>
                  <div class="contenedor-nombre">
                    <p class="nombre-pokemon">${pokemonData.name}</p>
                  </div>
                </div>
              `;
  
              div.addEventListener('click', () => infoCardBig(pokemonData));
  
              pokemonContainer.appendChild(div);
            })
            .catch(error => console.log(error));
            closeSidebar();

        });
        mostrarPokemonContainer(); // Mostrar el contenedor de los Pokémon
      })
      .catch(error => console.log(error));
  }
  
  function inicioAgain(){
    zoneBusqueda.innerHTML=""
    pokemonContainer.innerHTML=""
  }