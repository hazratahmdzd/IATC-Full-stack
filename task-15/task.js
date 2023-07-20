// 1
function User() { }

const user = new User();

console.log('user instanceof User', user instanceof User); // true

// 2
function User() { }
function Employee() { }

Employee.prototype = Object.create(User.prototype);

const e = new Employee();

console.log('e instanceof Employee', e instanceof Employee); // true
console.log('e instanceof User', e instanceof User); // true

// 3
function User() { }
function Weirdo() { }

function make(constructor) {
    return new constructor();
}

const weirdo = new Weirdo();

console.log('weirdo instanceof Weirdo', weirdo instanceof Weirdo); // false
console.log('weirdo instanceof User', weirdo instanceof User); // true

// 4
function* rangeGenerator(start, count, step) {
    let current = start;
    for (let i = 0; i < count; i++) {
        yield current;
        current += step;
    }
}

function range(start = 0, count = 10, step = 1) {
    return [...rangeGenerator(start, count, step)];
}

console.log(range()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(range(1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(2020, 3)); // [2020, 2021, 2022]

// 5
// type Year = 1970 ...;
// type Month = 0 ... 11;
// type Quarter = 1 ... 4;

function lastThreeYears(date, mode = 'year') {
    const currentYear = date.getFullYear();
    const years = [currentYear - 2, currentYear - 1, currentYear];

    if (mode === 'year') {
        return years;
    } else if (mode === 'month') {
        const result = {};
        years.forEach((year) => {
            result[year] = Array.from({ length: 12 }, (_, i) => i);
        });
        return result;
    } else if (mode === 'quarter') {
        const result = {};
        years.forEach((year) => {
            result[year] = Array.from({ length: 4 }, (_, i) => i + 1);
        });
        return result;
    }

    return years;
}

const date = new Date(2023, 5, 30);

console.log(lastThreeYears(date));
// const res = [2020, 2021, 2022]

console.log(lastThreeYears(date, 'year'));
// const res = [2020, 2021, 2022]

console.log(lastThreeYears(date, 'month'));
// const res = {
//   2020: [6, 7, 8, 9, 10, 11],
//   2021: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   2022: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   2023: [0, 1, 2, 3, 4, 5],
// }

console.log(lastThreeYears(date, 'quarter'));
// const res = {
//   2020: [2, 3, 4],
//   2021: [1, 2, 3, 4],
//   2022: [1, 2, 3, 4],
//   2023: [1],
// }


// 6 What will we see in console
new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    });
}).then(() => {
    console.log('promise');
});

setTimeout(() => {
    console.log('timeout');
});

console.log('hello');

requestIdleCallback(() => {
    console.log('requestIdleCallback');
});
// In the console, you will see the following output:
// hello
// requestIdleCallback
// timeout 
// promise 


// 7 What will we see in console
setTimeout(() => console.log('timeout 1'));

Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

Promise.resolve().then(() => console.log('promise 1'));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 3'));

// In the console, you will see the following output:
// promise 1 
// promise 2
// timeout 1  
// timeout 2  
// timeout 3  

// 8 What will we see in console 
globalThis.name = 'foo';

function log(name) {
    new Function('\tconsole.log(name);')();
}

log('bar');

// wee will see in console : foo 

// 9 What will we see in console 
const obj = {
    name: 'foo',
    log: function () {
        console.log(this.name);
    },
};

const log = obj.log;

log();

// we will see in console : undefined 


// 10
const person = {
    name: 'foo',
    age: 20,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.age;
        } else if (hint === 'string') {
            return this.name;
        } else {
            return this.name;
        }
    },
};

console.log(Number(person) + 10); // 30
`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`; // 'foo is adult'
