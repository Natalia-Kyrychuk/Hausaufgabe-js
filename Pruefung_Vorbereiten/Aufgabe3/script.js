const studenten = [
  { name: "Anna", alter: 22, note: 1 },
  { name: "Bernd", alter: 19, note: 4 },
  { name: "Clara", alter: 25, note: 2 },
  { name: "David", alter: 20, note: 5 },
  { name: "Eva", alter: 23, note: 3 },
  { name: "Felix", alter: 21, note: 2 },
  { name: "Greta", alter: 24, note: 1 },
  { name: "Hans", alter: 18, note: 5 }
];

// (a)
const positive = studenten.filter(s => s.note <= 4);

// (b)
const namenMitAlter = studenten.map(s => `${s.name} (${s.alter})`);

// (c)
const durchschnitt =
  studenten.reduce((sum, s) => sum + s.note, 0) / studenten.length;

// (d)
const ergebnis = studenten
  .filter(s => s.alter >= 21)
  .map(s => s.name)
  .join(", ");

// чтобы увидеть результат (не обязательно для экзамена)
console.log("positive:", positive);
console.log("namenMitAlter:", namenMitAlter);
console.log("durchschnitt:", durchschnitt);
console.log("ergebnis:", ergebnis);

//filter() filtert Elemente,
//map() transformiert sie,
//reduce() reduziert sie zu einem Wert.