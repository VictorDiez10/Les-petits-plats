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

document.querySelectorAll('.filter-search').forEach(input => {
  input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    const list = input.parentElement.querySelector('.filter-list');
    const items = list.querySelectorAll('li');

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});




