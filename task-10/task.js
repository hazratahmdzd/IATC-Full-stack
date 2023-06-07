// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// output: Salam Azerbaycan
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]
// output: javascript is bomba

// const asciiCodes = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
// let result = '';
// // i = 0 => 10
// for (let i = 0; i < asciiCodes.length; i++) {
// 	// i = 0 => 104
// 	// h
// 	let letter = String.fromCharCode(asciiCodes[i]);
// 	// result = '' + 'h'
// 	result += letter;
// 	console.log(i, letter, result);
// 	// debugger;
// }
// console.log(result);

// 'H'.charCodeAt(0); // 72
// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba

// // let word = 'hello world';
// // let word = 'Salam Azerbaycan';
// let word = 'javascript is bomba';
// let result = [];
// for (let i = 0; i < word.length; i++) {
// 	let code = word.charCodeAt(i);
// 	result.push(code);
// }
// console.log(word, result);

// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

// const str = 'hello world';
// const result = [];
// for (let i = 0; i < str.length; i++) {
// 	let letter = str[i];
// 	result.push(letter);
// }
// console.log(str, result);

// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

// const str = 'hello world';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let result = '';
// // debugger;
// for (let i = 0; i < str.length; i++) {
// 	let letter = str[i];
// 	let isVowel = false;
// 	for (let j = 0; j < vowels.length; j++) {
// 		let vowel = vowels[j];

// 		if (letter === vowel) {
// 			isVowel = true;
// 		}
// 	}
// 	if (!isVowel) {
// 		result += letter;
// 	}
// }
// console.log({ str, result });

// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false


// let str = '123456789';
// let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] ;
// let isNumeric = true;

// for ( let i = 0; i < str.length; i++) {
//     if (!number.includes(str[i])) {
//         isNumeric = false;
//         break;
//     }
// }

// console.log(str, isNumeric);


// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false

// let str = '123456789';
// let number = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=' ] ;
// let isNumeric = true;

// for ( let i = 0; i < str.length; i++) {
//     if (number.includes(str[i])) {
//         isNumeric = false;
//         break;
//     }
// }

// console.log(str, isNumeric);

// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

// let word = 'HELLO WORLD!@#$%^&*()_+a';
// let strs = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// isNumber = true;

// for ( let i = 0; i < word.length; i++) {
//     let str = word[i];

//     if ( strs.includes(str) ) {
//         isNumber = false;
//         break;
//     }
// }

// console.log( word, isNumber );


// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld
// example: a man who thinks about the end, can not be a hero


// let str = 'javascript is bomba';
// let result = '';
// result += str[0].toUpperCase();

// for ( let i = 1; i < str.length; i++ ) {

//     let letter = str[i];


//     if ( letter != ' ' ) {
        
//         result += letter;
//     }
//     else  {
        
//         letter = str[ i + 1 ].toUpperCase();
//         result += letter;
//         i++;
//     }
// }

// console.log( str, result );


// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero


// let str = 'javascript is bomba';

// let charMap = {};
// let charStr = '';

// for ( let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if ( !charMap[char] ) {
//         charMap[char] = true;
//         charStr += char;
//     }
// }

// console.log( str, charStr );


// 10. Write a JavaScript program to convert a string into camel case.
// example: hello world
// output: helloWorld
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero


// let str = 'hello world';
// let result = '';

// for ( let i = 0; i < str.length; i++ ) {

//     let letter = str[i];


//     if ( letter != ' ' ) {
        
//         result += letter;
//     }
//     else  {
        
//         letter = str[ i + 1 ].toUpperCase();
//         result += letter;
//         i++;
//     }
// }

// console.log( str, result );


// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world
// example: a man who thinks about the end, can not be a hero


// let str = 'javascript is bomba';
// let result = '';

// for ( let i = 0; i < str.length; i++) {
//     let letter = str[i];
    
//     if ( letter != ' ') {
//         result += letter;
//     }
//     else {
//         letter = '_';
//         result += letter;
//     }
    
// }

// console.log( str, result );


// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world
// example: a man who thinks about the end, can not be a hero
// example: javascript is bomba


// let str = 'javascript is bomba';
// let result = '';

// for ( let i = 0; i < str.length; i++) {
//     let letter = str[i];
    
//     if ( letter != ' ') {
//         result += letter;
//     }
//     else {
//         letter = '-';
//         result += letter;
//     }
    
// }

// console.log( str, result );


// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true


// let str = 'hello world';
// // let str = 'level';

// let words = [ 'madam', 'civic', 'radar', 'level', 'rotor', 'kayak', 'reviver', 'racecar', 'redder', 'refer' ];
// let word;

// if (words.includes(str)) {
//     word = true;
// }
// else {
//     word = false;
// }

// console.log( str, word );


// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: the quick brown fox jumps over the lazy dog. // true
// example: the quick brown fox jumps over the dog. // false


// let sentence = 'the quick brown fox jumps over the dog.';

// let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let strs = [];

// let isNumber = true;

// for ( let i = 0; i < sentence.length; i++) {
//     let str = sentence[i];
//     strs.push(str);
// }

// for ( let j = 0; j < alphabet.length; j++) {
//     if ( !strs.includes(alphabet[j]) ) {
//         isNumber = false;
//     }
// }

// console.log( sentence, isNumber );


// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false


// let word1 = 'cinema';
// let word2 = 'iceman';

// let array1 = [];

// isArray = true;

// for ( let i = 0; i < word1.length; i++){
//     let str1 = word1[i];
//     array1.push(str1);
// }
// for ( let j = 0; j < word2.length; j++) {
//     let str2 = word2[j];
    
//     if ( !array1.includes(str2) ) {
//         isArray = false;
//         break;
//     }
// }

// console.log( word1, word2, isArray);