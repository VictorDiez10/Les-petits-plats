import recipes from './recipe.js';

function createRecipeCard(recipe) {
  const card = document.createElement('div')
  card.className = 'bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-md'

  card.innerHTML = `
    <div class="relative">
      <img src="images/${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover">
      <span class="absolute top-3 right-3 bg-[#FFD15B] text-black text-xs font-normal px-3 py-1 rounded-full font-[Manrope]">
        ${recipe.time}min
      </span>
    </div>

    <div class="p-4">
      <h2 class="text-lg font-normal mb-2 font-[Anton]">${recipe.name}</h2>

      <h3 class="text-xs uppercase text-gray-500 font-bold mb-1 font-[Manrope]">Recette</h3>
      <p class="text-gray-900 text-sm leading-relaxed font-[Manrope] font-normal">${recipe.description}</p>

      <h3 class="text-xs uppercase text-gray-700 font-bold mt-4 mb-2 font-[Manrope]">Ingrédients</h3>
      <div class="grid grid-cols-2 gap-2 text-sm text-gray-800">
        ${recipe.ingredients.map(ing => `
          <div>
            <strong class="font-[Manrope] font-medium text-sm text-gray-900">${ing.ingredient}</strong><br>
            <span class="text-gray-400 font-[Manrope] font-normal text-sm">${ing.quantity || ''} ${ing.unit || ''}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `

  return card
}

function displayAllRecipes() {
  const container = document.getElementById('recipe-container')
  recipes.forEach(recipe => {
    const card = createRecipeCard(recipe)
    container.appendChild(card)
  })
}

displayAllRecipes()
