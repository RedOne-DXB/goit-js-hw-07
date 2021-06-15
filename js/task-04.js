let getValue = document.getElementById('value');
let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
    getValue.textContent = counterValue += 1;
});

decrementBtn.addEventListener('click', () => {
        getValue.textContent = counterValue -= 1;
});





