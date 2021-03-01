// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameLabel = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener ('input', onInputChange);

function onInputChange(event) {
    console.log (event.currentTarget.value);
    nameLabel.textContent = event.currentTarget.value;
}