const inputElement = document.querySelector('#validation-input');

// event out of focus
inputElement.addEventListener('blur', function() {

  // length of input value
  const valueLength = this.value.length;

  // data-length atribute value
  const datasetLength = Number(this.dataset.length);

  // add class according to the condition
  if (valueLength === datasetLength) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});