import { series } from "./Data.js";
window.onload = () => {
    const tableBody = document.getElementById("series-table-body");
    const avgElement = document.getElementById("average-seasons");
    const detailElement = document.getElementById("serie-detail");
    let totalSeasons = 0;
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        row.addEventListener("click", () => {
            showSerieDetail(serie);
        });
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / series.length;
    avgElement.innerHTML = `Seasons average: ${average.toFixed(2)}`;
    if (series.length > 0) {
        showSerieDetail(series[0]);
    }
    function showSerieDetail(serie) {
        detailElement.innerHTML = `
    <div class="card" style="width: 100%;">
      <img class="card-img-top" 
        src="${serie.image}" 
        alt="${serie.name}"
        style="height: 300px; object-fit: cover;">

      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>

        <p class="card-text">
          ${serie.description}
        </p>

        <a href="${serie.link}" target="_blank">
          ${serie.link}
        </a>
      </div>
    </div>
  `;
    }
};
//# sourceMappingURL=Main.js.map