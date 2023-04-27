import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(dataSeries);
renderSeasonsAverage(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                               <td><a class=\"name\" href=\"#\" data-parameter=\"").concat(s.id, "\">").concat(s.name, "</a></td>\n                               <td>").concat(s.channel, "</td>\n                               <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var buttons = document.querySelectorAll('.name');
    buttons.forEach(function (button) {
        var parameter = button.dataset.parameter;
        var serie = series.filter(function (obj) { return obj.id.toString() === parameter; });
        button.addEventListener('click', function () {
            var img = document.getElementById('img');
            var title = document.getElementById('cardtitle');
            var description = document.getElementById('carddescription');
            var URL = document.getElementById('URL');
            serie.forEach(function (se) {
                img.setAttribute('src', se.img);
                title.textContent = se.name;
                description.textContent = se.description;
                URL.setAttribute('href', se.URL);
                URL.textContent = se.URL;
            });
        });
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
