const nameInput = document.getElementById('name-input');
console.log(nameInput);
let nameOutput = document.getElementById('name-output');
console.log(nameOutput);

const defaultVal = nameOutput.defaultValue;


nameInput.addEventListener('input', event => {
    if (nameOutput.value == 0) {
        defaultVal; // {`незнакомец`} ??? 
    } else {
        nameOutput.textContent = event.target.value;
    }
});


