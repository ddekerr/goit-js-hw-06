const inputElement = document.querySelector('#font-size-control');
const changedElement = document.querySelector('#text');
// set start font-size of changedElement
changedElement.style.fontSize = `${inputElement.value}px`;

// event change input element and set this valau to font-size changedElement
inputElement.addEventListener('input', function(){
  changedElement.style.fontSize = `${this.value}px`;
});