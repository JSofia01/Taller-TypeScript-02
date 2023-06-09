import {Serie} from './serie.js';
import {dataSeries} from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const img = document.getElementById('img') as HTMLImageElement;
const title = document.getElementById('cardtitle')! as HTMLElement;
const description = document.getElementById('carddescription')! as HTMLElement;
const URL = document.getElementById('URL') as HTMLAnchorElement;

renderSeriesInTable(dataSeries);
renderSeasonsAverage(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td><a class="name" href="#" data-parameter="${s.id}">${s.name}</a></td>
                               <td>${s.channel}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
    const buttons = document.querySelectorAll('.name');
    buttons.forEach((button: Element) => {
        const parameter = (button as HTMLElement).dataset.parameter;
        let serie = series.filter(obj => obj.id.toString() === parameter);
        button.addEventListener('click', () => {
            serie.forEach((se) => {
                img.setAttribute('src', se.img);
                title.textContent = se.name;
                description.textContent = se.description;
                URL.setAttribute('href', se.URL);
                URL.textContent = se.URL;
            });
    });
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