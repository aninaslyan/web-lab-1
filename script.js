const textInput = document.getElementById('text-input');
const outputLanguage = document.getElementById('output-language');

function getLanguageClickHandler() {
    const text = textInput.value;
    outputLanguage.innerHTML = getTextLanguage(text);
}
