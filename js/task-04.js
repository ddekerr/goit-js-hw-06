const counter = {  
  value : 0,
  refs: {},

  // Set all counter references to this.refs
  setRefs(selector)  {
    this.refs.container = document.querySelector(selector);
    this.refs.incrementBtn = document.querySelector('[data-action="increment"]');
    this.refs.decrementBtn = document.querySelector('[data-action="decrement"]');
    this.refs.value = document.querySelector('#value');
  },

  // increase value to 1
  increment() {
    this.value += 1;
  },
  
  // decrease value to 1
  decrement() {
    this.value -= 1;
  },

  // update content of refs.value
  showValueInHtml() {
    this.refs.value.textContent = this.value;
  }
};

// set object references
counter.setRefs("#counter");

// event click for increment button
counter.refs.incrementBtn.addEventListener('click', () => {
  counter.increment();
  counter.showValueInHtml();
});

// event click for decrement button
counter.refs.decrementBtn.addEventListener('click', () => {
  counter.decrement();
  counter.showValueInHtml();
});