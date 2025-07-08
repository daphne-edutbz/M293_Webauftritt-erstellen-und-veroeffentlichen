# M293_Webauftritt-erstellen-und-veroeffentlichen


## Projektauftrag 3
### Webshop mit KI-gestützter Webentwicklung


### 1. Einleitung
Im Rahmen dieses Projekts habe ich mithilfe verschiedener KI-gestützter Tools (GitHub Copilot, Windsurf, ChatGPT) eine mehrseitige Webshop-Webseite entwickelt. Ziel war es, den Entwicklungsprozess durch KI zu beschleunigen und die Qualität der generierten Codes zu vergleichen. Dabei wurden HTML und CSS ohne Frameworks verwendet, um die Grundlagen der Webentwicklung besser zu verstehen und Kontrolle über das Design zu behalten.


### 2. Einsatzbereiche der KI
Die KI-Tools kamen bei folgenden Arbeitsschritten zum Einsatz:
- Code-Generierung: Erstellung von HTML- und CSS-Strukturen für Startseite, Produktübersichtsseite, Produktdetailseite und Kontaktseite
- Responsives Design: Umsetzung responsiver Layouts für verschiedene Endgeräte (Mobile, Tablet, Desktop)
- Funktionale Features: Umsetzung von Produktfiltern, Bestellformularen, Newsletter-Anmeldung und Navigation
- Designanpassungen: Auswahl des optisch und funktional besten Codes unter den generierten Varianten
- Automatisches Datei-Handling: Windsurf unterstützte das automatische Erstellen von Dateien, Copilot und ChatGPT lieferten Code-Snippets, die manuell eingefügt werden mussten



#### 2.1 Vorgehen
Für jeden Entwicklungsschritt habe ich einen spezifischen Prompt formuliert und diesen nacheinander in den KI-Tools GitHub Copilot (Visual Studio Code), Windsurf und ChatGPT eingegeben. Anschliessend habe ich die generierten Codes verglichen und bewertet, um den für mich besten, effizientesten und passendsten Code auszuwählen und in das Projekt einzufügen.


#### Wireframe
https://www.figma.com/design/VjMLJ8TG4NhBFMmIYHK4Wb/Low-fi-Wireframe-Template--Community-?node-id=123-0&t=sSq4kI0vncUQFfoA-1

