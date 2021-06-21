const nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', event => {
            nameOutput.textContent = event.target.value;
    if (nameOutput.textContent.length === 0) {
       return nameOutput.textContent = 'незнакомец';
    } 
});


