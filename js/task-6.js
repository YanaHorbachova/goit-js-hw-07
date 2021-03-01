// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.querySelector("#validation-input");
const inputLengthRef = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur() {
  if (inputRef.value.length === inputLengthRef) {
    return (
      inputRef.classList.add("valid"), inputRef.classList.remove("invalid")
    );
  }
  return inputRef.classList.add("invalid"), inputRef.classList.remove("valid");
}
ы