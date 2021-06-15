const nameInput = document.getElementById('name-input');
console.log(nameInput);
let nameOutput = document.getElementById('name-output');
console.log(nameOutput);

// nameInput.addEventListener('focus', e => {
//     nameInput.style.display = 'block';
// });

nameInput.addEventListener('blur', e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value = null) {
        return nameOutput;
    } else {
        nameOutput = e.currentTarget.value;
    }
});

