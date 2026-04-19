const produkte = [
  { name: "Laptop", preis: 899.99 },
  { name: "Tischlampe", preis: 34.50 },
  { name: "Kopfhörer", preis: 149.00 },
  { name: "Kaffeetasse", preis: 12.90 },
  { name: "Monitor", preis: 459.00 }
];

let ascending = true;

function renderTable() {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  produkte.forEach(p => {
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
  if (ascending) {
    produkte.sort((a, b) => a.preis - b.preis);
  } else {
    produkte.sort((a, b) => b.preis - a.preis);
  }

  ascending = !ascending;
  renderTable();
});

renderTable();

//Eine Variable speichert die Sortierrichtung und wird bei jedem Klick umgeschaltet.
//Ohne Vergleichsfunktion sortiert sort() die Werte als Strings (lexikografisch).
//Das funktioniert hier nicht korrekt, weil Zahlen dann falsch sortiert werden (z. B. 100 < 9).