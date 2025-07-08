# Styleguide für Projektauftrag 3 - Webshop mit KI-gestützter Webentwicklung


## Logo

| Element         | Beschreibung                          |
| --------------- | ------------------------------------- |
| **Logo-Klasse** | `.logo`                               |
| **Verwendung**  | Im Header linksbündig, Text-Logo      |
| **Stil**        | **Fett**, **1.5rem**, Farbe `#2c3e50` |

```html
<span class="logo">MeinShop</span>
```

## Farben

| Zweck             | Farbe      | Hex |
| ----------------- | ---------- | --------- |
| Primärfarbe   | Blau | `#3498db` |
| Primärfarbe Hover | Dunkelblau | `#2980b9` |
| Sekundärfarbe 1   | Dunkelgrau | `#2c3e50` |
| Sekundärfarbe 2   | Mittelgrau | `#34495e` |
| Warnfarbe | Rot | `#e74c3c` |
| Hintergrund Hell  | Hellgrau   | `#f5f5f5` |
| Hintergrundseite  | Beige/Weiss | `#f9f9f9` |
| Text Standard     | Dunkelgrau | `#333333` |
| Text Sekundär     | Mittelgrau | `#666666` |


## Typografie

### Primäre Schriftart

```css
font-family: "Arial", sans-serif;
```

| Element  | Schriftgrösse  | Gewicht       | Farbe          |
| ------------------ | ------------- | ------------- | -------------- |
| `.logo`            | `1.5rem`      | `bold`        | `#2c3e50`      |
| `h1`               | `2.5rem`      | `normal/bold` | `#2c3e50`      |
| `h2`               | `2rem`        | `normal/bold` | `#2c3e50`      |
| `h3`               | `1.5rem`      | `bold`        | `#34495e`      |
| `.product-title`   | `1.1rem`      | `normal`      | `#2c3e50`      |
| `.product-price`   | `1.2rem`      | `bold`        | `#e74c3c`      |
| Standardtext (`p`) | `1rem–1.2rem` | `normal`      | `#333`, `#666` |



## Abstände & Layout

### Container

```css
max-width: 1200px;
margin: 0 auto;
padding: 2rem;
```

### Grid-Layouts

| Ort           | Grid-Konfiguration                                            |
| ----------------- | ------------------------------------------------------------- |
| Produktübersicht  | `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` |
| Kategorien        | `repeat(auto-fit, minmax(200px, 1fr))`                        |
| Featured Produkte | `repeat(auto-fit, minmax(250px, 1fr))`                        |

### Standardabstände

* **Padding**: `1rem`, `2rem` oder `4rem`
* **Gap** (Grid/Flex): `1rem` – `2rem`
* **Margin Sections**: mind. `2rem` Abstand


## Komponentenrichtlinien

### Buttons

| Typ      | Klasse          | Farbe | Stil                       |
| -------- | --------------- | ----- | -------------------------- |
| Primär   | `.add-to-cart`  | Blau  | Weisser Text, `border:none` |
| Kaufen   | `.buy-button`   | Blau  | Fett, `border-radius: 5px` |
| Formular | `.order-button` | Blau  | Breite: `100%`             |

### Karten

* `.product-card`, `.category-card`, `.produkt-card`

  * **Hintergrund**: `#fff`
  * **Schatten**: `box-shadow: 0 2px 5px rgba(0,0,0,0.1)`
  * **Hover**: `transform: translateY(-5px)`

### Formularfelder

```css
input, textarea {
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input:focus, textarea:focus {
  border-color: #3498db;
}
```

## Responsive Verhalten

### Breakpoints

| Grösse  | Max Width          | Verhalten                                 |
| ------ | ------------------ | ----------------------------------------- |
| Tablet | `max-width: 768px` | Navigation & Grids auf Spaltenansicht     |
| Mobil  | `max-width: 480px` | Kleinere Schriftgrössen & 1-Spalten-Layout |

### Beispiel:

```css
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
```
