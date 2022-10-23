import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedioTemporadas");
var nameButtons = document.getElementsByClassName('btn-serie-name');
promedioTable.innerHTML = "".concat(darPromedioDeTemporadas(series));
mostrarDatosSeries(series);
mostrarCarta(series);
function mostrarDatosSeries(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trSerie = document.createElement("tr");
        trSerie.setAttribute('class', 'nombreSerie');
        trSerie.innerHTML = "<td class=\"id\">".concat(serie.id, "</td>\n        <td><button class='btn-serie-name'>").concat(serie.name, "</button></td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTable.appendChild(trSerie);
    }
}
function darPromedioDeTemporadas(series) {
    var promedio = 0;
    for (var i = 0; i < series.length; i++) {
        promedio += series[i].seasons;
    }
    return promedio / series.length;
}
function mostrarCarta(series) {
    var ser = document.querySelectorAll('tr.nombreSerie');
    var col = document.getElementById('carta');
    var _loop_1 = function (i) {
        ser[i].addEventListener('click', function () {
            col.innerHTML = "<div class=\"card\">\n            <img src=\"".concat(series[i].image, "\" class=\"card-img-top\" alt=\"").concat(series[i].name, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\n                \">").concat(series[i].name, "</h5>\n                <p class=\"card-text\">").concat(series[i].description, "</p>\n                <a href=\"").concat(series[i].link, "\" class=\"btn btn-primary\">Go to serie</a>\n            </div>\n        </div>");
        });
    };
    // Hacer click en cada fila muestra su detalle en una card de bootstrap
    for (var i = 0; i < ser.length; i++) {
        _loop_1(i);
    }
}
