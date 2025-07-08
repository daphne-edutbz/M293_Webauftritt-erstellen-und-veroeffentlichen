document.addEventListener("DOMContentLoaded", function () {
  displayProductDetails();
  handleFormSubmission();
});

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  displayProductDetails();
  handleFormSubmission();
}
// Product database
const products = {
  "macbook-air": {
    name: "Apple MacBook Air",
    description: '13,3" Retina Display, M1 Chip, 8GB RAM, 256GB SSD.',
    price: "1.099,00 €",
    category: "Elektronik",
    mainImage:
      "https://www.apple.com/v/macbook-air/u/images/overview/hero/hero_static__c9sislzzicq6_large.png",
    otherImages: [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
      "https://www.interdiscount.ch/static-shops/products/720/0e4e0fc98537026c487db57741b687cca2a3db38ef25f.jpg",
    ],
    features: [
      "13,3 Retina Display mit True Tone",
      "Apple M1 Chip mit 8-Core CPU und 7-Core GPU",
      "8GB unified Memory",
      "256GB SSD Speicher",
      "Magic Keyboard",
      "Touch ID",
      "Bis zu 18 Stunden Akkulaufzeit",
    ],
    video: "https://www.youtube.com/embed/JWGQlG2dse8?si=Z7iyyngM7NKdsit3",
  },
  "iphone-14": {
    name: "Apple iPhone 14",
    description: '6,1" Super Retina XDR Display, Dual-Kamera, A15 Bionic Chip.',
    price: "849,00 €",
    category: "Elektronik",
    mainImage:
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-starlight-220907-geo_inline.jpg.large.jpg",
    otherImages: [
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-PRODUCT-RED-220907-geo_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202505090028",
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    ],
    features: [
      "6,1 Super Retina XDR Display",
      "Cinematic Mode (4K HDR bis 30 fps)",
      "Action-Modus für stabile Videos",
      "Batterielaufzeit für den ganzen Tag",
      "A15 Bionic Chip",
      "5G für superschnelle Downloads",
      "Wasserdicht (IP68)",
    ],
    video: "https://www.youtube.com/embed/RL8sM6FuPw8?si=o0CMYfp9o9-9Yc8O",
  },
  "samsung-tab-s9": {
    name: "Samsung Galaxy Tab S9",
    description: '11" Dynamic AMOLED 2X, Snapdragon 8 Gen 2, S Pen inklusive.',
    price: "799,00 €",
    category: "Elektronik",
    mainImage:
      "https://images.samsung.com/is/image/samsung/p6pim/ch/sm-x710nzaaeue/gallery/ch-galaxy-tab-s9-wifi-x710-sm-x710nzaaeue-538622359?$684_547_PNG$",
    otherImages: [
      "https://minirate.ch/wp-content/uploads/2023/11/Tabs9-fe.jpg",
      "https://www.digitec.ch/productimages/3/5/9/6/8/6/1/3/8/8/2/1/0/1/7/2/7/2/9/ba442be2-288f-4860-98e6-f0d48f82bbaa_cropped.png",
      "https://soundmachine.com.mt/wp-content/uploads/2023/08/Galaxy-TabS9-GRAPHITE.jpg",
    ],
    features: [
      "11 Dynamic AMOLED 2X Display mit 120Hz",
      "Qualcomm Snapdragon 8 Gen 2 Prozessor",
      "S Pen im Lieferumfang enthalten",
      "IP68 wasser- und staubdicht",
      "Bis zu 15 Stunden Akkulaufzeit",
      "Dolby Atmos Quad-Lautsprecher",
      "5G und Wi-Fi 6E",
    ],
    video: "https://www.youtube.com/embed/5j0M9ZJ2m5E",
  },
  "sony-headphones": {
    name: "Sony WH-1000XM5",
    description: "Bluetooth Kopfhörer mit branchenführendem Noise Cancelling.",
    price: "379,99 €",
    category: "Elektronik",
    mainImage:
      "https://images-na.ssl-images-amazon.com/images/I/414ijz53hCL._UL500_.jpg",
    otherImages: [
      "https://d1ncau8tqf99kp.cloudfront.net/converted/103375_original_local_1200x1050_v3_converted.webp",
      "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
      "https://hydraulic-cdn.com/productimages/5/5/1/6/9/9/4/4/7/8/5/5/9/9/7/7/1/5/5/019766b5-ccca-7062-a593-d740bd9d66a1_720.jpeg",
    ],
    features: [
      "Branchenführende Geräuschunterdrückung",
      "30 Stunden Akkulaufzeit mit ANC",
      "Touch-Steuerung",
      "Integrierte Mikrofone für klare Telefonate",
      "Automatische Anpassung der Geräuschunterdrückung",
      "Leichtes und bequemes Design",
      "Schnellladefunktion",
    ],
    video: "https://www.youtube.com/embed/v6EjmbMgv80?si=dzPcq2Gx-3ATr7m1",
  },
  "airpods-max": {
    name: "Apple AirPods Max",
    description:
      "Over-Ear Kopfhörer mit aktivem Noise Cancelling und Transparenzmodus.",
    price: "549,00 €",
    category: "Elektronik",
    mainImage:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE",
    otherImages: [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpyd2ttdW5wTmRBL1NETnlMVldNRXJ0RFZOSzlQRTFSbHNFZCtKQi9Wc2w5b3I2TGhYaGhMVkJpQ2RGWWVURTZNbXphV29iOFBIcjE1bWVvKzVNUlpwYys",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-blue_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724927451121",
    ],
    features: [
      "Aktive Geräuschunterdrückung",
      "Transparenzmodus",
      "Hochwertiger Klang",
      "Bis zu 20 Stunden Akkulaufzeit",
      "Digital Crown für Lautstärke und Steuerung",
      "Raumklang mit dynamischem Kopf-Tracking",
      "MagSafe-Ladefunktion",
    ],
    video: "https://www.youtube.com/embed/WDjE6nPLOUo?si=F31dLci_OVTWI44s",
  },
  "samsung-watch": {
    name: "Samsung Galaxy Watch 5",
    description:
      "Smartwatch mit Gesundheitsfunktionen und langer Akkulaufzeit.",
    price: "299,99 €",
    category: "Elektronik",
    mainImage:
      "https://images.samsung.com/ch/galaxy-watch5/feature/galaxy-watch5-bioacitive-sensor-bia-mo.jpg",
    otherImages: [
      "https://images.samsung.com/ch/galaxy-watch5-pro/feature/galaxy-watch5-pro-monitoring-display-mo.jpg",
      "https://images.samsung.com/ch/galaxy-watch5/feature/galaxy-watch5-battery-mo.jpg",
      "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-and-Galaxy-Watch-5-Pro-Lifestyle-Shots_1_809973.jpg",
    ],
    features: [
      "BioActive Sensor für Körperanalyse",
      "Schlafüberwachung mit Schlaf-Coaching",
      "Bis zu 50 Stunden Akkulaufzeit",
      "Schnellladung in 30 Minuten",
      "Wasserdicht bis 50 Meter (5ATM)",
      "Mehr als 90 Trainingsmodi",
      "Kompatibel mit Android-Smartphones",
    ],
    video: "https://www.youtube.com/embed/WsBJ0-oJG0c?si=jvIwDrePsVdO58XM",
  },
  "adidas-hoodie": {
    name: "Adidas Essentials Hoodie",
    description: "Klassischer Hoodie aus weicher Baumwollmischung.",
    price: "49,99 €",
    category: "Kleidung",
    mainImage:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc04fcc1ac7645deb0b537e93f67d381_9366/Trefoil_Essentials_Hoodie_White_IX7669_01_laydown.jpg",
    otherImages: [
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eefb5a7def5d40ecbd6a20417994612b_9366/Trefoil_Essentials_Hoodie_White_IX7669_21_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/42754fe00e1746abaebcf1ec2fecee5d_9366/Trefoil_Essentials_Hoodie_White_IX7669_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/35a3899ab5534afe8339e00e8754d388_9366/Trefoil_Essentials_Hoodie_White_IX7669_25_model.jpg",
    ],
    features: [
      "Weiche Baumwollmischung",
      "Klassischer Schnitt",
      "Kängurutasche",
      "Ribbed-Strickbündchen",
      "Adidas Trefoil-Logo auf der Brust",
      "Maschinenwäsche bei 30°C",
      "Erhältlich in verschiedenen Farben",
    ],
    video: "https://www.youtube.com/embed/CN3q0Yvqx_Y?si=cwwGXQ_plEhO-Txw",
  },
  "nike-air-force": {
    name: "Nike Air Force 1",
    description: "Kultige Sneaker aus Leder mit hohem Tragekomfort.",
    price: "119,99 €",
    category: "Kleidung",
    mainImage:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    otherImages: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
    ],
    features: [
      "Leder-Obermaterial",
      "Klassisches Nike Air Dämpfungssystem",
      "Gummisohle für bessere Traktion",
      "Perforiertes Design für Atmungsaktivität",
      "Nike Air Logo auf der Zunge und Ferse",
      "Farbe: Weiss/Weiss",
      "Pflegehinweis: Oberfläche mit feuchtem Tuch reinigen",
    ],
    video:
      "https://shortformvideo.nike.com/a/videos/cd7718c0-9577-4006-81ce-bda237edf6ce/video.mp4",
  },
  "north-face-jacke": {
    name: "The North Face Resolve Jacke",
    description: "Wasser- und winddichte Outdoorjacke für jedes Wetter.",
    price: "99,99 €",
    category: "Kleidung",
    mainImage:
      "https://img01.ztat.net/article/spp-media-p1/f822a49779534196ace195751cecd28b/69172e4573a643c785c5c0fa9f436f1e.jpg?imwidth=1800&filter=packshot",
    otherImages: [
      "https://img01.ztat.net/article/spp-media-p1/afb21a45a3a641c19fbbdbd219773041/ff74935c152e4dfd88749df21558524b.jpg?imwidth=1800",
      "https://img01.ztat.net/article/spp-media-p1/f28cd463df054ccb83bef6ee5171e78b/1a3352f6001742eab0b11420582c73ac.jpg?imwidth=1800",
      "https://img01.ztat.net/article/spp-media-p1/2386b3568dd14473b44e0f6c76798ee0/33ed3c124534428f8361ae1e285289c3.jpg?imwidth=1800",
    ],
    features: [
      "Wasserdichtes DryVent™ 2L Material",
      "Atmungsaktiv",
      "Verstellbare Kapuze",
      "Frontreissverschluss mit Kinnschutz",
      "Zwei seitliche Reissverschlusstaschen",
      "Elastische Bündchen an Ärmeln und Saum",
      "Leichtes Packmass",
    ],
    video: "https://www.youtube.com/embed/W9hJNGpSJIU?si=6r9F4BbgcEU9Ol6n",
  },
  "bosch-toaster": {
    name: "Bosch Toaster TAT6A003",
    description: "2-Scheiben-Toaster mit integriertem Brötchenaufsatz.",
    price: "34,99 €",
    category: "Haushalt",
    mainImage:
      "https://media3.bsh-group.com/Product_Shots/5120x/MCSA01619340_G1882_TAT6A003_1070019_corr2_def.webp",
    otherImages: [
      "https://media3.bsh-group.com/Product_Shots/5120x/MCSA01701139_BO_K_14_KT6_TAT6_TAT6A003_picture_KF1_front_ENG_220216_def.webp",
      "https://media3.bsh-group.com/Product_Shots/MCSA01701145_BO_K_14_KT6_TAT6_TAT6A003_picture_nKF_bun_warmer_ENG_220216_def.webp",
      "https://media3.bsh-group.com/Product_Shots/5120x/MCSA01701147_BO_K_14_KT6_TAT6_TAT6A003_picture_nKF_long_slot_ENG_220216_def.webp",
    ],
    features: [
      "2 breite Toastscheiben",
      "7 Bräunungsstufen",
      "Brötchenaufsatz",
      "Abtau- und Aufwärmfunktion",
      "Automatische Zentrierung der Brotscheiben",
      "Krümelauffangschale",
      "Leuchtender Ein-/Ausschalter",
    ],
    video: "https://www.youtube.com/embed/l9QzKChkZCM?si=gpB7A_awiy2CbAsw",
  },
  "philips-wasserkocher": {
    name: "Philips Wasserkocher HD9350",
    description: "1,7 Liter Edelstahlkorpus mit automatischer Abschaltung.",
    price: "39,99 €",
    category: "Haushalt",
    mainImage:
      "https://static02.galaxus.com/productimages/1/1/2/3/3/9/0/2/6/9/4/6/5/4/0/4/8/7/2/aec828ab-cde2-431b-9f41-7e5ed8032788_cropped.jpg_720.jpeg",
    otherImages: [
      "https://www.fust.ch/_next/image?url=https%3A%2F%2Fapi-nettoshop-prod-external.coop.ch%2Fmedias%2FIP302738-3.jpg%3Fcontext%3DbWFzdGVyfGNvbW1vbl9wcm9kdWN0fDEzMzAwOHxpbWFnZS9qcGVnfFkyOXRiVzl1TDNCeWIyUjFZM1F2YUdWbEwyaGlOeTg1TURjek1UVTVNakE0T1Rrd0xtcHdad3xiNjNjNWRiN2RhMWRmZWFhOWU2ZTgzOTM5MzgxZGE5NjcxZmE0NWZhZTc5MWEzMTYzMTkxYjMxMDhkOGE0OTJl&w=2048&q=75",
      "https://www.fust.ch/_next/image?url=https%3A%2F%2Fapi-nettoshop-prod-external.coop.ch%2Fmedias%2FIP302738-5.jpg%3Fcontext%3DbWFzdGVyfGNvbW1vbl9wcm9kdWN0fDE0MzM4NXxpbWFnZS9qcGVnfFkyOXRiVzl1TDNCeWIyUjFZM1F2YURBM0wyZ3haaTg1TURjek1UVTFPVGszTnpJMkxtcHdad3xkZTljYjRlZTc0NTBkMGIxYjAyNDhjY2ZlYWZkNzRiYWJiMWY3YTNiNTdmMjkwZDBmMTYyZmVlMDhiYjBiOTBi&w=2048&q=75",
      "https://cdn02.plentymarkets.com/m4dlk92njtak/item/images/117242/full/52657297-xxl3.jpg",
    ],
    features: [
      "1,7 Liter Fassungsvermögen",
      "3000 Watt Leistung",
      "Edelstahlgehäuse",
      "Automatische Abschaltung",
      "Kabelfreies Servieren",
      "360° drehbarer Standfuss",
      "Schnellkochfunktion",
    ],
    video: "https://www.youtube.com/embed/0Lkedi3hm8M?si=uZNwhNIguAlUxJOi",
  },
  "melitta-kaffeemaschine": {
    name: "Melitta Look Therm",
    description: "Filterkaffeemaschine mit Thermkanne für bis zu 12 Tassen.",
    price: "79,99 €",
    category: "Haushalt",
    mainImage:
      "https://www.fust.ch/_next/image?url=https%3A%2F%2Fapi-nettoshop-prod-external.coop.ch%2Fmedias%2FIP312078.jpg%3Fcontext%3DbWFzdGVyfGNvbW1vbl9wcm9kdWN0fDczMjMxfGltYWdlL2pwZWd8WTI5dGJXOXVMM0J5YjJSMVkzUXZhR1UxTDJnMVl5ODVNelUxTlRVek56QXhPVEU0TG1wd1p3fDdlM2IwNjRjZTYwYWYyZWQ4YzlmOWQ5ZTJmYTUwYjUyNWE1OTNmOTdkZWIzMzg4Zjk0NTVhMzc1MDMwMTA2ODM&w=2048&q=75",
    otherImages: [
      "https://www.fust.ch/_next/image?url=https%3A%2F%2Fapi-nettoshop-prod-external.coop.ch%2Fmedias%2FIP312078-3.jpg%3Fcontext%3DbWFzdGVyfGNvbW1vbl9wcm9kdWN0fDg0MjY5fGltYWdlL2pwZWd8WTI5dGJXOXVMM0J5YjJSMVkzUXZhRFJqTDJoaFl5ODVNelUxTlRVek1UYzNOak13TG1wd1p3fDYxMWJlZmQzOTQ4OWI2Nzg4MTFlMTNhMTNmMmZmMmJiOGIzODM5OTJlOTUzZjE1YmFhNGI5ZmU3NzhiYWQ4NjE&w=2048&q=75",
      "https://www.galaxus.ch/productimages/7/4/5/7/3/5/0/2/5/0/8/8/7/3/1/4/1/0/7/7044f293-61dd-49d0-8cbd-dbe4e27a0113_cropped.jpg",
      "https://www.nettoshop.ch/medias/IP312078-4.jpg?context=bWFzdGVyfGNvbW1vbl9wcm9kdWN0fDQ3MzA4fGltYWdlL2pwZWd8WTI5dGJXOXVMM0J5YjJSMVkzUXZhR0ZoTDJnMVppODVNelUxTlRVMk1qa3dOVGt3TG1wd1p3fGNhYTYzMDJjNTBjZDgxMDQzMDk5OTZmYjlkZGM4MmJkZTAyZGQwMzdiNmJjYzlhMGJjZTNjMTUyMWVhMzZlZTA",
    ],
    features: [
      "1,25 Liter Thermkanne aus Edelstahl",
      "AromaPlus-Filtertrichter",
      "Programmierbare Startzeit",
      "Automatische Abschaltung",
      "Integrierter Wasserkocher",
      "Aktivkohlefilter im Wassertank",
      "LCD-Display mit Uhrzeit",
    ],
    video: "https://www.youtube.com/embed/escC77EeEyA?si=XpNit6LtkRx8Z43d",
  },
  "tefal-pfanne": {
    name: "Tefal Jamie Oliver Pfanne",
    description:
      "28 cm Antihaft-Pfanne, für alle Herdarten inklusive Induktion.",
    price: "49,99 €",
    category: "Haushalt",
    mainImage:
      "https://www.galaxus.ch/productimages/8/4/0/1/1/9/5/8/1/9/9/2/6/0/4/0/2/3/c57ce621-8635-4ec1-b557-0c80019b34eb_cropped.jpg",
    otherImages: [
      "https://media.xxxlutz.com/i/xxxlutz/PIs7m7-RnFN60zY8reGe2-BQ/?fmt=auto&%24hq%24=&w=1200",
      "https://www.galaxus.ch/productimages/1/8/2/1/1/9/7/7/1/4/9/6/3/3/4/5/9/0/1/51b7c94c-fd91-407c-901a-afb6a275ebb6.jpg",
      "https://www.tefal.ch/medias/R-jamie-oliver-stainless-steel-1-large.png?context=bWFzdGVyfHJvb3R8NzQ3MDZ8aW1hZ2UvcG5nfGFEYzBMMmd4T1M4NU1EUTNNRGcwTXpZM09UQXlMbkJ1Wnd8YjhhZjdjYzYwMGQ3MjUyYzY5YTQzMWFmNDI4MjVkYzdhOWYyNjkyNjg1YzRjOTBkNWY4MmFhNWJjMmQ5ZTZkNw",
    ],

    features: [
      "28 cm Durchmesser",
      "Thermo-Signal Technologie",
      "Ultra-starke Antihaft-Beschichtung",
      "Für alle Herdarten inkl. Induktion geeignet",
      "Spülmaschinenfest",
      "Ergonomischer Griff mit Silikon-Griffmulde",
      "Robuster Edelstahlboden",
    ],
    video: "https://www.youtube.com/embed/Czx-ptI1DNs?si=gXaiASHiSg9Egw7t",
  },
};

