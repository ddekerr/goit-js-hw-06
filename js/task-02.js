const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = ingredients.map(item => {
  return `<li class="item">${item}</li>`
}).join("");

// Add all element like a child of ul#ingredients
document.querySelector("#ingredients").innerHTML = markup;
