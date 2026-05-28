// =============================================
//  CodeQuiz – Fragendatenbank
//  Alle 5 Kategorien mit je 20 Begriffen
// =============================================

const DB = {
  JavaScript: {
    icon: "🟨",
    questions: [
      { term: "variable",   desc: "Ein benannter Speicherplatz, der einen Wert enthält. Man kann ihn mit let, const oder var erstellen." },
      { term: "function",   desc: "Ein wiederverwendbarer Codeblock, der eine bestimmte Aufgabe ausführt und optional einen Wert zurückgibt." },
      { term: "array",      desc: "Eine geordnete Liste von Werten. Man greift mit einem Index darauf zu, z. B. liste[0]." },
      { term: "object",     desc: "Eine Sammlung von Schlüssel-Wert-Paaren, z. B. { name: 'Max', alter: 20 }." },
      { term: "loop",       desc: "Eine Struktur, die einen Codeblock mehrmals wiederholt — z. B. for oder while." },
      { term: "callback",   desc: "Eine Funktion, die als Argument übergeben und zu einem späteren Zeitpunkt aufgerufen wird." },
      { term: "promise",    desc: "Ein Objekt, das einen zukünftigen Wert oder Fehler repräsentiert. Wird für asynchrone Operationen verwendet." },
      { term: "event",      desc: "Eine Aktion des Benutzers oder Browsers, z. B. ein Klick, Tastendruck oder das Laden der Seite." },
      { term: "typeof",     desc: "Ein Operator, der den Datentyp eines Wertes als Zeichenkette zurückgibt, z. B. 'number' oder 'string'." },
      { term: "closure",    desc: "Eine Funktion, die Zugriff auf die Variablen ihrer äußeren Funktion behält — auch nachdem diese beendet ist." },
      { term: "DOM",        desc: "Die Baumstruktur, die das HTML-Dokument repräsentiert und von JavaScript manipuliert werden kann." },
      { term: "JSON",       desc: "Ein lesbares Textformat zum Speichern und Übertragen strukturierter Daten zwischen Server und Client." },
      { term: "scope",      desc: "Der Bereich im Code, in dem eine Variable sichtbar und verwendbar ist." },
      { term: "string",     desc: "Ein Datentyp für Zeichenketten (Text), z. B. 'Hallo Welt'." },
      { term: "boolean",    desc: "Ein Datentyp mit nur zwei möglichen Werten: true (wahr) oder false (falsch)." },
      { term: "const",      desc: "Ein Schlüsselwort zum Deklarieren einer Variablen, deren Referenz nicht neu zugewiesen werden kann." },
      { term: "return",     desc: "Ein Schlüsselwort, das die Ausführung einer Funktion beendet und einen Wert zurückgibt." },
      { term: "class",      desc: "Eine Vorlage für die Erstellung von Objekten mit gemeinsamen Eigenschaften und Methoden." },
      { term: "null",       desc: "Ein spezieller Wert, der absichtlich 'kein Objekt' bedeutet. Er wird explizit vom Entwickler zugewiesen." },
      { term: "undefined",  desc: "Der Standardwert einer Variablen, der noch keinen Wert zugewiesen bekommen hat." },
    ]
  },

  HTML: {
    icon: "🟧",
    questions: [
      { term: "tag",         desc: "Ein Schlüsselwort in spitzen Klammern, das ein HTML-Element definiert, z. B. <p> oder <div>." },
      { term: "attribute",   desc: "Zusätzliche Information innerhalb eines öffnenden Tags, z. B. class, id oder href." },
      { term: "element",     desc: "Ein vollständiger HTML-Baustein: öffnendes Tag, Inhalt und schließendes Tag zusammen." },
      { term: "div",         desc: "Ein generisches Block-Container-Element ohne eigene Bedeutung — wird zum Gruppieren von Inhalten verwendet." },
      { term: "span",        desc: "Ein generisches Inline-Container-Element, das Text oder andere Inline-Elemente umschließt." },
      { term: "href",        desc: "Ein Attribut des Anker-Tags, das die Zieladresse eines Hyperlinks angibt." },
      { term: "src",         desc: "Ein Attribut, das die Quelldatei eines Bildes, Skripts oder iframes angibt." },
      { term: "class",       desc: "Ein Attribut, das einem Element eine oder mehrere CSS-Klassen zuweist." },
      { term: "id",          desc: "Ein Attribut, das einem Element einen eindeutigen Bezeichner zuweist — nur einmal pro Seite." },
      { term: "form",        desc: "Ein HTML-Element, das Eingabefelder sammelt und Daten an einen Server sendet." },
      { term: "input",       desc: "Ein selbstschließendes Element für Benutzereingaben — kann Text, Checkbox, Radio usw. sein." },
      { term: "head",        desc: "Der unsichtbare Bereich eines HTML-Dokuments, der Metadaten, Titel und Verknüpfungen enthält." },
      { term: "body",        desc: "Der sichtbare Bereich eines HTML-Dokuments, der den gesamten angezeigten Inhalt enthält." },
      { term: "alt",         desc: "Ein Attribut für Bilder, das einen alternativen Text anzeigt, wenn das Bild nicht geladen werden kann." },
      { term: "table",       desc: "Ein HTML-Element zur Darstellung von Daten in Zeilen und Spalten." },
      { term: "meta",        desc: "Ein selbstschließendes Tag im head-Bereich, das Metadaten wie Zeichensatz oder Beschreibung speichert." },
      { term: "link",        desc: "Ein Tag im head-Bereich, der externe Ressourcen einbindet — häufig für CSS-Dateien verwendet." },
      { term: "script",      desc: "Ein Tag zum Einbinden oder Schreiben von JavaScript-Code in einem HTML-Dokument." },
      { term: "iframe",      desc: "Ein Element, das eine andere HTML-Seite oder externe Inhalte in die aktuelle Seite einbettet." },
      { term: "placeholder", desc: "Ein Attribut für Eingabefelder, das einen Hinweistext anzeigt, bevor der Benutzer tippt." },
    ]
  },

  CSS: {
    icon: "🟦",
    questions: [
      { term: "selector",    desc: "Ein Muster, das bestimmt, auf welche HTML-Elemente eine CSS-Regel angewendet wird." },
      { term: "property",    desc: "Der Name einer CSS-Eigenschaft, die gestaltet werden soll, z. B. color oder font-size." },
      { term: "value",       desc: "Der konkrete Inhalt einer CSS-Eigenschaft, z. B. red, 16px oder bold." },
      { term: "class",       desc: "Ein wiederverwendbarer Bezeichner, der mit einem Punkt angesprochen wird, z. B. .mein-stil." },
      { term: "id",          desc: "Ein eindeutiger Bezeichner für ein Element, der in CSS mit einer Raute angesprochen wird, z. B. #kopf." },
      { term: "margin",      desc: "Der äußere Abstand eines Elements — der Raum außerhalb des Rahmens zu anderen Elementen." },
      { term: "padding",     desc: "Der innere Abstand eines Elements — der Raum zwischen Inhalt und Rahmen." },
      { term: "border",      desc: "Die Linie, die um ein Element gezeichnet wird. Man kann Breite, Stil und Farbe festlegen." },
      { term: "flexbox",     desc: "Ein CSS-Layoutmodell, das Elemente in einer Zeile oder Spalte flexibel anordnet." },
      { term: "grid",        desc: "Ein zweidimensionales CSS-Layoutsystem mit Zeilen und Spalten." },
      { term: "display",     desc: "Eine Eigenschaft, die bestimmt, wie ein Element dargestellt wird, z. B. block, inline oder flex." },
      { term: "position",    desc: "Eine Eigenschaft, die die Positionierungsmethode eines Elements festlegt — static, relative, absolute, fixed." },
      { term: "z-index",     desc: "Eine Eigenschaft, die die Stapelreihenfolge überlagernder Elemente entlang der Z-Achse steuert." },
      { term: "opacity",     desc: "Eine Eigenschaft, die die Transparenz eines Elements von 0 (unsichtbar) bis 1 (vollständig sichtbar) festlegt." },
      { term: "overflow",    desc: "Eine Eigenschaft, die bestimmt, was passiert, wenn der Inhalt eines Elements seinen Container übersteigt." },
      { term: "transition",  desc: "Eine Eigenschaft, die eine sanfte Animation zwischen zwei CSS-Zuständen erzeugt." },
      { term: "animation",   desc: "Eine Eigenschaft, die komplexe Bewegungsabläufe mit Schlüsselbildern (keyframes) definiert." },
      { term: "inherit",     desc: "Ein CSS-Wert, der angibt, dass eine Eigenschaft den Wert vom Elternelement übernehmen soll." },
      { term: "media query", desc: "Eine Technik, die CSS-Regeln je nach Bildschirmgröße oder Gerät anwendet — Grundlage für responsives Design." },
      { term: "pseudo-class",desc: "Ein Selektor, der den Zustand eines Elements anspricht, z. B. :hover, :focus oder :nth-child." },
    ]
  },

  Python: {
    icon: "🐍",
    questions: [
      { term: "list",          desc: "Eine geordnete, veränderbare Sammlung von Elementen, z. B. [1, 2, 3]. Elemente können hinzugefügt oder entfernt werden." },
      { term: "tuple",         desc: "Eine geordnete, unveränderbare Sammlung von Elementen, z. B. (1, 2, 3). Einmal erstellt, kann sie nicht geändert werden." },
      { term: "dictionary",    desc: "Eine Sammlung von Schlüssel-Wert-Paaren, z. B. {'name': 'Max'}. Der Zugriff erfolgt über den Schlüssel." },
      { term: "set",           desc: "Eine ungeordnete Sammlung eindeutiger Werte — doppelte Elemente werden automatisch entfernt." },
      { term: "function",      desc: "Ein benannter Codeblock, der mit def definiert wird und eine bestimmte Aufgabe ausführt." },
      { term: "class",         desc: "Eine Vorlage für Objekte, die Attribute und Methoden zusammenfasst. Wird mit class definiert." },
      { term: "loop",          desc: "Eine Struktur, die Code wiederholt — in Python gibt es for und while Schleifen." },
      { term: "import",        desc: "Ein Schlüsselwort, das ein Modul oder eine Bibliothek in das aktuelle Skript lädt." },
      { term: "lambda",        desc: "Eine anonyme, einzeilige Funktion, die ohne def-Schlüsselwort geschrieben wird." },
      { term: "exception",     desc: "Ein Fehler, der während der Ausführung auftritt. Er kann mit try/except abgefangen werden." },
      { term: "decorator",     desc: "Eine Funktion, die eine andere Funktion modifiziert oder erweitert — erkennbar am @-Symbol." },
      { term: "generator",     desc: "Eine Funktion, die mit yield Werte nacheinander erzeugt, ohne alle auf einmal im Speicher zu halten." },
      { term: "comprehension", desc: "Eine kompakte Schreibweise zur Erstellung von Listen in einer Zeile, z. B. [x*2 for x in range(5)]." },
      { term: "inheritance",   desc: "Ein OOP-Konzept, bei dem eine Klasse Eigenschaften und Methoden einer anderen Klasse übernimmt." },
      { term: "module",        desc: "Eine Python-Datei, die Funktionen, Klassen und Variablen enthält und importiert werden kann." },
      { term: "slice",         desc: "Eine Methode, um Teile einer Liste oder eines Strings zu extrahieren, z. B. liste[1:4]." },
      { term: "None",          desc: "Ein spezieller Wert in Python, der das Fehlen eines Wertes darstellt — ähnlich wie null in anderen Sprachen." },
      { term: "indentation",   desc: "Das Einrücken von Codezeilen mit Leerzeichen, das in Python die Struktur von Blöcken definiert." },
      { term: "recursion",     desc: "Eine Technik, bei der eine Funktion sich selbst aufruft, um ein Problem schrittweise zu lösen." },
      { term: "iterator",      desc: "Ein Objekt, das eine Folge von Werten nacheinander liefert und die Methoden __iter__ und __next__ hat." },
    ]
  },

  Java: {
    icon: "☕",
    questions: [
      { term: "class",         desc: "Die grundlegende Baueinheit in Java — eine Vorlage, die Daten (Felder) und Verhalten (Methoden) definiert." },
      { term: "object",        desc: "Eine konkrete Instanz einer Klasse, die im Speicher erstellt wird und eigene Zustandswerte hat." },
      { term: "method",        desc: "Ein benannter Codeblock innerhalb einer Klasse, der eine bestimmte Aktion ausführt und aufgerufen werden kann." },
      { term: "interface",     desc: "Ein Vertrag, der Methoden vorgibt, die eine Klasse implementieren muss — ohne eigene Implementierung." },
      { term: "inheritance",   desc: "Ein Konzept, bei dem eine Klasse mit extends die Eigenschaften und Methoden einer anderen Klasse erbt." },
      { term: "constructor",   desc: "Eine spezielle Methode, die beim Erstellen eines Objekts aufgerufen wird und es initialisiert." },
      { term: "exception",     desc: "Ein Fehler, der zur Laufzeit auftritt und mit try-catch-finally behandelt werden kann." },
      { term: "abstract",      desc: "Ein Schlüsselwort, das eine Klasse oder Methode als unvollständig markiert — sie muss in Unterklassen implementiert werden." },
      { term: "static",        desc: "Ein Schlüsselwort, das angibt, dass ein Feld oder eine Methode zur Klasse selbst gehört — nicht zu einer Instanz." },
      { term: "void",          desc: "Der Rückgabetyp einer Methode, die keinen Wert zurückgibt." },
      { term: "ArrayList",     desc: "Eine dynamische Liste in Java (aus java.util), die Elemente speichert und automatisch wächst." },
      { term: "HashMap",       desc: "Eine Datenstruktur, die Schlüssel-Wert-Paare speichert und schnellen Zugriff über den Schlüssel ermöglicht." },
      { term: "polymorphism",  desc: "Die Fähigkeit, dass eine Methode je nach Objekttyp unterschiedliches Verhalten zeigt." },
      { term: "encapsulation", desc: "Das Verstecken von Implementierungsdetails durch private Felder und öffentliche Getter/Setter." },
      { term: "overriding",    desc: "Das Neudefinieren einer geerbten Methode in einer Unterklasse mit @Override." },
      { term: "overloading",   desc: "Das Definieren mehrerer Methoden gleichen Namens, aber unterschiedlicher Parameter in derselben Klasse." },
      { term: "package",       desc: "Eine Gruppe zusammengehöriger Klassen und Interfaces, ähnlich wie ein Ordner im Dateisystem." },
      { term: "final",         desc: "Ein Schlüsselwort, das eine Variable, Methode oder Klasse als unveränderlich oder nicht überschreibbar markiert." },
      { term: "generics",      desc: "Ein Mechanismus, der typsichere Datenstrukturen ermöglicht, z. B. List<String> oder Map<Integer, String>." },
      { term: "stream",        desc: "Eine Abstraktion aus Java 8, die funktionale Operationen wie filter, map und reduce auf Sammlungen ermöglicht." },
    ]
  }
};
