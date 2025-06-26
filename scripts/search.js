const searchBar = document.querySelector(".search");
const resultsList = document.getElementById("recipe-container");
const items = resultsList.getElementsByClassName("card");

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();
if (searchTerm.length > 2) {
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      items[i].style.display = ""; // montrer l'élément
    } else {
      items[i].style.display = "none"; // cacher l'élément
    }
  }}
});



