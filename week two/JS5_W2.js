// Map Function:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);

// Filter Function:
const numbersGreaterThan10 = numbers.filter(num => num > 10);

// forEach Function:
const strings = ['apple', 'banana', 'cherry'];
strings.forEach(str => console.log(str.toUpperCase()));

// Map Function:
const objects = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const objectNames = objects.map(obj => obj.name);

// Filter Function:
const filteredObjects = objects.filter(obj => obj.id === 1);

// forEach Function:
let sum = 0;
numbers.forEach(num => sum += num);


// Map Function:
const stringsToReverse = ['hello', 'world', 'javascript'];
const reversedStrings = stringsToReverse.map(str => str.split('').reverse().join(''));

// Filter Function:
const primeNumbers = numbers.filter(num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

// forEach Function:
const booleans = [true, false, true];
booleans.forEach((bool, index) => console.log(`Index ${index}: ${bool}`));

// Map Function:
const numbersToStrings = numbers.map(num => num.toString());

// Filter Function:
const duplicateValues = [1, 2, 2, 3, 3, 3];
const uniqueValues = duplicateValues.filter((value, index, self) => self.indexOf(value) === index);

// forEach Function:
const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
people.forEach(person => console.log(person.name));


// Map Function:
const stringsWithIndex = strings.map((str, index) => `${str}-${index}`);

// Filter Function:
const evenNumbers = numbers.filter(num => num % 2 === 0);

// forEach Function:
const multipliedNumbers = [];
numbers.forEach(num => {
    const result = num * 2;
    multipliedNumbers.push(result);
    console.log(result);
});

// Map Function:
const incrementedNumbers = numbers.map((num, index) => num + index);

// Filter Function:
const objectsToFilter = [{ value: 3 }, { value: 7 }, { value: 2 }];
const filteredObjectsWithValueGreaterThan5 = objectsToFilter.filter(obj => obj.value > 5);

// forEach Function:
const stringLengths = ['apple', 'banana', 'cherry'];
stringLengths.forEach(str => console.log(str.length));


// Map Function:
const capitalizedStrings = strings.map(str => str.toUpperCase());

// Filter Function:
const averageValue = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
const valuesGreaterThanAverage = numbers.filter(num => num > averageValue);

// forEach Function:
const dividedNumbers = [];
numbers.forEach(num => {
    const result = num / 2;
    dividedNumbers.push(result);
    console.log(result);
});

// Map Function:
const negativeNumbers = [-1, -2, -3];
const absoluteNumbers = negativeNumbers.map(num => Math.abs(num));

// Filter Function:
const objectsWithNullValues = [{ value: null }, { value: 5 }, { value: undefined }];
const objectsWithNonNullValues = objectsWithNullValues.filter(obj => obj.value !== null && obj.value !== undefined);

// forEach Function:
const stringsWithA = ['apple', 'banana', 'cherry'];
let countStringsContainingA = 0;
stringsWithA.forEach(str => {
    if (str.includes('a')) {
        countStringsContainingA++;
    }
});


// Map Function:
const remainderNumbers = numbers.map(num => num % 3);

// Filter Function:
const perfectSquares = numbers.filter(num => Number.isInteger(Math.sqrt(num)));

// forEach Function:
const stringsWithLength = [];
strings.forEach(str => stringsWithLength.push({ string: str, length: str.length }));

// Map Function:
const repeatedStrings = strings.map(str => str.repeat(2));

// Filter Function:
const sortedNumbers = numbers.sort((a, b) => a - b);
const median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
const numbersLessThanMedian = numbers.filter(num => num < median);

// forEach Function:
const squareRoots = [];
numbers.forEach(num => {
    const sqrt = Math.sqrt(num);
    squareRoots.push(sqrt);
    console.log(sqrt);
});


// Map Function:
const objectsWithNewProperty = objects.map(obj => ({ ...obj, newProperty: 'new' }));

// Filter Function:
const mixedValues = [0, 'hello', '', true, false, null, undefined];
const truthyValues = mixedValues.filter(value => Boolean(value));

// forEach Function:
const factorial = num => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};
numbers.forEach(num => console.log(factorial(num)));

// Callback Function:
const callbackMessage = callback => callback('Message');
const logMessage = message => console.log(message);
callbackMessage(logMessage);

// Callback Function:
const processArray = (callback, array) => array.forEach(item => callback(item));
processArray(console.log, numbers);

// Higher-Order Function:
const multiplier = factor => input => input * factor;
const multiplyBy2 = multiplier(2);
console.log(multiplyBy2(5));


// Callback Function:
const processValue = (positiveCallback, negativeCallback, value) => {
    if (value > 0) {
        positiveCallback(value);
    } else if (value < 0) {
        negativeCallback(value);
    }
};
const positiveCallback = value => console.log(`Positive: ${value}`);
const negativeCallback = value => console.log(`Negative: ${value}`);
processValue(positiveCallback, negativeCallback, -10);

// Higher-Order Function:
const applyCallbackToArray = (callback, array) => array.map(callback);

// Callback Function:
const callTwice = callback => {
    const result1 = callback();
    const result2 = callback();
    console.log(result1, result2);
};
callTwice(() => 'Called');

// Higher-Order Function:
const repeatFunction = (func, times) => input => {
    let result = input;
    for (let i = 0; i < times; i++) {
        result = func(result);
    }
    return result;
};
const multiplyBy3 = num => num * 3;
const applyMultiplyBy3Twice = repeatFunction(multiplyBy3, 2);
console.log(applyMultiplyBy3Twice(2));
