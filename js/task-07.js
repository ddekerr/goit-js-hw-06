const range = document.querySelector('#font-size-control');
const changedElement = document.querySelector('#text');
// set start font-size of changedElement
changeFontSize();

// event change input element and set this valau to font-size changedElement
range.addEventListener('input', changeFontSize);

function changeFontSize() {
  changedElement.style.fontSize = `${range.value}px`;
}