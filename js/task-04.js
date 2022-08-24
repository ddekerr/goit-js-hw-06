class Counter {  
  #value = 0;

  increment() {
    this.#value += 1;
  }
  
  decrement() {
    this.#value -= 1;
  }

  get value() {
    return this.#value;
  }
};

const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value')
}

const counter = new Counter();

// event click for increment button
refs.incrementBtn.addEventListener('click', () => {
  counter.increment();
  refs.value.textContent = counter.value;
});

// event click for decrement button
refs.decrementBtn.addEventListener('click', () => {
  counter.decrement();
  refs.value.textContent = counter.value;
});