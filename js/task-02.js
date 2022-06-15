const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// array of future li
const listOfIngredients = [];

/*
* create li for each ingredients
* set them class "item"
* set them text content is item of ingredients
* add element to listOfIngredients array
*/
for (const item of ingredients) {
  const itemOfIngredients = document.createElement("li");
  itemOfIngredients.className = "item";
  itemOfIngredients.textContent = item;
  listOfIngredients.push(itemOfIngredients);
}

// Add all element like a child of ul#ingredients
document.querySelector("#ingredients").append(...listOfIngredients);
