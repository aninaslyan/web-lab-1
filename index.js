// 1
function getTextLanguage(text) {
    let detectedLanguage;
    let detectedUnicodeRange;

    if (!text) return 'No text typed';

    for (let i = 0; i < text.length; i++) {
        if (detectedLanguage) {
            if (!(text.charCodeAt(i) >= detectedUnicodeRange[0] && text.charCodeAt(i) <= detectedUnicodeRange[1])) {
                return 'You printed multiple languages';
            }
            continue;
        }
        for (let j = 0; j < Object.keys(unicodeList).length; j++) {
            const unicode = Object.keys(unicodeList)[j];
            const range = unicode.split('-');
            if (text.charCodeAt(i) >= range[0] && text.charCodeAt(i) <= range[1]) {
                detectedLanguage = unicodeList[unicode];
                detectedUnicodeRange = range;
                break;
            }
        }
    }
    return detectedLanguage;
}

// 2
function palindromeRearranging(inputString) {
    let obj = {};
    let objArr;
    let countOfOdd = 0;

    for (let i of inputString) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = obj[i] + 1;
        } else {
            obj[i] = 1;
        }
    }

    objArr = Object.values(obj);

    if (inputString.length % 2 !== 0) {
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i] % 2 !== 0) {
                countOfOdd++;
            }
            if (countOfOdd > 1) {
                return false;
            }
        }
    } else {
        return objArr.every(val => val % 2 === 0);
    }

    return true
}

// 3
function arrayChange(inputArray) {
    let moves = 0;

    for (let i = 0; i + 1 < inputArray.length; i++) {
        if (inputArray[i] - inputArray[i + 1] >= 0)
            if (inputArray[i] - inputArray[i + 1] === 0) {
                moves++;
                inputArray[i + 1]++;
            } else {
                moves += inputArray[i] - inputArray[i + 1] + 1;
                inputArray[i + 1] += inputArray[i] - inputArray[i + 1] + 1;
            }
    }
    return moves;
}
