// let letters = ['s', 'z', 'k'];
// let target = 'a';
// // result: 'k'

// let letters2 = ['s', 'z', 'k', 'a'];
// let target2 = 'k';
// // result: 's'

// let targetCode = target.charCodeAt;
// let min = Infinity;
// let result;

// for ( let char in letters ) {
//     let charCode = char.charCodeAt;
//     let diff = charCode - targetCode;

//     if ( diff > 0 && diff < min ) {
//         min = diff;
//         result = toString.fromCharCode( targetCode + diff );
//     }
// }

// console.log(result);



// finding empty obj

// let obj1 = {};
// // result: object is empty

// let obj2 = {
// 	key: 'value',
// };
// // result: object is not empty

// if ( Object.keys(obj1).length === 0 ){
//     console.log('object is empty');
// }

// if ( Object.keys(obj1).length > 0 ){
//     console.log( 'object is not empty' );
// }
// if ( Object.keys(obj2).length = 0 ){
//     console.log('object is empty');
// }

// if ( Object.keys(obj2).length > 0 ){
//     console.log( 'object is not empty' );
// }


// cleaning nullish value 

// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// result: {
//   key2: 0,
//   key3: 'string'
// }
//

// for ( let key in obj ) {
//     if ( obj[key]===null ) {
//         delete obj[key];
//     }
// }

// console.log(obj);



//cleaning falsy values

// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };
// // result: {
// //   key3: 'string'
// // }
// //

// for ( let key in obj ) {
//     if ( obj[key] === null || obj[key] === 0 ) {
//         delete obj[key];
//     }
// }

// console.log(obj);
