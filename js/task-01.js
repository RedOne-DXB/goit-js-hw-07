const categoryRef = document.querySelector('#categories');
console.dir(`В списке ${categoryRef.children.length} категории`);

const titleRef = document.querySelector('h2');
console.log(`Категория: ${titleRef.textContent}`);

const categoryElements = document.querySelector('.item');
console.log(`Количество элементов: ${categoryElements.lastElementChild.children.length}`);
