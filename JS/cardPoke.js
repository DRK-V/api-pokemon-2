const pokemonList = document.querySelector(".listaPoke");

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

  let idPokemonCard = poke.id;
  let tipos = poke.types.map(type => `
    <p class="${type.type.name} tipo">${type.type.name}</p>`);
  tipos = tipos.join("");

  const div = document.createElement("div");
  div.classList.add("contenedor-card");
  div.id = idPokemonCard;
  div.innerHTML = `
    <div class="${poke.name}" id="${poke.id}">
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
  pokemonList.append(div);
}

function showPokemonInfo(poke) {
  function imagenPokemon(poke) {
    let imagenes = poke.sprites.other.dream_world.front_default;
    let imagenesDos = poke.sprites.other['official-artwork'].front_default;
    if (imagenes != null) {
      return imagenes;
    } else {
      return imagenesDos;
    }
  }
  let hp = poke.stats['0'].base_stat
  let ataque = poke.stats['1'].base_stat;
  let defensa = poke.stats['2'].base_stat;
  let ataqueEspecial = poke.stats['3'].base_stat;
  let defensaEspecial = poke.stats['4'].base_stat;
  let velocidad = poke.stats['5'].base_stat;
  
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("contenido-inic", "flotante");
  infoDiv.innerHTML = `
  <div class="contenido-pop">
    <div class="nombre-imagen">
        <h2>${poke.name.toUpperCase()}</h2>
        <div class="imagen-pokemon"><img class='img-pokemon' src="${imagenPokemon(poke)}" alt="${poke.name}"></div>
    </div>
    <div class="info-pokemon">
        <p class="text-pokemon"></p>
        <div class="peso-altu">
            <div><p class="altura">Altura: ${poke.height}</p></div> 
            <div><p class="peso">Peso: ${poke.weight}</p></div> 
        </div>
        <div class="Tipes">${poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join("")}</div>
        <div class="estadisticas">

					<h3>Estadisticas</h3>
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Vida</p><p class="num-states">${hp}</p></div>
					    <progress class="barras" max="150" value="${hp}"></progress>
					</div>
					    
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Ataque</p><p class="num-states">${ataque}</p></div>
					    <progress class="barras" max="150" value="${ataque}"></progress>
					</div>
					        
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Defensa</p><p class="num-states">${defensa}</p></div>
					    <progress class="barras" max="150" value="${defensa}"></progress>
					</div>
					    
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Ataque Especial</p><p class="num-states">${ataqueEspecial}</p></div>
					    <progress class="barras" max="150" value="${ataqueEspecial}"></progress>
					</div>
					        
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Defensa Especial</p><p class="num-states">${defensaEspecial}</p></div>
					    <progress class="barras" max="150" value="${defensaEspecial}"></progress>
					</div>
					   
					<div class="contenido-bar">
					    <div class="states"><p class="text-states">Velocidad</p><p class="num-states">${velocidad}</p></div>
					    <progress class="barras" max="150" value="${velocidad}"></progress>
					</div>


				</div>
        <button class="close-button" onclick="closePokemonInfo()"><img width="50%" src="https://cdn-icons-png.flaticon.com/512/1004/1004763.png" alt="Cerrar">
        </button>
    </div>
    </div>
  `;

  // Add the infoDiv to the document body or any other desired container
  document.body.appendChild(infoDiv);
}

function closePokemonInfo() {
  const infoDiv = document.querySelector(".contenido-inic");
  infoDiv.remove();
}



  
  
  
