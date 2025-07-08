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
