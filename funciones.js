import { fetchApi } from "./fetch.js";
import { renderDataF } from "./app.js";
 
let listaEstaciones = [];

let ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));
// btnBuscar.addEventListener("click", guardarCiudad);
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




// export async function llenadoSelect(){
  
//   const estadosApi = await fetchApi("https://api.gael.cloud/general/public/clima");
//   // console.log(estadosApi) //traer la data de api
 

//   listaEstaciones = estadosApi.map(x => x.Estacion) //le paso al arreglo la lista de estaciones
//   // console.log(listaEstaciones)
  

//  let html=""; 
 
//   listaEstaciones.forEach(function(element){
//       html += "<option>" +element+"</option>";
//               //option value  /label -element - propiedad  /value: sigla código y la ciudad
//   });           //al value pasar el código / recorrer el arreglo con 2 for
//   document.querySelector('#estaciones').innerHTML = html; 

// }

// document.onload = llenadoSelect(); 


function guardarCiudad()
{
    // let ciudadTemp=document.getElementById("ciudad").value;
    let ciudadTemp=document.getElementById("ciudades").value;
    localStorage.setItem("ciudadTemp", JSON.stringify(ciudadTemp));
    
    // renderData();
    // location.reload();
    mostarCiudad()
    
}

function mostarCiudad(){
    ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));
    // console.log(ciudadTemp);
    renderDataF()

}


//capturar con un evento el dato específico (caldera) tarjeta para pintar una ciudad con la temperatura actual y el icono png

//como entregar un valor (value) a la propiedad del option. buscar: como pasar data a la metadata de una etiqueta. 