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
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webshop - Startseite</title>
    <style>
        /* Allgemeine Einstellungen */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Header */
        header {
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 1rem 2rem;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2c3e50;
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        nav a {
            text-decoration: none;
            color: #34495e;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #3498db;
        }

        /* Hauptinhalt */
        main {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Hero-Bereich */
        .hero {
            text-align: center;
            padding: 4rem 0;
            background-color: #f5f5f5;
        }
        .hero h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        .hero p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 2rem;
        }

        /* Produkt-Grid */
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            padding: 2rem 0;
        }
        .product-card {
            background: #fff;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
        }
        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
        .product-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        .product-price {
            color: #e74c3c;
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        .add-to-cart {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s ease;
        }
        .add-to-cart:hover {
            background-color: #2980b9;
        }

        /* Kategorien-Grid */
        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            padding: 2rem 0;
        }
        .category-card {
            background: #fff;
            border-radius: 8px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .category-card:hover {
            transform: translateY(-3px);
        }
        .category-icon {
            font-size: 2rem;
            color: #3498db;
            margin-bottom: 1rem;
        }
        .category-title {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        .category-description {
            color: #666;
            font-size: 0.9rem;
        }

        /* Newsletter-Formular */
        .newsletter {
            background-color: #f5f5f5;
            padding: 4rem 2rem;
            text-align: center;
        }
        .newsletter h2 {
            color: #2c3e50;
            margin-bottom: 2rem;
        }
        .newsletter-form {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .newsletter-form input {
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        .newsletter-form button {
            background-color: #3498db;
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .newsletter-form button:hover {
            background-color: #2980b9;
        }

        /* Footer */
        footer {
            background-color: #2c3e50;
            color: #fff;
            padding: 3rem 2rem;
            margin-top: 4rem;
        }
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        .footer-section h3 {
            margin-bottom: 1rem;
        }
        .footer-section ul {
            list-style: none;
        }
        .footer-section ul li {
            margin-bottom: 0.5rem;
        }
        .footer-section a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .footer-section a:hover {
            color: #3498db;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
            .hero h1 {
                font-size: 2rem;
            }
            .newsletter-form {
                flex-direction: column;
            }
            .newsletter-form input {
                width: 100%;
            }
            .footer-content {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.5rem;
            }
            .product-grid {
                grid-template-columns: 1fr;
            }
            .categories {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">WebShop</div>
            <ul>
                <li><a href="#">Startseite</a></li>
                <li><a href="#">Produkte</a></li>
                <li><a href="#">Kategorien</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero-Bereich -->
        <section class="hero">
            <h1>Willkommen bei unserem Webshop</h1>
            <p>Entdecken Sie unsere Auswahl an hochwertigen Produkten</p>
        </section>

        <!-- Beliebte Produkte -->
        <section class="featured-products">
            <h2>Beliebte Produkte</h2>
            <div class="product-grid">
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x300" alt="Produkt 1" class="product-image">
                    <h3 class="product-title">Premium Smartphone</h3>
                    <p class="product-price">999,99€</p>
                    <button class="add-to-cart">In den Warenkorb</button>
                </div>
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x300" alt="Produkt 2" class="product-image">
                    <h3 class="product-title">Fitness-Shirt</h3>
                    <p class="product-price">29,99€</p>
                    <button class="add-to-cart">In den Warenkorb</button>
                </div>
                <div class="product-card">
                    <img src="https://via.placeholder.com/400x300" alt="Produkt 3" class="product-image">
                    <h3 class="product-title">Kochtopf Set</h3>
                    <p class="product-price">149,99€</p>
                    <button class="add-to-cart">In den Warenkorb</button>
                </div>
            </div>
        </section>

        <!-- Produktkategorien -->
        <section class="categories">
            <h2>Unsere Kategorien</h2>
            <div class="category-cards">
                <div class="category-card">
                    <div class="category-icon">📱</div>
                    <h3 class="category-title">Elektronik</h3>
                    <p class="category-description">Smartphones, Laptops und mehr</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">👕</div>
                    <h3 class="category-title">Kleidung</h3>
                    <p class="category-description">Modische Outfits für jeden Anlass</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">🍳</div>
                    <h3 class="category-title">Haushaltswaren</h3>
                    <p class="category-description">Alles für den Haushalt</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">👟</div>
                    <h3 class="category-title">Sport</h3>
                    <p class="category-description">Sportartikel für jedes Hobby</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Newsletter-Formular -->
    <section class="newsletter">
        <h2>Abonniere unseren Newsletter</h2>
        <div class="newsletter-form">
            <input type="email" placeholder="Deine E-Mail-Adresse" required>
            <button type="submit">Abonnieren</button>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>WebShop</h3>
                <p>Dein Partner für hochwertige Produkte</p>
            </div>
            <div class="footer-section">
                <h3>Kategorien</h3>
                <ul>
                    <li><a href="#">Elektronik</a></li>
                    <li><a href="#">Kleidung</a></li>
                    <li><a href="#">Haushaltswaren</a></li>
                    <li><a href="#">Sport</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Kontakt</h3>
                <ul>
                    <li><a href="#">Über uns</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </div>
        </div>
        <p class="copyright">&copy; 2025 WebShop. Alle Rechte vorbehalten.</p>
    </footer>
</body>
</html>
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
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webshop Produktübersicht</title>
    <style>
      :root {
        --primary: #0078d4;
        --primary-dark: #005fa3;
        --light-bg: #fafafa;
        --card-bg: #fff;
        --footer-bg: #222;
        --footer-link: #ffd700;
      }
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: var(--light-bg);
        color: #222;
      }
      header {
        background: var(--primary);
        color: #fff;
        padding: 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .logo {
        font-size: 1.6rem;
        font-weight: bold;
        margin-left: 2rem;
        letter-spacing: 1px;
      }
      nav {
        display: flex;
        gap: 2rem;
        margin-right: 2rem;
      }
      nav a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s;
      }
      nav a:hover {
        color: var(--footer-link);
      }
      main {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 1rem;
      }
      .filter-bar {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
      }
      .filter-bar label {
        font-weight: bold;
      }
      .filter-bar select {
        padding: 0.4rem 1rem;
        border-radius: 4px;
        border: 1px solid #bbb;
        font-size: 1rem;
      }
      .produkte-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .produkt-card {
        background: var(--card-bg);
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: box-shadow 0.2s;
      }
      .produkt-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.13);
      }
      .produkt-card img {
        width: 100%;
        max-width: 180px;
        height: 130px;
        object-fit: cover;
        border-radius: 6px;
        margin-bottom: 1rem;
        background: #eee;
      }
      .produkt-card h3 {
        margin: 0.5rem 0 0.3rem 0;
        font-size: 1.1rem;
      }
      .produkt-card .preis {
        font-weight: bold;
        color: var(--primary);
        margin: 0.5rem 0 1rem 0;
        font-size: 1.1rem;
      }
      .produkt-card button {
        padding: 0.5rem 1.2rem;
        border-radius: 4px;
        border: none;
        background: var(--primary);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
      }
      .produkt-card button:hover {
        background: var(--primary-dark);
      }
      footer {
        background: var(--footer-bg);
        color: #fff;
        text-align: center;
        padding: 2rem 1rem 1rem 1rem;
        margin-top: 2rem;
      }
      .footer-links {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .footer-links a {
        color: var(--footer-link);
        text-decoration: none;
        font-weight: bold;
        transition: text-decoration 0.2s;
      }
      .footer-links a:hover {
        text-decoration: underline;
      }
      @media (max-width: 700px) {
        header {
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 0.5rem;
        }
        .logo {
          margin-left: 0.5rem;
          margin-bottom: 0.5rem;
        }
        nav {
          margin-right: 0.5rem;
          gap: 1rem;
        }
        main {
          padding: 0 0.5rem;
        }
      }
    </style>
    <script>
      // Einfache Filterfunktion für die Demo
      document.addEventListener("DOMContentLoaded", function () {
        const select = document.getElementById("kategorie-filter");
        const cards = document.querySelectorAll(".produkt-card");
        select.addEventListener("change", function () {
          const value = select.value;
          cards.forEach((card) => {
            if (value === "alle" || card.dataset.kategorie === value) {
              card.style.display = "";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
    </script>
  </head>
  <body>
    <header>
      <div class="logo">ShopLogo</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Produkte</a>
        <a href="#">Kategorien</a>
        <a href="#">Kontakt</a>
      </nav>
    </header>
    <main>
      <div class="filter-bar">
        <label for="kategorie-filter">Kategorie:</label>
        <select id="kategorie-filter">
          <option value="alle">Alle</option>
          <option value="elektronik">Elektronik</option>
          <option value="kleidung">Kleidung</option>
          <option value="haushalt">Haushalt</option>
          <option value="sport">Sport</option>
        </select>
      </div>
      <div class="produkte-grid">
        <div class="produkt-card" data-kategorie="elektronik">
          <img
            src="https://via.placeholder.com/180x130?text=Kopfhörer"
            alt="Bluetooth Kopfhörer"
          />
          <h3>Bluetooth Kopfhörer</h3>
          <div class="preis">49,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="elektronik">
          <img
            src="https://via.placeholder.com/180x130?text=Smartphone"
            alt="Smartphone X200"
          />
          <h3>Smartphone X200</h3>
          <div class="preis">299,00 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="kleidung">
          <img
            src="https://via.placeholder.com/180x130?text=Hoodie"
            alt="Unisex Hoodie"
          />
          <h3>Unisex Hoodie</h3>
          <div class="preis">39,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="haushalt">
          <img
            src="https://via.placeholder.com/180x130?text=Toaster"
            alt="Toaster 2-Scheiben"
          />
          <h3>Toaster 2-Scheiben</h3>
          <div class="preis">24,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="sport">
          <img
            src="https://via.placeholder.com/180x130?text=Yogamatte"
            alt="Yogamatte"
          />
          <h3>Yogamatte</h3>
          <div class="preis">19,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="haushalt">
          <img
            src="https://via.placeholder.com/180x130?text=Kaffeemaschine"
            alt="Kaffeemaschine"
          />
          <h3>Kaffeemaschine</h3>
          <div class="preis">59,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="kleidung">
          <img
            src="https://via.placeholder.com/180x130?text=Sneaker"
            alt="Sneaker"
          />
          <h3>Sneaker Classic</h3>
          <div class="preis">69,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="elektronik">
          <img
            src="https://via.placeholder.com/180x130?text=Tablet"
            alt="Tablet Pro"
          />
          <h3>Tablet Pro</h3>
          <div class="preis">399,00 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="sport">
          <img
            src="https://via.placeholder.com/180x130?text=Fahrradhelm"
            alt="Fahrradhelm"
          />
          <h3>Fahrradhelm</h3>
          <div class="preis">34,99 €</div>
          <button>Zum Produkt</button>
        </div>
        <div class="produkt-card" data-kategorie="haushalt">
          <img
            src="https://via.placeholder.com/180x130?text=Wasserkocher"
            alt="Wasserkocher"
          />
          <h3>Wasserkocher</h3>
          <div class="preis">22,99 €</div>
          <button>Zum Produkt</button>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">Produkte</a>
        <a href="#">Kategorien</a>
        <a href="#">Kontakt</a>
      </div>
      &copy; 2025 Webshop. Alle Rechte vorbehalten.
    </footer>
  </body>
</html>

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
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produkt-Detailseite</title>
    <link rel="stylesheet" href="product-detail.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
            <img src="https://via.placeholder.com/150" alt="Shop Logo">
        </div>
        <nav>
            <ul>
                <li><a href="indexWindsurf.html">Startseite</a></li>
                <li><a href="products.html">Produkte</a></li>
                <li><a href="about.html">Über uns</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="product-detail">
        <div class="product-gallery">
            <div class="main-image">
                <img src="https://via.placeholder.com/600x400" alt="Hauptbild">
            </div>
            <div class="thumbnail-gallery">
                <img src="https://via.placeholder.com/200x150" alt="Bild 1" class="thumbnail">
                <img src="https://via.placeholder.com/200x150" alt="Bild 2" class="thumbnail">
                <img src="https://via.placeholder.com/200x150" alt="Bild 3" class="thumbnail">
            </div>
        </div>

        <div class="product-info">
            <h1>Smartphone Pro Max</h1>
            <div class="price">€999,99</div>
            
            <div class="product-description">
                <h2>Produktbeschreibung</h2>
                <p>Das Smartphone Pro Max ist das neueste Modell unserer Premium-Linie. Mit einem 6,7-Zoll-OLED-Display, 512GB Speicher und 12GB RAM bietet es Top-Leistung für jeden Anwendungsfall.</p>
                <p>Features:</p>
                <ul>
                    <li>6,7-Zoll OLED-Display</li>
                    <li>512GB Speicher</li>
                    <li>12GB RAM</li>
                    <li>5G-fähig</li>
                    <li>Wasser- und staubdicht</li>
                </ul>
            </div>

            <div class="product-video">
                <h2>Produktvideo</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <form class="order-form" action="#" method="POST">
            <h2>Bestellformular</h2>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="address">Adresse:</label>
                <textarea id="address" name="address" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="quantity">Menge:</label>
                <input type="number" id="quantity" name="quantity" min="1" value="1" required>
            </div>
            <div class="form-group">
                <label for="comment">Kommentar:</label>
                <textarea id="comment" name="comment" rows="4"></textarea>
            </div>
            <button type="submit" class="order-button">Bestellung abschicken</button>
        </form>
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>Informationen</h4>
                <ul>
                    <li><a href="#">Über uns</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">AGBs</a></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Kundeninformation</h4>
                <ul>
                    <li><a href="#">Versand</a></li>
                    <li><a href="#">Retouren</a></li>
                    <li><a href="#">Zahlungsmethoden</a></li>
                    <li><a href="#">Kundenkonto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Kontakt</h4>
                <p>Email: info@shop.de</p>
                <p>Telefon: +49 (0) 123 456789</p>
                <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Shop GmbH. Alle Rechte vorbehalten.</p>
        </div>
    </footer>
</body>
</html>
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
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt</title>
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
            <img src="https://via.placeholder.com/150" alt="Shop Logo">
        </div>
        <nav>
            <ul>
                <li><a href="indexWindsurf.html">Startseite</a></li>
                <li><a href="products.html">Produkte</a></li>
                <li><a href="about.html">Über uns</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="contact-page">
        <section class="team-section">
            <h2>Unser Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-image">
                        <img src="https://via.placeholder.com/300" alt="Max Mustermann">
                    </div>
                    <h3>Max Mustermann</h3>
                    <p class="role">Geschäftsführer</p>
                    <p class="bio">Max hat über 15 Jahre Erfahrung in der E-Commerce-Branche und führt unser Unternehmen mit großer Leidenschaft.</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <img src="https://via.placeholder.com/300" alt="Anna Müller">
                    </div>
                    <h3>Anna Müller</h3>
                    <p class="role">Kundenservice-Managerin</p>
                    <p class="bio">Anna ist für unseren hervorragenden Kundenservice verantwortlich und sorgt dafür, dass unsere Kunden zufrieden sind.</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <img src="https://via.placeholder.com/300" alt="Peter Schmidt">
                    </div>
                    <h3>Peter Schmidt</h3>
                    <p class="role">Technischer Direktor</p>
                    <p class="bio">Peter entwickelt die technische Infrastruktur unseres Shops und sorgt für eine sichere und zuverlässige Plattform.</p>
                </div>
            </div>
        </section>

        <section class="contact-form-section">
            <h2>Kontaktieren Sie uns</h2>
            <form class="contact-form" action="#" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Betreff:</label>
                    <select id="subject" name="subject" required>
                        <option value="">Bitte wählen Sie einen Betreff</option>
                        <option value="support">Kundensupport</option>
                        <option value="order">Bestellung</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Sonstiges</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message">Nachricht:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="submit-button">Nachricht senden</button>
            </form>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>Informationen</h4>
                <ul>
                    <li><a href="#">Über uns</a></li>
                    <li><a href="#">Kontakt</a></li>
                    <li><a href="#">AGBs</a></li>
                    <li><a href="#">Datenschutz</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Kundeninformation</h4>
                <ul>
                    <li><a href="#">Versand</a></li>
                    <li><a href="#">Retouren</a></li>
                    <li><a href="#">Zahlungsmethoden</a></li>
                    <li><a href="#">Kundenkonto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Kontakt</h4>
                <p>Email: info@shop.de</p>
                <p>Telefon: +49 (0) 123 456789</p>
                <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Shop GmbH. Alle Rechte vorbehalten.</p>
        </div>
    </footer>
</body>
</html>
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



