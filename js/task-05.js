const substituter = {
  inputValue: '',
  refs: {},

  // set all substituter references to this.refs
  setRefs(...selectors) {
    this.refs.inputElement = document.querySelector(selectors[0]);
    this.refs.outputElement = document.querySelector(selectors[1]);
  },  

  // update inputValue from inputElement
  updateInputValue() {
    this.inputValue = this.refs.inputElement.value;
  },

  // show content of inputElement in OutputElement
  showInputContent() {
    if (this.inputValue === '')
      this.refs.outputElement.innerHTML = 'Anonymous';
    else
      this.refs.outputElement.innerHTML = this.inputValue;
  }
}

// set object references
substituter.setRefs("#name-input", "#name-output");

// input event for inputElement
substituter.refs.inputElement.addEventListener('input', () => {
  substituter.updateInputValue();
  substituter.showInputContent();
});