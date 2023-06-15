const espacioPopUp = document.querySelector("#bigCard"); 
const espacioDescripcion = document.querySelector(".text-pokemon");

//-----------------------------------------------------------
//-------------------POPUP DE POKEMON------------------------
//-----------------------------------------------------------

function obtenerPokemon(elemento) {
    let idT = elemento.id;
    pokemonInfo(idT);
};

function pokeBusqueda(id){
	fetch(URL + id)
        .then((response) => response.json())
        .then(data => infoCardBig(data));
};

function pokemonInfo(id) {

	 fetch(URL + id)
        .then((response) => response.json())
        .then(data => infoCardBig(data));
    console.log(id);
};

//-------------------------------------------------------------------
//------------------------FIN BUSCADOR-------------------------------
//-------------------------------------------------------------------

function generarpokemon() {
	let pokemonId = Math.floor(Math.random() * 1010) + 1; 
	// Genera un ID de Pokémon aleatorio entre 1 y 1010
	let inputBuscador = pokemonId;
	let pokemonBusqueda = inputBuscador;
  
	pokeBusqueda(pokemonBusqueda);
  };


function cerrar(){
	espacioPopUp.innerHTML= "";
	 document.body.style.overflow = 'auto';
}
//-----------------------------------------------------------------
//---------------- POPUP GRANDE------------------------------------
//-----------------------------------------------------------------
function infoCardBig(poke){
	document.body.style.overflow = 'hidden';
	espacioPopUp.style.overflow="auto";
let hp = poke.stats['0'].base_stat
let ataque = poke.stats['1'].base_stat;
let defensa = poke.stats['2'].base_stat;
let ataqueEspecial = poke.stats['3'].base_stat;
let defensaEspecial = poke.stats['4'].base_stat;
let velocidad = poke.stats['5'].base_stat;


	function imagenPokemon(poke) {
        let imagenes = poke.sprites.other.dream_world.front_default;
        let imagenesDos = poke.sprites.other['official-artwork'].front_default;
        if (imagenes != null) {
            return imagenes;
        } else {
            return imagenesDos;
        }
    };

	let tipos = poke.types.map(type => `
        <p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join("");

   



    const bigCard = document.createElement("div");
    bigCard.classList.add("contenedor-card-big");
    bigCard.innerHTML = `
	<div class="contenido-pop">
	<button onclick="cerrar()" class="btnCerrar">
	    <img width="50%" src="https://cdn-icons-png.flaticon.com/512/1004/1004763.png" alt="Cerrar">
	    </button>
		<div class="nombre-imagen">
				<h2>${poke.name.toUpperCase()}</h2>
				<p>${poke.id}</p>
				<div class="imagen-pokemon"><img class='img-pokemon' src="${imagenPokemon(poke)}" alt="${poke.name}"></div>

		</div>
		<div class="info-pokemon">

				<p class="text-pokemon"></p>
				<div class="peso-altu">
					<div><p class="altura">Altura: ${poke.height}m</p></div>	
					<div><p class="peso">Peso: ${poke.weight}Kg</p></div>	
				</div>

				<div class="Tipes">${tipos}</div>
				
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
			</div>	
		</div>	
	
    `;
    
    espacioPopUp.append(bigCard);



     
};



//---------------------------------------------------
//-----------------FIN DE POPUP----------------------
//---------------------------------------------------


// function btnCerrar(event) {
	
// }

