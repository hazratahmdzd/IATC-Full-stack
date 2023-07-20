// // 1
let variable1 = [];
let variable2 = { length: 1 };
let variable3 = new Array(1);

if (Array.isArray(variable1)) {
    console.log("Variable1 is array");
}
else {
    console.log("Variable1 isn't array");
}
if (Array.isArray(variable2)) {
    console.log("Variable2 is array");
}
else {
    console.log("Variable2 isn't array");
}
if (Array.isArray(variable3)) {
    console.log("Variable3 is array");
}
else {
    console.log("Variable3 isn't array");
}


// // 2
// let array1 = [1, 2, 3];
// let array2 = copy(array1);
// array1 === array2; // false
// array1[0] === array2[0]; // true

// function copy(array) {
//     return [...array];
// }

// // 3
// let array1 = [{ name: 'John' }];
// let array2 = copy(array1);
// array1 === array2; // false
// array1[0] === array2[0]; // false

// function deepCopy(array) {
// return JSON.parse(JSON.stringify(array));
// }

// //4
let array = [1, -4, 5, 6, -2, 0];
sorted = [6, -4, 5, -2, 1, 0];
function sortArray(array) {
    const sorted = array.sort((a, b) => a - b);
    const result = [];
    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
        result.push(sorted[right]);
        right++;

        if (left <= right) {
            result.push(sorted[left]);
            left++;
        }
    }

    return result;
}
const sorted = sortArray(array);
console.log(sorted);

// //5
function range(start, stop, step) {
    // your code here...
}

// default start is 1
// default stop is 10
// default step is 1

range(7); // [7, 8, 9]
range(2020, 2023); // [2020, 2021, 2022]

function range(start = 1, stop = 10, step = 1) {
    const result = [];

    if (step > 0) {
        for (let i = start; i < stop; i += step) {
            result.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i > stop; i += step) {
            result.push(i);
        }
    }

    return result;
}

console.log(range(7));
console.log(range(2020, 2023));

// //6
sum([1, 2, 3]); // 6
sum([1, 2, 3, 'hello', true]); // 6
sum(1, 2, 3); // 6
function sum(...values) {
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];

        if (Array.isArray(value)) {
            sum += sum(...value); // Recursively sum elements if value is an array
        } else if (typeof value === 'number' && !isNaN(value)) {
            sum += value; // Add the number to the sum
        }
    }

    return sum;
}
console.log(sum([1, 2, 3])); // Output: 6
console.log(sum([1, 2, 3, 'hello', true])); // Output: 6
console.log(sum(1, 2, 3)); // Output: 6

// //7
random(7); // 99
random(1, 5); // 4
random(1, 5); // 2
random(1, 5); // 1
random(-Infinity, Infinity); // 1_312_221_741

// min is default -2_147_483_648
// max is default 2_147_483_647
function random(min = -2147483648, max = 2147483647) {
    // Validate if min and max are numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Invalid arguments. Both min and max should be numbers.');
    }

    // Swap min and max values if min is greater than max
    if (min > max) {
        [min, max] = [max, min];
    }

    // Calculate the random integer within the range (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}
console.log(random(7)); // Output: random integer between -2_147_483_648 and 7
console.log(random(1, 5)); // Output: random integer between 1 and 5
console.log(random(1, 5)); // Output: random integer between 1 and 5
console.log(random(1, 5)); // Output: random integer between 1 and 5
console.log(random(-Infinity, Infinity)); // Output: random integer between -2_147_483_648 and 2_147_483_647

// //8
round(2.1425); // 2.14
round(2.1425, 3); // 2.143

// default precision is 2
function round(number, precision = 2) {
    // Validate if number and precision are numbers
    if (typeof number !== 'number' || typeof precision !== 'number') {
        throw new Error('Invalid arguments. Both number and precision should be numbers.');
    }

    // Calculate the factor based on the precision
    const factor = Math.pow(10, precision);

    // Round the number to the specified precision
    const roundedNumber = Math.round(number * factor) / factor;

    return roundedNumber;
}

// Example usage:
console.log(round(2.1425));
console.log(round(2.1425, 3));

