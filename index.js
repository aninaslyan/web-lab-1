// 1
function getTextLanguage(inputText) {
    let detectedLanguage;
    let detectedUnicodeRange;

    if (!inputText) return 'No text typed';

    const restructuredList = Object.keys(unicodeList).reduce((acc, curr) => {
        const range = curr.split('-');
        const language = unicodeList[curr];
        acc[language] = {
            start: range[0],
            end: range[1],
            language,
        }
        return acc;
    }, {});

    for (let i = 0; i < inputText.length; i++) {
        if (detectedLanguage) {
            if (!(compareRange(inputText, i, detectedUnicodeRange))) {
                return 'You printed multiple languages';
            }
            continue;
        }

        const restructuredListValues = Object.values(restructuredList);

        for (let j = 0; j < restructuredListValues.length; j++) {
            const range = restructuredListValues[j];
            if (compareRange(inputText, i, range)) {
                detectedLanguage = range.language;
                detectedUnicodeRange = range;
                break;
            }
        }
    }
    // todo do statistics
    return detectedLanguage;
}

// 2
function palindromeRearranging(inputString) {
    let obj = {};
    let objArr;
    let countOfOdd = 0;

    for (let i of inputString) {
        obj[i] = obj.hasOwnProperty(i) ? obj[i] + 1 : obj[i] = 1;
    }

    objArr = Object.values(obj);

    if (inputString.length % 2 !== 0) {
        objArr.forEach(strCount => {
            if (strCount % 2 !== 0) {
                countOfOdd++;
            }
            if (countOfOdd > 1) {
                return false;
            }
        });
    } else {
        return objArr.every(val => val % 2 === 0);
    }

    return true;
}

// 3
function arrayChange(inputArray) {
    let moves = 0;
    let changedArr = [...inputArray];

    for (let i = 0; i + 1 < changedArr.length; i++) {
        const currentElement = changedArr[i];
        let nextElement = changedArr[i + 1];

        if (currentElement - nextElement >= 0) {
            if (currentElement - nextElement === 0) {
                moves++;
                changedArr[i + 1]++;
            } else {
                moves += currentElement - nextElement + 1;
                changedArr[i + 1] += currentElement - nextElement + 1;
            }
        }
    }

    return {
        changedArr,
        moves
    };
}
