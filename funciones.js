import { fetchApi } from "./fetch.js";
import { renderDataF } from "./app.js";
 
let listaEstaciones = [];

let ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));

myBoton.addEventListener("click", guardarCiudad);



  // Arreglo de ciudades
  const ciudades = [
    "Santiago",
    "Antofagasta",
    "Arica",
    "Calama",
    "Castro",
    "Chillán",
    "Coquimbo",
    "Copiapó",
    "Concepción",
    "Curicó",
    "Iquique",
    "La Calera",
    "La Serena",
    "Linares",
    "Los Andes",
    "Los Ángeles",
    "Osorno",
    "Ovalle",
    "Puerto Montt",
    "Punta Arenas",
    "Quillota",
    "Rancagua",
    "San Antonio",
    "San Felipe",
    "Talagante",
    "Talca",
    "Temuco",
    "Valdivia",
    "Valparaíso",
    "Viña del Mar"
];

// Obtén la referencia al elemento select
const selectCiudades = document.getElementById("ciudades");

// Agrega las opciones al select usando el arreglo
ciudades.forEach((ciudad) => {
    const option = document.createElement("option");
    option.value = ciudad;
    option.text = ciudad;
    selectCiudades.appendChild(option);
});






function guardarCiudad()
{
   
    let ciudadTemp=document.getElementById("ciudades").value;
    localStorage.setItem("ciudadTemp", JSON.stringify(ciudadTemp));
    
   
    mostarCiudad()
    
}

function mostarCiudad(){
    ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));
  
    renderDataF()

}


