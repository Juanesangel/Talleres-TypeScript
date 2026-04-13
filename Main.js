import { series } from "./Data.js";
const tableBody = document.getElementById("series-table-body");
const avgElement = document.getElementById("average-seasons");
function renderSeries() {
    let totalSeasons = 0;
    series.forEach(serie => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / series.length;
    avgElement.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}
renderSeries();
