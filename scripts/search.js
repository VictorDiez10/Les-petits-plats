// const searchBar = document.querySelector(".search");
// const resultsList = document.getElementById("recipe-container");
// const items = resultsList.getElementsByClassName("card");

// searchBar.addEventListener("input", () => {
//   const searchTerm = searchBar.value.toLowerCase();
// if (searchTerm.length > 2) {
//   for (let i = 0; i < items.length; i++) {
//     const itemText = items[i].textContent.toLowerCase();
//     if (itemText.includes(searchTerm)) {
//       items[i].style.display = ""; // montrer l'élément
//     } else {
//       items[i].style.display = "none"; // cacher l'élément
//     }
//   }}
// });

import recipes from './recipe.js'

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



