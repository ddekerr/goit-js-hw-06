// Categories list
const animalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${animalCategories.length}`);

animalCategories.forEach(li => {
  const categoryName = li.firstElementChild.textContent; //h2
  console.log(`Category: ${categoryName}`);

  const categoryLength = li.lastElementChild.children.length; //length of inner ul items
  console.log(`Elements: ${categoryLength}`);
});

// Category clildren keys
// const categoriesKeys = Object.keys(animalCategories.children);

// for (const key of categoriesKeys) {
//   // Title of each category children
//   const categoryTitle = animalCategories.children[key].querySelector('h2');
//   console.log(`Category: ${categoryTitle.innerText}`);

//   // List of each category and log list.length
//   const categoryList = animalCategories.children[key].querySelectorAll('li');
//   console.log(`Elements: ${categoryList.length}`);
// }