const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulListRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
    let newLi = document.createElement('li');
    newLi.textContent = ingredient;
    ulListRef.appendChild(newLi);
});

document.body.appendChild(ulListRef);

console.log(ulListRef);





