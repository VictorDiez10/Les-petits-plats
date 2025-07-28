import recipes from './recipe.js';
import { createFilterDropdown } from './filtre.js';

const filtersContainer = document.getElementById('filters');

// 1. Extraire tous les ingrédients
const ingredients = [...new Set(
  recipes.flatMap(recipe => recipe.ingredients.map(ing => ing.ingredient.toLowerCase()))
)];

// 2. Extraire tous les appareils
const appareils = [...new Set(recipes.map(recipe => recipe.appliance.toLowerCase()))];

// 3. Extraire tous les ustensiles
const ustensiles = [...new Set(
  recipes.flatMap(recipe => recipe.ustensils.map(u => u.toLowerCase()))
)];

filtersContainer.appendChild(createFilterDropdown("Ingrédients", ingredients));
filtersContainer.appendChild(createFilterDropdown("Appareils", appareils));
filtersContainer.appendChild(createFilterDropdown("Ustensiles", ustensiles));

export function updateRecipeCount() {
  const visibleCards = document.querySelectorAll('#recipe-container .card:not([style*="display: none"])');
  const count = visibleCards.length;
  const formatted = count.toString().padStart(2, '0') + ' recettes';
  document.getElementById('recipe-count').textContent = formatted;
}

