const produkt = {
  name: "Mechanische Tastatur",
  preis: 89.90,
  aufLager: true,
  kategorie: "Elektronik"
};

// 1. In JSON umwandeln für die Übertragung
const jsonStr = JSON.stringify(produkt);

// 2. Simulierter Empfang auf der Gegenseite
const empfangen = JSON.parse(jsonStr);

// 3. Preis aktualisieren
empfangen.preis = 79.90;

// 4. Ausgabe mit Template String
console.log(`Artikel: ${empfangen.name} – Preis: €${empfangen.preis}`);

// 5. Prüfen, ob auf Lager
if (empfangen.aufLager) {
  console.log("Produkt ist verfügbar!");
}

//Artikel: Mechanische Tastatur – Preis: €79.9
//Produkt ist verfügbar!
/*
Der Vergleich empfangen.aufLager == "true" ist problematisch, weil hier ein Boolean mit einem String verglichen wird.
Nach JSON.parse() hat empfangen.aufLager den Wert true und den Typ boolean.
Der String "true" hat dagegen den Typ string.

Auch wenn == eine lose Vergleichsoperation ist, wird true nicht automatisch zu "true" umgewandelt.
Deshalb ist dieser Vergleich falsch bzw. unzuverlässig.

Richtig wäre zum Beispiel:

if (empfangen.aufLager) { ... }
oder
if (empfangen.aufLager === true) { ... }
*/