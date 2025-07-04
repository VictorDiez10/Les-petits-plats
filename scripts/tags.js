const activeTags = [];
const activeTagsContainer = document.getElementById("active-tags");
const recipeCards = document.querySelectorAll("#recipe-container .card");

export function addTag(type, value) {
  const existing = activeTags.find(t => t.type === type && t.value === value);
  console.log(value)
  if (existing) return;

  activeTags.push({ type, value });
  renderTags();
  filterRecipes();
}

function removeTag(value) {
  const index = activeTags.findIndex(tag => tag.value === value);
  if (index !== -1) {
    activeTags.splice(index, 1);
    renderTags();
    filterRecipes();
  }
}

function renderTags() {
  activeTagsContainer.innerHTML = "";
  activeTags.forEach(tag => {
    const tagEl = document.createElement("div");
    tagEl.className = "bg-yellow-300 text-black px-3 py-1 rounded flex items-center gap-2";
    tagEl.innerHTML = `
      <span>${tag.value}</span>
      <button class="text-black font-bold pointer" data-value="${tag.value}">×</button>
    `;
    activeTagsContainer.appendChild(tagEl);
  });

  // Event : click sur bouton "×"
  document.querySelectorAll("#active-tags button").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-value");
      removeTag(val);
    });
  });
}

function filterRecipes() {
  recipeCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const matchAll = activeTags.every(tag => text.includes(tag.value.toLowerCase()));
    card.style.display = matchAll ? "" : "none";
  });
}
