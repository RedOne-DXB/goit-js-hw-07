let counterValue = document.getElementById('value');
counterValue.textContent = value;
console.log(counterValue);

const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');

incrementBtn.addEventListener('click', increment => {
    console.log('Раз-раз!')
   });

function increment() {
    let count = 0;
    counterValue = ++count;
}