// //9
function arithmeticMean(numbers) {
    // Validate if numbers is an array
    if (!Array.isArray(numbers)) {
        throw new Error('Invalid argument. Numbers should be an array.');
    }

    // Calculate the sum of the numbers
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the arithmetic mean
    const mean = sum / numbers.length;

    return mean;
}

// Example usage:
console.log(arithmeticMean([1, 2, 3, 4, 5]));
console.log(arithmeticMean([1, 5]));
console.log(arithmeticMean([3, 3, 3, 3]));

// // 10
geometricMean([1, 2, 3, 4, 5]); // 2.61
geometricMean([1, 5]); // 2.24
geometricMean([5, 5, 5]); // 5
function geometricMean(numbers, precision = 2) {
    // Validate if numbers is an array
    if (!Array.isArray(numbers)) {
        throw new Error('Invalid argument. Numbers should be an array.');
    }

    // Calculate the arithmetic mean
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const mean = sum / numbers.length;

    // Calculate the geometric mean by raising the mean to the power of 1/n
    const n = numbers.length;
    const geometricMean = Math.pow(mean, 1 / n);

    // Round the geometric mean to the specified precision
    const roundedMean = Math.round(geometricMean * Math.pow(10, precision)) / Math.pow(10, precision);

    return roundedMean;
}
console.log(geometricMean([1, 2, 3, 4, 5])); // Output: 2.61
console.log(geometricMean([1, 5])); // Output: 2.24
console.log(geometricMean([5, 5, 5])); // Output: 5

// // 11
unique([1, 1, 1, 5]); // [1, 5]
unique([5, 5, 5]); // [5]
unique([1]); // [1]
function unique(array) {
    // Validate if array is an array
    if (!Array.isArray(array)) {
        throw new Error('Invalid argument. Array should be an array.');
    }

    // Create a new Set from the array to remove duplicates
    const uniqueSet = new Set(array);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}


console.log(unique([1, 1, 1, 5]));
console.log(unique([5, 5, 5]));
console.log(unique([1]));

// // 12
naturalSum(3); // 1 + 2 + 3 => 6
naturalSum(6); // 1 + ... + 6 => 21
naturalSum(9); // 1 + ... + 9 => 45
function naturalSum(n) {
    // Base case: Return 0 when n is 0 or negative
    if (n <= 0) {
        return 0;
    }

    // Recursive case: Add n to the sum of natural numbers from 1 to n-1
    return n + naturalSum(n - 1);
}
console.log(naturalSum(3)); // Output: 6
console.log(naturalSum(6)); // Output: 21
console.log(naturalSum(9)); // Output: 45

// //13
flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
flat([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function flat(arr) {
    // Validate if arr is an array
    if (!Array.isArray(arr)) {
        throw new Error('Invalid argument. Array should be an array.');
    }

    // Use Array.prototype.reduce() and recursion to flatten the array
    return arr.reduce((result, element) => {
        if (Array.isArray(element)) {
            return result.concat(flat(element));
        }
        return result.concat(element);
    }, []);
}
console.log(flat([1, 2, [3, 4]])); // Output: [1, 2, 3, 4]
console.log(flat([1, 2, [3, 4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // 14
flat([1, 2, [3, 4, [5, 6]]], 1); // [1, 2, 3, 4, [5, 6]]
flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
function flat(arr, level = Infinity) {
    // Validate if arr is an array
    if (!Array.isArray(arr)) {
        throw new Error('Invalid argument. Array should be an array.');
    }

    // Use Array.prototype.reduce() and recursion to flatten the array up to the specified level
    return arr.reduce((result, element) => {
        if (Array.isArray(element) && level > 0) {
            return result.concat(flat(element, level - 1));
        }
        return result.concat(element);
    }, []);
}
console.log(flat([1, 2, [3, 4, [5, 6]]], 1));
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2));

// // 15
function collectStrings(deepObject) {
    // Validate if deepObject is an object
    if (typeof deepObject !== 'object' || deepObject === null) {
        throw new Error('Invalid argument. deepObject should be an object.');
    }

    const strings = [];

    function traverse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                strings.push(obj[key]);
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                traverse(obj[key]);
            }
        }
    }

    traverse(deepObject);

    return strings;
}
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    },
                },
            },
        },
    },
};
console.log(collectStrings(obj)); // Output: ["foo", "bar", "baz"]