![image](https://github.com/user-attachments/assets/f3e35541-0681-40d8-8298-4471496913d6)

![image](https://github.com/user-attachments/assets/314a7e77-b208-407a-86f7-a35ad78a86ee)



### 3. Prompts und Ergebnisse

#### 3.1 Startseite

**Prompt:**
> Erzeuge mir HTML und CSS (ohne Frameworks) für eine Startseite eines Webshops.
> Die Seite soll folgendes enthalten:
> - Header mit Logo und Navigation
> - Abschnitt mit neuen oder beliebten Produkten im Grid (3–4 Karten mit Bild, Titel, Preis, Button)
> - Übersicht aller Produktkategorien als Liste oder Grid
> - Newsletter-Anmeldung mit Formular (E-Mail-Feld und Button)
> - Footer mit Links und Copyright
> - Alles soll responsiv für Mobile, Tablet und Desktop sein

**Ergebnisse:**

Bei diesem Vergleich habe ich drei Tools ausprobiert, um eine Startseite für einen Webshop mit HTML und CSS (ohne Frameworks) zu generieren. Dabei fiel auf:



Copilot (in VSC): 
- Sehr schnell.
- Generiert einfach den kompletten Code zum Kopieren, ohne Erklärungen.
- Praktisch, aber weniger interaktiv.
- Das Design ist solide und erfüllt alle Punkte aus dem Prompt, wirkte aber etwas generisch.

Copilot in Visual Studio Code war das schnellste Tool. Es generiert den Code sofort, aber ohne Erklärung. Ich musste alles selbst kopieren und in eigene Dateien einfügen. Das Ergebnis erfüllt die Kriterien aus dem Prompt sehr gut und wirkt professionell, aber etwas generisch. Positiv fand ich, dass es einfach und direkt ist.

![image](https://github.com/user-attachments/assets/c3bef029-9e30-4911-8ced-5c823857b4ce)
(Copilot)


Windsurf (Cascade): 
- Braucht etwas länger, fügt den Code aber direkt ins Projekt ein, deutlich komfortabler.
- Ausserdem erklärt Windsurf auch, was gemacht wird.
- Das Ergebnis hat mir persönlich am besten gefallen, weil es meinem Wireframe am ähnlichsten war und insgesamt moderner wirkt.

Windsurf (Cascade) brauchte etwas länger, hat aber den Vorteil, dass es den Code direkt ins Projekt einfügt. Das spart Arbeitsschritte und ist komfortabler. Ausserdem liefert Windsurf eine verständliche Erklärung dazu. Optisch war das Ergebnis für mich am ansprechendsten und entsprach am ehesten meinem Wireframe. Das Design wirkte moderner und strukturierter.

![image](https://github.com/user-attachments/assets/7b37e04c-a335-4737-a33a-48bec3150ec5)
(Windsurf)
  

ChatGPT: 
- Schnelle Antwort und klar getrenntes HTML und CSS.
- Enthält am meisten Features, aber das Design passt weniger gut zu meinem Wireframe.
- Ausserdem muss man die Dateien komplett selbst erstellen und einfügen.

ChatGPT war ebenfalls sehr schnell und gab als einziges Tool HTML und CSS getrennt aus. Der Code war vollständig und enthielt viele Details, die über die Mindestanforderungen hinausgingen. Allerdings passte das Styling weniger gut zu meiner Vorstellung, sodass ich mehr anpassen müsste. Ausserdem muss man alles manuell einfügen.

![image](https://github.com/user-attachments/assets/32b8588a-f8e6-40fb-94ac-b7ace11edb22)
(ChatGPT)


Mein persönliches Fazit: Alle drei Tools erfüllen den Prompt, aber in unterschiedlichen Qualitäten. Copilot ist am direktesten und schnellsten. ChatGPT liefert viel und sauber strukturiert, aber für meinen Wireframe weniger passend. Windsurf hat mir am besten gefallen wegen der Integration in die IDE, der Erklärungen und des Designs, das am ehesten meiner Idee entsprach.

Code Windsurf:
```html

```



#### 3.2 Produktübersichtsseite

**Prompt:**
> Erzeuge mir HTML und CSS (ohne Frameworks) für eine Produktübersichtsseite eines Webshops.
> Die Seite soll folgendes enthalten:
> - Header mit Logo und Navigation
> - Grid mit mindestens 10 Produkten (Bild, Titel, Preis, Button)
> - Möglichkeit zur Filterung nach Kategorien (z. B. Dropdown oder Linkliste)
> - Footer mit Links und Copyright
> - Alles soll responsiv für Mobile, Tablet und Desktop sein.

**Ergebnisse:**
Auch für die Produktübersichtsseite habe ich alle drei Tools getestet. Hier waren besonders die Filterfunktion und das responsive Grid entscheidend. Es zeigten sich erneut klare Unterschiede:

**Copilot (in VSC):**
- Sehr schnelle Code-Generierung, aber wie zuvor muss man selbst ein neues File erstellen und den Code einfügen.
- Das Layout erfüllt alle Anforderungen: 10 Produkte mit Platzhalterbildern, ein funktionierender Kategorie-Filter (als Dropdown), und ein Footer.
- Die Seite wirkt solide und gut strukturiert, wenn auch visuell nicht ganz mein Stil.
- Responsivität war hier am besten umgesetzt – besonders auf Tablet und Mobile sah es aufgeräumt aus.
- Allerdings: Die Navigation funktioniert nicht vollständig – es gibt keinen funktionierenden Link von der Startseite zur Produktübersicht.


**Windsurf (Cascade):**
- Hat das neue HTML-File direkt erstellt, was grundsätzlich praktisch ist – allerdings wurde es erneut als „index.html“ benannt, was Konflikte verursachte.
- Das Design war wieder modern, aber diesmal gab es Probleme: Die CSS-Datei wurde nicht korrekt eingebunden und die Filterfunktion war zwar sichtbar, funktionierte aber nicht.
- Auch hier: 10 Produkte im Grid, 4 Filterkategorien, Bilder als Platzhalter.
- Die Seite ist responsiv, aber etwas weniger übersichtlich als bei Copilot.


**ChatGPT:**
- Erzeugt sauberen HTML- und CSS-Code, aber schlägt eine zusätzliche CSS-Datei („produkte.css“) vor – das kann sinnvoll sein, aber bei vielen Seiten schnell unübersichtlich werden.
- 10 Produkte im Grid, Platzhalterbilder, 4 Kategorien, aber die Filterfunktion war nicht funktionsfähig.
- Die Seite ist responsive, allerdings nicht direkt mit der Startseite verbunden – Navigation muss manuell ergänzt werden.
- Insgesamt liefert ChatGPT eine gute und vollständige Vorlage, aber ohne direkte Verlinkungen oder dynamische Filterfunktion.


**Mein persönliches Fazit:**
Copilot hat in diesem Fall am besten abgeschnitten. Die Filterfunktion funktioniert, das Design ist sauber und responsive, und alle geforderten Inhalte sind korrekt umgesetzt. Windsurf hatte wieder ein ansprechendes Design, aber technische Schwächen. ChatGPT bietet strukturierten Code mit vielen Details, allerdings ohne funktionierenden Filter und mit etwas höherem manuellen Aufwand.


Code Copilot:
```html

```




#### 3.3 Produktdetailseite


**Prompt:**
> Erzeuge mir HTML und CSS (ohne Frameworks) für eine Produkt-Detailseite eines Webshops.
> Die Seite soll folgendes enthalten:
> - Header mit Logo und Navigation
> - Produktbild (gross) und Galerie mit 2–3 zusätzlichen Bildern
> - Beschreibungstext mit Titel, Preis, ausführlicher Beschreibung
> - Video-Embed (optional)
> - Bestellformular mit Feldern für Name, Adresse, Menge, Kommentar, Bestellbutton
> - Footer mit Links und Copyright
> - Alles soll responsiv für Mobile, Tablet und Desktop sein.


**Ergebnisse:**
Auch hier habe ich die drei Tools ausprobiert und dabei die Unterschiede dokumentiert. Das Ergebnis fiel ähnlich aus wie bei der Startseite, aber mit anderen Stärken und Schwächen:

**Copilot (in VSC):**
- Sehr schnell und direkt.
- Generiert kompletten HTML/CSS-Code sofort.
- Produktbild, Galerie und Beschreibung sind vorhanden, aber das Video ist nicht sauber embedded – stattdessen führt ein Klick zu einem YouTube-Video (Lied von Ed Sheeran-Link)
- Das Bestellformular erfüllt die Anforderungen, aber die Felder sind eher minimal gestaltet.
- Man muss die Dateien selbst anlegen und den Code einfügen.

Copilot war auch hier das schnellste Tool, aber das Design wirkte etwas generisch und hatte beim Video-Embed kleine Schwächen. Für schnelle Ergebnisse ohne viel Interaktion ist es aber nützlich.


**Windsurf (Cascade):**
- Braucht etwas länger, fügt den Code aber direkt in das Projekt ein.
- Erstellt automatisch eine separate CSS-Datei (z. B. product-detail.css).
- Hat eine bessere Navigation zwischen Startseite und Produktdetailseite.
- Produktbilder inkl. Galerie sind vorhanden und sauber gelöst.
- Ein Video ist embedded (Never gonna give you up- Rick Astley?)
- Bestellformular ist optisch strukturierter und enthält mehr Validierung.

Windsurf hat hier einen echten Vorteil durch die bessere IDE-Integration und die sauberere Umsetzung. Das Design war moderner und die Features wirkten konsistenter und durchdachter.

ChatGPT:
- Sehr schnelle und umfangreiche Antwort.
- HTML und CSS sind sauber getrennt und gut kommentiert.
- Enthält alle geforderten Elemente inkl. responsivem Layout.
- Das Design ist solide, enthält viele Details, aber passt nicht immer 1:1 zu meinem Wireframe.
- Das Bestellformular und die Galerie sind gut umgesetzt, das Video sauber eingebettet.
- Dateien müssen komplett manuell angelegt werden.

ChatGPT liefert hier den umfangreichsten und detailliertesten Code, der alle Features enthält. Das ist super für volle Kontrolle und Verständnis – aber erfordert auch etwas mehr Arbeit beim Einfügen ins eigene Projekt.

Mein persönliches Fazit:
Alle drei Tools erfüllen den Prompt, aber mit unterschiedlichen Stärken. Copilot ist am direktesten und spart Zeit, wirkt aber weniger durchdesignt. ChatGPT liefert am meisten Features und saubere Struktur, erfordert aber Handarbeit. Windsurf war mein Favorit, weil es das Design moderner und strukturierter umsetzt, direkt in der IDE integriert ist und auch Navigation, Galerie und Formular besonders gut abbildet.

Code Windsurf:
```html

```




#### 3.4 Kontaktseite


**Prompt:**
> Erzeuge mir HTML und CSS (ohne Frameworks) für eine Kontaktseite eines Webshops.
> Die Seite soll folgendes enthalten:
> - Header mit Logo und Navigation
> - Abschnitt mit Teaminformationen (Bild, Name, Rolle, kurze Bio für 2–3 Personen)
> - Kontaktformular mit Feldern für Name, E-Mail, Nachricht und einem Dropdown für Betreffzeile (z. B. Support, Bestellung, Feedback)
> - Footer mit Links und Copyright
> - Alles soll responsiv für Mobile, Tablet und Desktop sein.


**Ergebnisse:**
Auch hier habe ich zwei Tools ausprobiert, um eine Kontaktseite für einen Webshop mit HTML und CSS (ohne Frameworks) zu generieren. Dabei fiel auf:

**Copilot (in VSC):**
- Sehr schnell und liefert kompletten HTML/CSS-Code direkt in der IDE.
- Enthält eine gut designte Team-Sektion mit echten Beispielbildern (randomuser.me), Rollen und Bio.
- Das Kontaktformular ist gut strukturiert mit Labels, E-Mail-Validierung und einem Dropdown für den Betreff.
- Das Responsive-Design wirkte insgesamt sehr stabil, mit klar definierten Media-Queries.
- Allerdings muss man alles selbst kopieren und speichern (keine zusätzliche Erklärung oder Aufteilung in Dateien)

![image](https://github.com/user-attachments/assets/98c826fb-adc4-4627-9ad4-71eb35223361)


Copilot in Visual Studio Code war wieder das schnellste Tool. Es generierte eine vollständige HTML-Datei mit eingebettetem CSS. Besonders gefallen hat mir die optisch ansprechende Team-Sektion mit Bildern und die saubere Struktur des Formulars. Das Design ist modern und responsiv, aber man muss es komplett selbst verwalten und anpassen.


**Windsurf (Cascade):**
- Generiert etwas langsamer, dafür sauber getrennt in HTML und CSS (z. B. contact.css).
- Team-Sektion mit Platzhalter-Bildern, Beispielnamen, Rollen und kurzen Bios.
- Kontaktformular mit allen geforderten Feldern inklusive Dropdown und E-Mail-Validierung.
- Fügt den Code direkt ins Projekt ein -> deutlich komfortabler.
- Ausserdem erklärt Windsurf auch, was gemacht wird, und bietet eine bessere Integration in die IDE.

![image](https://github.com/user-attachments/assets/60116e6c-3400-4583-b189-e9373316bcb2)


Das Ergebnis von Windsurf hat mir gut gefallen, weil es übersichtlicher strukturiert war und direkt in mein Projekt eingefügt wurde. Die Team-Sektion nutzte Platzhalter, war aber sehr klar aufgebaut. Das Design wirkte insgesamt etwas simpler, aber leicht anpassbar. Die Responsivität war ebenfalls gut umgesetzt, aber etwas weniger ausgefeilt als bei Copilot.

**Mein persönliches Fazit:**
Beide Tools haben den Prompt sauber erfüllt. Copilot war schneller und erzeugte sofort ein schlüssiges Design mit Bildern und guter Responsivität. Windsurf war etwas langsamer, bot aber eine bessere IDE-Integration und trennte HTML und CSS sauber. Für meine eigenen Bedürfnisse gefiel mir das Windsurf-Ergebnis besser, weil es einfacher ins Projekt eingebunden werden konnte und klarer dokumentiert war. Allerdings fand ich das Responsive-Design von Copilot minimal besser umgesetzt.

Code Windsurf:
```html

```


### 4. Vergleich der KIs
Alle drei Tools (opilot, Windsurf und ChatGPT) haben ihre Stärken und Schwächen, die sich in den unterschiedlichen Seiten meines Projekts gezeigt haben.

**Copilot:**
- Am schnellsten in der Generierung: Code erscheint direkt in VS Code ohne weitere Nachfragen.
- Besonders stark für schnelle Grundgerüste und saubere, responsive Layouts (z. B. Produktübersicht).
- Wenig Erklärungen oder Aufteilung in Dateien, daher muss man alles selbst einfügen und organisieren.
- Das Design wirkte insgesamt solide, aber etwas generisch – dafür technisch gut umgesetzt.
  
Für mich war Copilot die beste Wahl bei Seiten, die möglichst schnell stehen sollten und nicht viel individuelles Styling brauchten.


**Windsurf (Cascade):**
- Braucht länger, aber hat den besten IDE-Workflow: Code wird direkt ins Projekt geschrieben, inklusive automatischem Anlegen von Dateien.
- Gibt Erklärungen und Hinweise dazu, was erzeugt wurde – sehr hilfreich für das Verständnis.
- Das Design gefiel mir meistens am besten: Es war moderner, strukturierter und entsprach eher meinen Wireframes.
- Manchmal kleinere Bugs (z. B. CSS-Link vergessen), aber insgesamt die komfortabelste Lösung.

Windsurf war für mich das beste Tool, wenn ich Wert auf ein konsistentes, modernes Design und weniger manuelle Arbeit beim Einfügen legen wollte.

**ChatGPT**
- Sehr schnell und gibt oft die umfangreichsten und detailliertesten Antworten.
- Trennt HTML und CSS sauber, liefert klare Kommentare und viele Features.
- Super, wenn man den Code verstehen und selbst anpassen will oder wenn man einfkach Kleinigkeiten verbessern/korrigieren will
- Allerdings muss alles manuell in Dateien übertragen werden.
- Das Design war funktional, aber oft weniger an meinen Wireframes orientiert.

ChatGPT war für mich am nützlichsten, wenn ich neue Ideen brauchte oder verstehen wollte, wie etwas funktioniert.

Fazit:
Alle drei Tools sind in der Lage, komplette Webseiten-Seiten zu generieren, aber sie haben unterschiedliche Zielgruppen und Workflows:
- Für schnelles, einfaches und sauberes Grundgerüst → Copilot
- Für durchdachtes Design mit IDE-Integration → Windsurf (mein Favorit)
- Für Lernen, Verstehen und Anpassen → ChatGPT


### 5. Learnings
Während der Arbeit an diesem Projekt habe ich viel über den Einsatz von KI-Tools für Webentwicklung gelernt:
- Prompt Engineering ist entscheidend. Die Qualität der Ergebnisse hängt stark davon ab, wie präzise und detailliert die Prompts formuliert sind. Ich habe gelernt, meine Prompts so anzupassen, dass sie meine Wireframes und Designideen besser abbilden.
- Tool-Vergleich lohnt sich. Unterschiedliche Tools haben unterschiedliche Stärken: Copilot ist sehr schnell und direkt, Windsurf bietet bessere IDE-Integration und ChatGPT liefert am meisten Kontext und Erklärungen.
- Manuelle Arbeit bleibt nötig. Auch mit KI muss man viel manuell nacharbeiten, z. B. beim Einfügen in Dateien, beim Anpassen des Designs an die eigenen Vorstellungen oder beim Verbinden der Seiten.
- Code-Qualität verstehen. Ich habe gelernt, die generierten Codes zu lesen und zu verstehen, um die besten Teile zu übernehmen und Schwächen (z. B. unvollständige Filter) zu verbessern.
- Fehlerquellen erkennen. Die KI macht manchmal Vorschläge, die nicht vollständig korrekt sind (z. B. fehlende Links zwischen Seiten oder falsche Dateinamen). Das Testen und Korrigieren ist wichtig.
- Zeitersparnis mit Grenzen. Insgesamt spart KI viel Zeit, vor allem beim Erzeugen von Grundgerüsten. Für das Feintuning und die Integration muss man aber selbst verantwortlich bleiben.



