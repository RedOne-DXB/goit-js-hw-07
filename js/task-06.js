const inputEl = document.querySelector('input');
const inputAtt = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', event => {
    const currentTarget = event.currentTarget;
    const val = currentTarget.value;
    const isValid = Number(inputAtt) === val.length;

    if (isValid) {
        currentTarget.classList.remove('invalid');
        currentTarget.classList.add('valid');   
    } else {
          currentTarget.classList.remove('valid');
        currentTarget.classList.add('invalid'); 
    }
});
