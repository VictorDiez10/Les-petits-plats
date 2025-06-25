export function createFilterDropdown(title, items = []) {
  const container = document.createElement('div');
  container.className = "relative inline-block w-52";

  const button = document.createElement('button');
  button.className = `
    w-full bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md shadow 
    flex justify-between items-center hover:bg-gray-200
  `;
  button.innerHTML = `
    <span>${title}</span>
    <svg class="w-4 h-4 ml-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  `;

  const dropdown = document.createElement('ul');
  dropdown.className = `
    absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg 
    hidden max-h-60 overflow-y-auto
  `;

  items.forEach(item => {
    const li = document.createElement('li');
    li.className = "px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer";
    li.textContent = item;
    li.onclick = () => {
      button.querySelector('span').textContent = item;
      dropdown.classList.add('hidden');
    };
    dropdown.appendChild(li);
  });

  button.onclick = () => {
    dropdown.classList.toggle('hidden');
    button.querySelector('svg').classList.toggle('rotate-180');
  };

  container.appendChild(button);
  container.appendChild(dropdown);

  return container;
}
