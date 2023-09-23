import { ApiClima1 } from "./fetch.js";
import { grafico } from "./mychart.js";
import { ApiTempActual } from "./fetch.js";
//import { Button } from "bootstrap";

let temperaturaHora = [];
let diaHora = [];
let ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));





export async function renderDataF() {
     
    
    
    const dataClima = await ApiClima1('https://api.openweathermap.org/data/2.5/forecast?q='+ciudadTemp+'&appid=728aafb044c97dc70ba91271192bcf5a&units=metric&lang=es');
    // const dataClima = await ApiClima1('https://api.openweathermap.org/data/2.5/forecast?q=santiago&appid=728aafb044c97dc70ba91271192bcf5a&units=metric&lang=es');

    const arregloList = dataClima.list;

    temperaturaHora = arregloList.map((arregloList) => arregloList.main.temp);
    localStorage.setItem("temperaturaHora", JSON.stringify(temperaturaHora));
    temperaturaHora = JSON.parse(localStorage.getItem("temperaturaHora"));
    // console.log(temperatura);
    diaHora = arregloList.map((arregloList) => arregloList.dt_txt);
    localStorage.setItem("diaHora", JSON.stringify(diaHora));
    diaHora = JSON.parse(localStorage.getItem("diaHora"));
    // console.log(diaHora);

    location.reload();

return {diaHora, temperaturaHora};

}

async function renderDataActual() {
    let ciudadTemp = JSON.parse(localStorage.getItem("ciudadTemp"));
    
    idCiudad.textContent = ciudadTemp;

const dataActual = await ApiTempActual('https://api.openweathermap.org/data/2.5/weather?q='+ciudadTemp+'&appid=728aafb044c97dc70ba91271192bcf5a&units=metric&lang=es');
   

   console.log(dataActual);

   const tempActual = Math.round(dataActual.main.temp);
   temperaturaValor.textContent = `Actualmente ${tempActual} °C`
   
   const tempMin = Math.round(dataActual.main.temp_min);
   temperaturaMin.textContent = `Minima ${tempMin} °C`

   const tempMax = Math.round(dataActual.main.temp_max);
   temperaturaMax.textContent = `Máxima ${tempMax} °C`

   const viento = dataActual.wind.speed;
   vViento.textContent = `Velocidad viento ${viento} Km/h`

   const humedad = Math.round(dataActual.main.humidity);
   condHumedad.textContent = `Humedad ${humedad} % `

   const icono = dataActual.weather[0].icon;

switch (dataActual.weather[0].main){
    case 'Clear':
        icoAnimado.src = './animated/day.svg'
       
    break;
    case 'Clouds':
        icoAnimado.src = './animated/cloudy.svg'
       
    break;
    case 'Rain':
        icoAnimado.src = './animated/rainy-5.svg'
        
    break;
    case 'Snow':
        icoAnimado.src = './animated/snowy-6.svg'
        
    break;
    case 'Thunderstorm':
        icoAnimado.src = './animated/thunder.svg'
        
    break;
    case 'Drizzle':
        icoAnimado.src = './animated/rainy-7.svg'
        
    break;
    case 'Fog':
        icoAnimado.src = './animated/cloudy.svg'
        
    break;
    case 'Haze':
        icoAnimado.src = './animated/cloudy.svg'
       
    break;
    

}


}

renderDataActual();
