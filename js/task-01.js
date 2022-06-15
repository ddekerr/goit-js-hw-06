// Categories list
const animalCategories = document.querySelector('#categories');
console.log(`Number of categories: ${animalCategories.children.length}`);

// Category clildren keys
const categoriesKeys = Object.keys(animalCategories.children);

for (const key of categoriesKeys) {
  // Title of each category children
  const categoryTitle = animalCategories.children[key].querySelector('h2');
  console.log(`Category: ${categoryTitle.innerText}`);

  // List of each category and log list.length
  const categoryList = animalCategories.children[key].querySelectorAll('li');
  console.log(`Elements: ${categoryList.length}`);
}
