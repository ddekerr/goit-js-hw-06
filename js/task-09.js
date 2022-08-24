function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorResult = document.querySelector('.color');

// Click event
changeColorBtn.addEventListener('click', function() {
  // insert color value in colorResult element
  const color = getRandomHexColor();
  colorResult.textContent = color;

  // change bg-color of body
  document.body.style.backgroundColor = color;
});
