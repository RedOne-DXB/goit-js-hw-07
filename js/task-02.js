const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.createElement('ul');
ulList.setAttribute('id', 'ingredients')


const ingredientsList = ingredients.map(ingredient => {
    let newLi = document.createElement('li');
    newLi.textContent = ingredient;
    ulList.appendChild(newLi);
});

document.body.appendChild(ulList);

console.log(ulList);





