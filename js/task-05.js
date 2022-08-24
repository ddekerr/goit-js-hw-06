// set all substituter references to this.refs
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// input event for inputElement
input.addEventListener('input', function(e) {
  updateInputValue(e.target.value)
});

function updateInputValue(value) {
  output.textContent = input.value === '' ? 'Anonymus' : value;
}