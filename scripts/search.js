const searchBar = document.querySelector(".search");
const resultsList = document.getElementById("recipe-container");
const items = Array.from(resultsList.getElementsByClassName("card"));

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();

  items.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = ""; // Affiche la carte
    } else {
      card.style.display = "none"; // Masque la carte
    }
  });
});



