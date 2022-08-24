const input = document.querySelector('#validation-input');

// event out of focus
input.addEventListener('blur', function() {
  // add class according to the condition
  if (this.value.length === +this.dataset.length) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});
