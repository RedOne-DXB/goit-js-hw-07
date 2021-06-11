const itemCount = document.querySelectorAll('.item');
console.log(`В списке ${itemCount.length} категории`);

const parentUlRef = document.getElementById('categories');
const elementList = parentUlRef.querySelectorAll('ul');
const array = [...elementList];

array.forEach(function (el) {
  const headingRef = el.previousElementSibling.textContent;
  console.log(`Категория: ${headingRef}`);
 
  const listItemsCount = el.children.length;
   console.log(`Количество элементов: ${listItemsCount}`)
});
