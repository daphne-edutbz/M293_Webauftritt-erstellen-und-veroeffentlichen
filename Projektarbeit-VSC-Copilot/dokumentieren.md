1.  Prompt:
Erstelle ein responsives HTML-Grundgerüst mit Header, Main und Footer


Resultat:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mein Webauftritt</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      header,
      footer {
        background: #222;
        color: #fff;
        padding: 1rem;
        text-align: center;
      }
      main {
        flex: 1;
        padding: 2rem;
      }
      @media (max-width: 600px) {
        main {
          padding: 1rem;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Willkommen auf meiner Webseite</h1>
    </header>
    <main>
      <p>Dies ist der Hauptinhalt der Seite.</p>
    </main>
    <footer>&copy; 2025 Mein Webauftritt</footer>
  </body>
</html>

```


2. Prompt: Erzeuge ein Grid-Layout für 3 Produkte (Bild, Name, Preis) und ein Newsletter-Formular mit E-Mail-Feld



```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mein Webauftritt</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      header,
      footer {
        background: #222;
        color: #fff;
        padding: 1rem;
        text-align: center;
      }
      main {
        flex: 1;
        padding: 2rem;
        max-width: 900px;
        margin: 0 auto;
      }
      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }
      .product-card {
        background: #f8f8f8;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        padding: 1rem;
        text-align: center;
      }
      .product-card img {
        width: 100%;
        max-width: 180px;
        height: auto;
        border-radius: 4px;
        margin-bottom: 1rem;
      }
      .product-name {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .product-price {
        color: #00796b;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .newsletter-form {
        background: #eee;
        padding: 1.5rem;
        border-radius: 8px;
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
      }
      .newsletter-form label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .newsletter-form input[type="email"] {
        padding: 0.5rem;
        width: 80%;
        max-width: 250px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1rem;
      }
      .newsletter-form button {
        padding: 0.5rem 1.2rem;
        background: #222;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      @media (max-width: 600px) {
        main {
          padding: 1rem;
        }
        .product-grid {
          gap: 1rem;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Willkommen auf meiner Webseite</h1>
    </header>
    <main>
      <div class="product-grid">
        <div class="product-card">
          <img src="https://via.placeholder.com/180x120?text=Produkt+1" alt="Produkt 1">
          <div class="product-name">Produkt 1</div>
          <div class="product-price">19,99 €</div>
        </div>
        <div class="product-card">
          <img src="https://via.placeholder.com/180x120?text=Produkt+2" alt="Produkt 2">
          <div class="product-name">Produkt 2</div>
          <div class="product-price">29,99 €</div>
        </div>
        <div class="product-card">
          <img src="https://via.placeholder.com/180x120?text=Produkt+3" alt="Produkt 3">
          <div class="product-name">Produkt 3</div>
          <div class="product-price">39,99 €</div>
        </div>
      </div>
      <form class="newsletter-form">
        <label for="newsletter-email">Newsletter abonnieren</label>
        <input type="email" id="newsletter-email" name="email" placeholder="Ihre E-Mail-Adresse" required>
        <br>
        <button type="submit">Anmelden</button>
      </form>
    </main>
    <footer>
      &copy; 2025 Mein Webauftritt
    </footer>
  </body>
</html>
```

d
