import {renderDataF} from "./app.js";
 

export const grafico = document.getElementById('myChartF').getContext("2d");

const temperaturaHora = JSON.parse(localStorage.getItem("temperaturaHora"));
const diaHora = JSON.parse(localStorage.getItem("diaHora"));



const color1 = "blue";
const color2 = "red";
const color3 = "DarkCyan";
const color4 = "OliveDrab";

new Chart(grafico, {

  type: 'line',
  data: {
    labels: diaHora,
    datasets: [{
      label: 'Pronóstico del clima',
      data: temperaturaHora,
      borderWidth: 1,
      backgroundColor:color3,
      borderColor:color4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



