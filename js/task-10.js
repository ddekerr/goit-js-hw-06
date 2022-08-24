class BlockGenerator {
  #numberOfBlocks;
  #blocks;
  #nextBlockSize;

  constructor() {
    this.#numberOfBlocks = 0;
    this.#blocks = [];
    this.#nextBlockSize = 30;
  }

  get blocks() {
    return this.#blocks;
  }

  // generate colection of blocks and push it to this.blocks
  createBoxes(value) {
    for (let i = 1; i <= value; i+=1) {
      const block = {
        backgroundColor: getRandomHexColor(),
        width: this.#nextBlockSize,
        height: this.#nextBlockSize
      };
      this.#blocks.push(block);

      this.#numberOfBlocks += 1;
      this.#nextBlockSize += 10;
    }
  }

  destroyBoxes() {
    this.#numberOfBlocks = 0;
    this.#blocks = [];
    this.#nextBlockSize = 30;
  }
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxContainer: document.querySelector('#boxes')
}

const blockGenerator = new BlockGenerator();

refs.createBtn.addEventListener('click', function() {
  // set the number of blocks from input element and create collection
  blockGenerator.createBoxes(refs.input.value);

  const markup = generateMarkup(blockGenerator.blocks);
  refs.boxContainer.innerHTML = markup
});

refs.destroyBtn.addEventListener('click', function() {
  blockGenerator.destroyBoxes();
  refs.boxContainer.innerHTML = "";
});

function generateMarkup(blocks) {
  return blocks.map(({backgroundColor, width, height}) => {
    return `<div style="
      background-color:${backgroundColor};
      width:${width}px;
      height:${height}px">
    </div>`
  }).join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}