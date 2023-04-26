import {Serie} from './serie.js';
import {dataSeries} from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(dataSeries);
renderSeasonsAverage(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td>${s.name}</td>
                               <td>${s.channel}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function renderSeasonsAverage (series: Serie[]): void {
    let tSeasons: number = 0;
    let tSeries: number = series.length;
    series.forEach ((s) => {
        tSeasons += s.seasons;
    });

    let answer = tSeasons/tSeries;
    let answer2 = answer.toString();
    let trElement = document.createElement("p");
    trElement.innerHTML = 'Seasons average: ' + answer2;
    seriesTbody.appendChild(trElement);
};