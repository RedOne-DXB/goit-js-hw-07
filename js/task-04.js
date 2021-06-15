// const counterValue = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };


// const counter = document.getElementById('value');
// console.log(counterValue);

// const incrementBtn = document.querySelector('[data-action = "increment"]');
// const decrementBtn = document.querySelector('[data-action = "decrement"]');

// incrementBtn.addEventListener('click', e => {
//     console.log('Просто проверка работы прослушивания события')
//     counterValue.increment();
//     counter.textContent = counterValue.value
// });
   
// decrementBtn.addEventListener('click', e => {
//     console.log('Просто проверка работы прослушивания события')
//     counterValue.decrement();
//     counter.textContent = counterValue.value
//    });

let getValue = document.getElementById('value');
console.log(getValue);

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
    getValue.textContent = counterValue += 1;
});

decrementBtn.addEventListener('click', () => {
        getValue.textContent = counterValue -= 1;
});





