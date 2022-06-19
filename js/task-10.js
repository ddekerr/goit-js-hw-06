const BlockGenerator = {
  numberOfBlocks: 0,
  blocks: [],

  setNumberOfBlocks(value) {
    this.numberOfBlocks = value;
  },

  // generate colection of blocks and push it to this.blocks
  createBoxes() {
    for (let i = 1; i <= this.numberOfBlocks; i++) {
      const block = document.createElement('div');
      block.style.backgroundColor = getRandomHexColor();
      block.style.width = `${i * 10}px`;
      block.style.height = `${i * 10}px`;
      this.blocks.push(block);
    }  
  },

  // clear colection blocks
  destroyBoxes() {
    this.blocks = [];
  },

  getBlocks() {
    return this.blocks;
  }
}

// event for create button
const createBtn = document.querySelector('[data-create]');
createBtn.addEventListener('click', function() {

  // set the number of blocks from input element and create collection
  const inputValue = document.querySelector('input').value;
  BlockGenerator.setNumberOfBlocks(inputValue);
  BlockGenerator.createBoxes();

  // reneder colection on HTML page
  const containerForBlocks = document.querySelector("#boxes");
  containerForBlocks.append(...block);

});

// event for destroy button
const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.addEventListener('click', function() {
  // call method clear colection
  BlockGenerator.destroyBoxes();
  // clear HTML page
  document.querySelector("#boxes").innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}