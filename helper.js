function compareRange(inputText, charIndex, range) {
    return inputText.charCodeAt(charIndex) >= range.start && inputText.charCodeAt(charIndex) <= range.end;
}
