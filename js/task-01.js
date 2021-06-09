const categoryRef = document.querySelectorAll('#categories>li');
console.dir(`В списке ${categoryRef.length} категории`);

const categoryListRef = document.querySelectorAll('.item');
console.log(categoryListRef);

const displayCategory = categoryListRef.forEach((category) => {
    console.log(category.querySelector('h2'))
});