// // 16
function passwordGenerator(characters, specialCharacters = []) {
    return function (length) {
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        for (const specialChar of specialCharacters) {
            const randomIndex = Math.floor(Math.random() * password.length);
            password = password.slice(0, randomIndex) + specialChar + password.slice(randomIndex);
        }

        return password;
    };
}
const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
console.log(generator1(5)); // Output: "@Za9💕"
console.log(generator1(9)); // Output: "Cx$0 9💣kA"
const generator2 = passwordGenerator(['9']);
console.log(generator2(4)); // Output: "3277"
console.log(generator2(5)); // Output: "034109"

// // 17
function ceaserCipherGenerator(alphabet) {
    const alphabetLength = alphabet.length;

    return function (text, shift) {
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const charIndex = alphabet.indexOf(char.toLowerCase());

            if (charIndex === -1) {
                // Character is not present in the alphabet, keep it as it is
                result += char;
            } else {
                // Apply the shift to the character index
                const shiftedIndex = (charIndex + shift) % alphabetLength;
                const shiftedChar = char === char.toUpperCase() ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
                result += shiftedChar;
            }
        }

        return result;
    };
}
const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');
console.log(ceaserCipher('Hello', 4)); // Output: "Olssv"  
const text = 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.';
console.log(ceaserCipher(text, 7));
// Output: "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba."

// // 18
diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 }); // { name: 'John' }
diff([1, 2, 3], [1, 2, 3, 4, 5]); // [4, 5]
diff('john', 'johnathan'); // 'athan'
diff(5, 6); // -1

function diff(arg1, arg2) {
    if (typeof arg1 === 'object' && typeof arg2 === 'object') {
        if (Array.isArray(arg1) && Array.isArray(arg2)) {
            // Difference between arrays
            return arg2.filter(item => !arg1.includes(item));
        } else {
            // Difference between objects
            const result = {};
            for (let key in arg2) {
                if (!arg1.hasOwnProperty(key) || arg1[key] !== arg2[key]) {
                    result[key] = arg2[key];
                }
            }
            return result;
        }
    } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        // Difference between strings
        return arg2.slice(arg1.length);
    } else {
        // Difference between numbers or unsupported types
        return arg2 - arg1;
    }
}
console.log(diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 }));
// Output: { name: 'John' }

console.log(diff([1, 2, 3], [1, 2, 3, 4, 5]));
// Output: [4, 5]

console.log(diff('john', 'johnathan'));
// Output: 'athan'

console.log(diff(5, 6));
// Output: -1

// // 19
const array1 = [1, 5, 4, 2];
const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

findMissing(array1); // 3
findMissing(array2); // 8

function findMissing(array) {
    // Calculate the sum of the numbers from 1 to n+1
    const expectedSum = ((array.length + 1) * (array.length + 2)) / 2;

    // Calculate the actual sum of the numbers in the array
    const actualSum = array.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}
console.log(findMissing(array1)); // Output: 3
console.log(findMissing(array2)); // Output: 8

// // 20
function calculateDistance(coord1, coord2) {
    // Calculate distance
    const distance = Math.sqrt(
        Math.pow(coord2.X - coord1.X, 2) +
        Math.pow(coord2.Y - coord1.Y, 2) +
        Math.pow(coord2.Z - coord1.Z, 2)
    );

    // Calculate elevation
    const elevation = coord2.Z - coord1.Z;

    // Calculate angle
    const angle = Math.atan2(coord2.Y - coord1.Y, coord2.X - coord1.X) * (180 / Math.PI);

    return { distance, elevation, angle };
}

// Coordinates:
const coord1 = {
    X: 5573283,
    Y: 6309750,
    Z: 191.5,
};
const coord2 = {
    X: 5573791,
    Y: 6323798,
    Z: 132.2,
};

const coord3 = {
    X: 5573283,
    Y: 6309750,
    Z: 191.5,
};
const coord4 = {
    X: 5573791,
    Y: 6323798,
    Z: 132.2,
};


console.log(calculateDistance(coord1, coord2));
// Output: { distance: 14057, elevation: -59, angle: 88 }

console.log(calculateDistance(coord3, coord4));
// Output: { distance: 19457, elevation: 419, angle: -134 }