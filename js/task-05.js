const nameInput = document.getElementById('name-input');
console.log(nameInput);
let nameOutput = document.getElementById('name-output');
console.log(nameOutput);

// nameInput.addEventListener('focus', e => {
//     nameInput.style.display = 'block';
// });

nameInput.addEventListener('input', e => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value.trim()) {
        return nameOutput.value;
    } else {
        nameOutput.textContent = e.currentTarget.value;
    }
});

