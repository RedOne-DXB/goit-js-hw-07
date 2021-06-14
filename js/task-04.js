const spanRef = document.getElementById('value');
console.log(spanRef);
const counterValue = spanRef;
counterValue.textContent = value;
console.log(counterValue);

const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');

incrementBtn.addEventListener('click', increment => {
    console.log('Раз-раз!')
});

function increment (event) {
    return counterValue.value += 1;
}


// const decrement = function (y) {
//     for (let y = 0; y < decrement.length; y--) {
//         let count = 0;
//         count -= y;

//         return count;
//     }
// }


