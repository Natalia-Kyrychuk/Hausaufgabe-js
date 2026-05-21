# CodeQuiz – Projektdokumentation

## Projektbeschreibung

**CodeQuiz** ist ein interaktives Web-Quiz zum Lernen von Programmierbegriffen.
Der Spieler liest eine deutsche Beschreibung und muss den richtigen englischen Fachbegriff erraten.

---

## Technologien

| Datei / Ordner     | Beschreibung                              |
|--------------------|-------------------------------------------|
| `index.html`       | Hauptdatei – Struktur der Webseite        |
| `css/style.css`    | Design und Layout (CSS)                   |
| `js/data.js`       | Alle Fragen und Kategorien (Datenbank)    |
| `js/quiz.js`       | Spiellogik (JavaScript)                   |

---

## Kategorien & Umfang

Das Quiz enthält **5 Kategorien** mit je **20 Begriffen** (100 Fragen insgesamt):

- 🟨 **JavaScript** – Variablen, Funktionen, DOM, Closures …
- 🟧 **HTML** – Tags, Attribute, Formulare, Struktur …
- 🟦 **CSS** – Selektoren, Flexbox, Grid, Animationen …
- 🐍 **Python** – Listen, Klassen, Decorators, Generatoren …
- ☕ **Java** – OOP, Interfaces, Generics, Streams …

---

## Spielmechanik

1. Spieler wählt eine oder mehrere Kategorien
2. Das Quiz wählt 15 zufällige Fragen aus
3. Zu jedem Begriff wird eine deutsche Beschreibung angezeigt
4. Der erste Buchstabe ist sichtbar; weitere können per **Hinweis**-Button aufgedeckt werden
5. Der Spieler tippt den englischen Begriff und drückt **Prüfen** oder **Enter**
6. Am Ende erscheint eine Auswertung mit Prozentanzeige

---

## Starten

Die Datei `index.html` im Browser öffnen — fertig.
Keine Installation, kein Server notwendig.

---

## Lernziel

Dieses Projekt wurde im Rahmen des Informatik-Unterrichts erstellt.
Es demonstriert den Einsatz von HTML, CSS und JavaScript zur Entwicklung
einer interaktiven Webanwendung.
