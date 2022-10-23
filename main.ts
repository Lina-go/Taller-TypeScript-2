import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
const promedioTable: HTMLElement = document.getElementById("promedioTemporadas")!;
let nameButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('btn-serie-name')!;

promedioTable.innerHTML = `${darPromedioDeTemporadas(series)}`;

mostrarDatosSeries(series);
mostrarCarta(series);

function mostrarDatosSeries(series: Serie[]) {
    
    for (let serie of series) {
        let trSerie: HTMLElement = document.createElement("tr");
        trSerie.setAttribute('class', 'nombreSerie');
        trSerie.innerHTML = `<td class="id">${serie.id}</td>
        <td><button class='btn-serie-name'>${serie.name}</button></td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
        seriesTable.appendChild(trSerie);
    }
}

function darPromedioDeTemporadas(series: Serie[]): number {
    let promedio: number = 0;
    for (let i = 0; i < series.length; i++) {
        promedio += series[i].seasons;
        }
    return promedio / series.length;
}

function mostrarCarta(series: Serie[]): void {
    const ser: NodeList = document.querySelectorAll('tr.nombreSerie');
    const col: HTMLElement = document.getElementById('carta')!;

    // Hacer click en cada fila muestra su detalle en una card de bootstrap
    for (let i = 0; i < ser.length; i++) {
        ser[i].addEventListener('click', () => {
            col.innerHTML = `<div class="card">
            <img src="${series[i].image}" class="card-img-top" alt="${series[i].name}">
            <div class="card-body">
                <h5 class="card-title
                ">${series[i].name}</h5>
                <p class="card-text">${series[i].description}</p>
                <a href="${series[i].link}" class="btn btn-primary">Go to serie</a>
            </div>
        </div>`;
        });
    }
    
}
