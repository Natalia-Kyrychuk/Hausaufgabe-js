const produkte = [
    { name: "Laptop", preis: 899.99 },
    { name: "Tischlampe", preis: 34.50 },
    { name: "Kopfhörer", preis: 149.00 },
    { name: "Kaffeetasse", preis: 12.90 },
    { name: "Monitor", preis: 459.00 },
];

function
    renderTable() {

    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    produkte.forEach((p) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = p.name;
        const td2 = document.createElement("td");

        td2.textContent = p.preis.toFixed(2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });
}

document.querySelector("#thpreis").addEventListener("click", () => {
    produkte.sort((a, b) => a.preis - b.preis);
    renderTable();
});
renderTable();


//Die Produkte werden immer aufsteigend sortiert, da die Sortierrichtung nicht umgeschaltet wird.
//Ohne Vergleichsfunktion sortiert sort() die Werte als Strings (lexikografisch).


