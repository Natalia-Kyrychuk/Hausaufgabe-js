import persons from "./persons.json" with { type: "json" };

let sortDirection = {
    id: true,
    name: true,
    alter: true,
    groesse: true,
    geburtsdatum: true,
    herkunft: true,
    gewicht: true
};

function renderPersons() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    for (const person of persons) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = person.id;
        tr.appendChild(tdId);

        const tdName = document.createElement("td");
        tdName.textContent = person.name;
        tr.appendChild(tdName);

        const tdAge = document.createElement("td");
        tdAge.textContent = person.alter;
        tr.appendChild(tdAge);

        const tdHeight = document.createElement("td");
        tdHeight.textContent = person.groesse;
        tr.appendChild(tdHeight);

        const tdBirthDate = document.createElement("td");
        tdBirthDate.textContent = person.geburtsdatum;
        tr.appendChild(tdBirthDate);

        const tdOrigin = document.createElement("td");
        tdOrigin.textContent = person.herkunft;
        tr.appendChild(tdOrigin);

        const tdWeight = document.createElement("td");
        tdWeight.textContent = person.gewicht;
        tr.appendChild(tdWeight);

        tbody.appendChild(tr);
    }
}

function sortByColumn(columnName) {
    const isAscending = sortDirection[columnName];

    persons.sort((a, b) => {
        const valueA = a[columnName];
        const valueB = b[columnName];

        if (typeof valueA === "string" && typeof valueB === "string") {
            if (isAscending) {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        } else {
            if (isAscending) {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        }
    });

    sortDirection[columnName] = !sortDirection[columnName];
    renderPersons();
}

const thid = document.getElementById("thid");
thid.addEventListener("click", () => {
    sortByColumn("id");
});

const thname = document.getElementById("thname");
thname.addEventListener("click", () => {
    sortByColumn("name");
});

const thage = document.getElementById("thage");
thage.addEventListener("click", () => {
    sortByColumn("alter");
});

const thsize = document.getElementById("thsize");
thsize.addEventListener("click", () => {
    sortByColumn("groesse");
});

const thbirth = document.getElementById("thbirth");
thbirth.addEventListener("click", () => {
    sortByColumn("geburtsdatum");
});

const thorigin = document.getElementById("thorigin");
thorigin.addEventListener("click", () => {
    sortByColumn("herkunft");
});

const thweight = document.getElementById("thweight");
thweight.addEventListener("click", () => {
    sortByColumn("gewicht");
});

window.renderPersons = renderPersons;
window.persons = persons;

renderPersons();