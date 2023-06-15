let sidebar = document.getElementById("aside-container")
let contenido = document.getElementById("content")
let botonAbrir = document.getElementById("pokeball-button")
let estadoSidebar = false;

let actualYAbrir = 0;
let actualYCerrar = 0;

inicioSidebar();

function inicioSidebar() {
	if (screen.width <= 800) { //movil inicia cerrado
		estadoSidebar = false;
		contenido.style.marginLeft = "0%";
		contenido.style.width = "100%"
		sidebar.classList.add("close")

	}

}

function openSidebar() {

	if (screen.width > 800) { // verifica tama;o mayor a 640 hacer eso
		sidebar.classList.remove("close")
		contenido.style.marginLeft = "20%"
		contenido.style.width = "100%"
		botonAbrir.style.display = "none"
		estadoSidebar = true;

		//deberia guardar el lugar de desplazamiento cuando se abre 
		actualYAbrir = window.pageYOffset || document.documentElement.scrollTop;

	} else {
		if (sidebar.classList.contains("close")) {
			sidebar.classList.remove("close")
			sidebar.style.display = "block"// movil solo muestra segun el css que se hizo
			estadoSidebar = true;
		} else {
			sidebar.style.display = "block"// movil solo muestra segun el css que se hizo
			estadoSidebar = true;

		}
	}

};



function closeSidebar() {
	if (screen.width > 800) {
		contenido.style.marginLeft = "0%";
		contenido.style.width = "100%";
		sidebar.classList.add("close");
		botonAbrir.style.display = "block";
		//estado
		estadoSidebar = false;
		actualYCerrar = window.pageYOffset || document.documentElement.scrollTop;

		//deberia guardar el lugar de desplazamiento cuando se cerro 
	} else {
		if (sidebar.classList.contains("close")) {
			sidebar.classList.remove("close");
			sidebar.style.display = "none";
			estadoSidebar = false;
		} else {
			sidebar.style.display = "none";
			estadoSidebar = false;
		}


	}
};




function scrollArriba() {
	estadoSidebar = true;
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

