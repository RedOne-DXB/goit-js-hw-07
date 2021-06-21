const sliderEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sliderEl.addEventListener('input', event => {
    textEl.style.fontSize = `${sliderEl.value}px`;
    console.log(textEl.style.fontSize);
});