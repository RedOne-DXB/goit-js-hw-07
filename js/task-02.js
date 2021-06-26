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
  
  return newLi;
});

ulListRef.append(...ingredientsList);
console.log(ulListRef);





