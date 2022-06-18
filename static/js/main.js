let actual = 'https://swapi.dev/api/planets/'
let planets;
let next;
let previous;

function getPlanets(url) {
    fetch(url).then((res) => res.json()).then((data) => {
        next = data.next != null ? data.next : actual;
        previous = data.previous === null ? data.previous : actual;
        planets = data.results;
        return createPlanetBoard(planets);
    });
}

function createPlanetBoard(planets) {
    for (let planet of planets) {
        let planetBoard = document.querySelector('#planetBoard');
        let row = document.createElement("tr")
        row.innerHTML = `
        <td id="name">${planet.name}</td>
        <td id="diameter">${parseInt(planet.diameter).toLocaleString('en-Us')} km</td>
        <td id="climate">${planet.climate}</td>
        <td id="terrain">${planet.terrain}</td>`
        row.innerHTML += planet.surface_water != 'unknown' ? `<td id="surface_water">${planet.surface_water} %</td>` : `<td id="surface_water">${planet.surface_water}</td>`;
        row.innerHTML += planet.population != 'unknown' ? `
        <td id="population">${parseInt(planet.population).toLocaleString('en-US')} peoples</td>` :
            `<td>${planet.population}</td>`;
        row.innerHTML += planet.residents != 0 ? `
        <td id="residents">
            <button id="${planet.name}" class="btn btn-secondary" type="button">${planet.residents.length} Resident(s)</button>
        </td>
        ` : `
        <td id="residents">No known residents.</td>`;

        planetBoard.appendChild(row);
    }
}

getPlanets(actual);

