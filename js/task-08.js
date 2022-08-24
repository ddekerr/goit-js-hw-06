const refs = {
  inputEmail: document.querySelector('[name=email]'),
  inputPassword: document.querySelector('[name=password]'),
  form: document.querySelector(".login-form")
}

// sumbit form event
refs.form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  // cansel form submit
  e.preventDefault();
  await validation().then(generateResultObject)
  refs.form.reset()
}

// check fields for empty value
function validation() {
  const fields = [refs.inputEmail, refs.inputPassword];
  return new Promise((resolve, reject) => {
    if(fields.every(item => item.value !== '') ) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}

// generate final object to log result
function generateResultObject() {
  const elements = {
    email: refs.inputEmail.value,
    password: refs.inputPassword.value
  };
  console.log(elements);
}
