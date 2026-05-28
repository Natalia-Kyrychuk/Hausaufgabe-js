const produkte = [
  { name: "Laptop", preis: 899.99, kategorie: "Elektronik" },
  { name: "Tischlampe", preis: 34.50, kategorie: "Möbel" },
  { name: "Kopfhörer", preis: 149.00, kategorie: "Elektronik" },
  { name: "Kaffeemaschine", preis: 219.00, kategorie: "Haushalt" },
  { name: "Monitor", preis: 459.00, kategorie: "Elektronik" },
  { name: "Schreibtisch", preis: 289.00, kategorie: "Möbel" },
  { name: "Kaffeetasse", preis: 12.90, kategorie: "Haushalt" }
];

// (a)
function renderResults(liste) {
  const container = document.querySelector("#results");

  container.innerHTML = ""; // очистка

  liste.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.textContent = `${p.name} – €${p.preis.toFixed(2)} [${p.kategorie}]`;

    container.appendChild(div);
  });
}

// (b)
function searchProducts() {
  const value = document.querySelector("#search").value.toLowerCase();

  const filtered = produkte.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderResults(filtered);
}

// (c)
document.querySelector("#search").addEventListener("input", searchProducts);

// (d)
renderResults(produkte);


/*renderResults erstellt div-Elemente und zeigt Produkte an.
searchProducts liest den Input, filtert mit includes() und übergibt an renderResults.
Ein input-Event sorgt für Live-Update.*/
