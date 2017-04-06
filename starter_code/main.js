// Question 1
console.log("Question 1:");

function maxOfTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}
console.log(maxOfTwoNumbers(4, 5));
console.log(maxOfTwoNumbers(25, 15));
console.log(maxOfTwoNumbers(35, 35));

// Question 2
console.log("Question 2:");

function maxOfThree(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber;
    } else {
        if (secondNumber > firstNumber && secondNumber > thirdNumber) {
            return secondNumber;
        } else {
            return thirdNumber;
        }
    }
}
console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(1, 13, 2));
console.log(maxOfThree(23, 2, 1));

// Question 3
console.log("Question 3:------");

function isCharacterAVowel(theCharacter) {
    switch (theCharacter.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        case "y":
            return "sometimes...";
        default:
            return false;
    }
}

console.log(isCharacterAVowel("W"));
console.log(isCharacterAVowel("A"));
console.log(isCharacterAVowel("a"));
console.log(isCharacterAVowel("w"));
console.log(isCharacterAVowel("y"));

// Question 4
console.log("Question 4A:-----");

function sumArray(arrayToSum) {
    var theSum = 0;
    for (var i = 0; i < arrayToSum.length; i++) {
        theSum += arrayToSum[i];
    }
    return theSum;
}

console.log(sumArray([1, 2, 3, 4]));


// Question 4
console.log("Question 4B:-----");

function multiplyArray(arrayToMultiply) {
    var theProduct = 1;
    for (var i = 0; i < arrayToMultiply.length; i++) {
        theProduct *= arrayToMultiply[i];
    }
    return theProduct;
}

console.log(multiplyArray([1, 2, 3, 4]));


// Question 5
console.log("Question 5:-----");

function numberOfArguments() {
    return arguments.length;
}

console.log(numberOfArguments(1, 2, 3, 4, 5, 6, 7));
console.log(numberOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6));

// Question 6
console.log("Question 6:-----");

function reverseString(stringToReverse) {
    var reversedString = "";
    for (i = stringToReverse.length - 1; i >= 0; i--) {
        reversedString += stringToReverse[i];
    }
    return reversedString;
};

console.log(reverseString("jag testar"));

// Question 7
console.log("Question 7:-----");

function findLongestWord(wordArray) {
    var longestWordLength = 0;
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWordLength) {
            longestWordLength = wordArray[i].length;
        }
    }
    return longestWordLength;
}

console.log(findLongestWord(["He", "said", "she", "said", "whatever"]));

// Question 8
console.log("Question 8:-----");

function filterLongWords(inputArray, i) {
    var outputArray = [];
    var outputArrayIndex = 0;
    for (var j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length > i) {
            outputArray[outputArrayIndex] = inputArray[j];
            outputArrayIndex++;
        }
    }
    return outputArray;
}

console.log(filterLongWords(["He", "said", "she", "said", "whatever"], 3));

// Bonus 1
//??????


// Bonus 2
// function charactersOccurencesCount() {

// }
