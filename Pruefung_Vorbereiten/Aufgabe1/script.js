const produkte = [
  { id: 1, name: "Laptop", preis: 899.99, kategorie: "Elektronik" },
  { id: 2, name: "Tischlampe", preis: 34.50, kategorie: "Möbel" },
  { id: 3, name: "Kopfhörer", preis: 149.00, kategorie: "Elektronik" },
  { id: 4, name: "Kaffeetasse", preis: 12.90, kategorie: "Haushalt" },
  { id: 5, name: "Monitor", preis: 459.00, kategorie: "Elektronik" }
];

function renderProducts() {
  const ul = document.querySelector("#product-list");

  produkte.forEach(produkt => {
    const li = document.createElement("li");

    li.textContent = `${produkt.name} (${produkt.kategorie}) – €${produkt.preis.toFixed(2)}`;

    ul.appendChild(li);
  });
}

// ВАЖНО!
renderProducts();
//document.getElementById() sucht ein Element anhand seiner ID und ist sehr schnell, aber nur für IDs geeignet.
//document.querySelector() kann beliebige CSS-Selektoren verwenden (z. B. Klassen, Tags oder IDs) und ist flexibler, aber etwas langsamer.
//getElementById() findet ein Element über seine ID und ist schnell, aber nur für IDs geeignet.
//querySelector() kann beliebige CSS-Selektoren verwenden und ist flexibler, aber etwas langsamer.