let actual = 'https://swapi.py4e.com/api/planets/'
let planets;
let next;
let previous;

function getPlanets(url) {
    fetch(url).then((res) => res.json()).then((data) => {
        planets = data.results;
        createPlanetBoard(planets);
        actual = url;
        next = data.next != null ? data.next : actual;
        previous = data.previous != null ? data.previous : actual;
        return initEventListeners(planets);
    });
}

function createPlanetBoard(planets) {
    document.querySelector('#planetBoard').innerHTML = "";
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
            <button id="${planet.name.replace(" ","")}" class="btn btn-secondary" type="button">${planet.residents.length} Resident(s)</button>
        </td>
        ` : `
        <td id="residents">No known residents.</td>`;

        planetBoard.appendChild(row);
    }
}

function initModal(e, planet){
    moTitle = document.querySelector('.modal-title');
    residentBoard = document.querySelector('#residentBoard');
    residentBoard.innerHTML="";
    moTitle.innerText = `Residents of ${planet.name}`;
    for (let resident of planet.residents){
        fetch(resident).then((res) => res.json()).then((data) =>{
            row = document.createElement('tr');
            row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.height}</td>
            <td>${data.mass}</td>
            <td>${data.hair_color}</td>
            <td>${data.skin_color}</td>
            <td>${data.eye_color}</td>
            <td>${data.birth_year}</td>
            <td>${data.gender}</td>
            `
            residentBoard.appendChild(row);
        })
    }

}

function initEventListeners(planets){
    cancelBtn = document.querySelector('.close');
    cancelBtn.addEventListener('click',closeModal);
    for (let planet of planets){
        if (planet.residents.length !== 0) {
            modalBtn = document.querySelector(`#${planet.name.replace(' ', '')}`);
            modalBtn.addEventListener('click', (e) => {
                initModal(e, planet)
                openModal();

            });
        }
    }
}

function openModal() {
    // document.getElementById("backdrop").style.display = "block"
    document.getElementById("myModal").style.display = "block"
    document.getElementById("myModal").classList.add("show")
}
function closeModal() {
    // document.getElementById("backdrop").style.display = "none"
    document.getElementById("myModal").style.display = "none"
    document.getElementById("myModal").classList.remove("show")
}

getPlanets(actual);
let previousBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');
previousBtn.addEventListener('dblclick',() => getPlanets(previous));
nextBtn.addEventListener('dblclick', () => getPlanets(next));

