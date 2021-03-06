function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Click event
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener('click', function() {
  // insert color value in colorResult element
  const colorResult = document.querySelector('.color');
  const color = getRandomHexColor();
  colorResult.textContent = color;

  // change bg-color of body
  document.body.style.backgroundColor = color;
});
