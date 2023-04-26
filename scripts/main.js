import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(dataSeries);
renderSeasonsAverage(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                               <td>").concat(s.name, "</td>\n                               <td>").concat(s.channel, "</td>\n                               <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderSeasonsAverage(series) {
    var tSeasons = 0;
    var tSeries = series.length;
    series.forEach(function (s) {
        tSeasons += s.seasons;
    });
    var answer = tSeasons / tSeries;
    var answer2 = answer.toString();
    var trElement = document.createElement("p");
    trElement.innerHTML = 'Seasons average: ' + answer2;
    seriesTbody.appendChild(trElement);
}
;
