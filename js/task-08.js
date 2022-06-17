const formValidator = {
  refs: {},

  // set references
  setRefs(email, password) {
    this.refs.inputEmail = email;
    this.refs.inputPassword = password;
  },

  // check fields for empty value
  checkFields() {
    const fields = Object.keys(this.refs);
    for (const field of fields) {
      if(this.refs[field].value === '')
        return false;
    }
    return true;
  },

  // generate final object to log result
  generateResultObject() {
    const elements = {};
    elements[this.refs.inputEmail.name] = this.refs.inputEmail.value;
    elements[this.refs.inputPassword.name] = this.refs.inputPassword.value;
    console.log(elements);
  }
}

const form = document.querySelector(".login-form");
// sumbit form event
form.addEventListener('submit', function(event) {
  // cansel form submit
  event.preventDefault();

  // set object reference
  const inputEmail = this.querySelector('[name=email]');
  const inputPassword = this.querySelector('[name=password]');
  formValidator.setRefs(inputEmail, inputPassword);

  // if form check validation generate finale result
  // else alert error message
  const validation = formValidator.checkFields();
  if(validation) {
    formValidator.generateResultObject();
  } else {
    alert("You have to fill all fields")
  }

  // clear form fields
  this.reset();
});