// Get product ID from URL
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product");
}

// Display product details
function displayProductDetails() {
  const productId = getProductId();

  if (!productId) {
    document.getElementById("productDetail").innerHTML = `
      <p>Kein Produkt ausgewählt. Bitte gehen Sie zurück zur <a href="products.html">Produktübersicht</a>.</p>`;
    return;
  }

  const product = products[productId];

  if (!product) {
    document.getElementById("productDetail").innerHTML = `
      <p>Produkt nicht gefunden. Bitte wählen Sie ein gültiges Produkt aus der <a href="products.html">Produktübersicht</a>.</p>`;
    return;
  }

  // Update breadcrumb
  document.getElementById("product-name-breadcrumb").textContent = product.name;

  // Build product details HTML
  let html = `
          <div class="product-gallery">
            <div class="main-image">
              <img src="${product.mainImage}" alt="${product.name}" id="mainProductImage">
            </div>
            <div class="thumbnail-gallery">
        `;

  // Add all images (main + others) to gallery
  [product.mainImage, ...product.otherImages].forEach((img, index) => {
    html += `<img src="${img}" alt="${product.name} Bild ${
      index + 1
    }" class="thumbnail">`;
  });

  html += `
            </div>
          </div>
          <div class="product-info">
            <h1>${product.name}</h1>
            <div class="price">${product.price}</div>
            <div class="product-description">
              <h2>Produktbeschreibung</h2>
              <p>${product.description}</p>
              <h2>Produktmerkmale</h2>
              <ul>
        `;

  // Add features list
  product.features.forEach((feature) => {
    html += `<li>${feature}</li>`;
  });

  html += `
              </ul>
            </div>
        `;

  // Add video if available
  if (product.video) {
    let videoUrl = product.video;
    // Check if it's a YouTube URL to embed properly
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = videoUrl.includes("youtube.com")
        ? videoUrl.split("v=")[1].split("&")[0]
        : videoUrl.split("/").pop();
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    html += `
            <div class="product-video">
              <h2>Produktvideo</h2>
              <div class="video-container">
                <iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          `;
  }

  html += `</div>`;

  document.getElementById("productDetail").innerHTML = html;

  // Add thumbnail click functionality
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("mainProductImage");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      mainImage.alt = thumb.alt;
    });
  });
}

// Handle form submission
function handleFormSubmission() {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const productId = getProductId();
    const product = products[productId];
    const quantity = document.getElementById("quantity").value;

    if (product) {
      alert(
        `Vielen Dank für Ihre Bestellung von ${quantity}x ${
          product.name
        } zum Preis von ${
          product.price
        } pro Stück. Gesamtbetrag: ${calculateTotal(product.price, quantity)} €`
      );
      form.reset();
    }
  });
}

// Helper function to calculate total price
function calculateTotal(priceStr, quantity) {
  const price = parseFloat(
    priceStr.replace(".", "").replace(",", ".").replace(" €", "")
  );
  const total = price * parseInt(quantity);
  return total.toFixed(2).replace(".", ",");
}
// Initialize the page
function initPage() {
  displayProductDetails();
  handleFormSubmission();
}

// Check if DOM is already loaded
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  initPage();
} else {
  document.addEventListener("DOMContentLoaded", initPage);
}
