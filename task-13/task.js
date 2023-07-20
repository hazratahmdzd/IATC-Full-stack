// 1. // Create an object named "person" with properties: name, age, and occupation. // Add a method to the object that returns the person's full name.

const person = {
    firstName: 'Cavad',
    lastName: 'Ahmadzada',
    age: 12,
    occupation: 'student',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());

// 2. // Create an object named "math" with properties: PI, E, SQRT2, and random. // Use the math object to log a random number between 0 and 1 to the console.

const math1 = {
    PI: Math.PI,
    E: Math.E,
    SQRT2: Math.SQRT2,
    random: Math.random()
  };
  
  console.log(math1.random);  

// 3. // Create a string variable and store your full name in it. // Use the string method to convert the string to uppercase.

let string = 'Hazrat Ahmadzada';
let upperCaseName = string.toUpperCase();

console.log( upperCaseName );

// 4. // Create a variable and assign it a number. // Use the Math object to round the number to the nearest integer.

let number1 = 5.4;
let number2 = 5.6;

console.log(number1, "~", Math.round(number1) );
console.log(number2, "~", Math.round(number2) );

// 5. // Create a variable and assign it a large number using BigInt. // Perform a mathematical operation (e.g., addition) on the BigInt number.

let bigInt = 580n;

console.log( bigInt + 399n )

// 6. // Create a new Date object and store the current date and time. // Use the Date object methods to get the current month and year.

let date = new Date();

const currentMonth = date.getMonth();
const currentFullYear = date.getFullYear();

console.log("Current Month:", currentMonth);
console.log("Current Year:", currentFullYear);

// 7. // Use the Math object to generate a random number between 1 and 10. // Calculate the square root of a given number using the Math object.

let randomNumber = Math.floor((Math.random()*10)+1); // between 1 and 10.

console.log( "Number:", randomNumber );
console.log( "SQRT:", Math.sqrt(randomNumber) );

// 8. // Create an object named "car" with properties: make, model, and year. // Add a method to the object that returns the car's full description.

const car = {
    make: 'BMW',
    model: 'M3',
    year: '2015',
    getFullDescription: function() {
        return this.make + " " + this.model + " " + this.year;
    }
}

console.log(car.getFullDescription());

// 9. // Create a string variable and store a sentence in it. // Use the string method to check if the sentence contains a specific word.

const sentence = "Cavad yaxsi oglandi, amma ders oxumur";
const word1 = "ders";
const word2 = "oyun";

console.log("Sentence:", sentence);

if ( sentence.includes(word1) ) {
    console.log( "Sentence contains this word:", word1  )
}
else {
    console.log( "Sentence doesn't contains this word:", word1 )
}
if ( sentence.includes(word2) ) {
    console.log( "Sentence contains this word:", word2  )
}
else {
    console.log( "Sentence doesn't contains this word:", word2 )
}

// 10. // Create a variable and assign it a negative number. // Use the Math object to get the absolute value of the number.

const negativeNumber = -7;
const absoluteValue = Math.abs(negativeNumber);

console.log("number:", negativeNumber);
console.log("Absolute Value:", absoluteValue);

// 11. // Create two Date objects representing different dates. // Use the Date object methods to calculate the difference between the two dates in days.

let date1 = new Date('2023-06-13');
let date2 = new Date('2023-06-30');

let difference = date1.getDate() - date2.getDate();
if( difference < 0 ) {
    difference = Math.abs(difference);
}

console.log(" First Date:", date1);
console.log(" Second Date:", date2);
console.log("Diferrence:", difference);

// 12. // Make an object named "date" // Add properties: day, month, year // day: 1-31 => default: today // month: 1-12 => default: today // year: 1970-2023 => default: today // Add methods: getDay, getMonth, getYear // Add methods: setDay, setMonth, setYear // Add method: getFullDate (returns full date in format: DD.MM.YYYY using day, month, year) // Add method: setFullDate (parameter full date in format: DD.MM.YYYY, sets day, month, year) // Add method: toString (returns full date in format: DD.MM.YYYY)

let date3 = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    getDay: function() {
        return this.day;
    },
    getMonth: function() {
        return this.month;
    },
    getYear: function() {
        return this.year;
    },
    setDay: function(day) { 
        if ( day>=1 && day<=31 ) {
            this.day = day;
        }
        else {
            console.log("Invalid Day input");
        }
    },
    setMonth: function(month) {
        if ( month>=1 && month<=12 ) {
            this.month = month;
        }
        else {
            console.log("Invalid Month input");
        }
    },
    setYear: function(year) {
        if ( year>=1970 && year<=2023 ) {
            this.year = year;
        }
        else {
            console.log("Invalid Year input");
        }
    },
    getFullDate: function() {
        const formattedDay = this.day.toString().padStart(2, "0");
        const formattedMonth = this.month.toString().padStart(2, "0");
        return `${formattedDay}.${formattedMonth}.${this.year}`;
    },
    setFullDate: function(fullDate) {
        const [day, month, year] = fullDate.split(".");
        this.setDay(parseInt(day));
        this.setMonth(parseInt(month));
        this.setYear(parseInt(year));
      },
    toString: function() {
        return this.getFullDate();
    }
};

console.log("Day:", date3.getDay());
console.log("Month:", date3.getMonth());
console.log("Year:", date3.getYear());

date3.setDay(25);
date3.setMonth(6);
date3.setYear(2022);

console.log("Full Date:", date3.getFullDate());

date3.setFullDate("08.03.2023");
console.log("Updated Full Date:", date3.toString());

// 13. // Make an object named "math" // Add properties: PI, E, SQRT2 // Add methods: random (returns random number between 0 and 1)

const math2 = {
    PI: Math.PI,
    E: Math.E,
    SQRT2: Math.SQRT2,
    random: function() {
        return Math.random();
    }
  };
  const randomNumbers = math2.random();
  console.log("Random Number:", randomNumbers);

// 14. // create 5 objects with properties: title, count, price // ex: const product1 = { title: 'Pen', count: 1, price: 2 }; // create an array named "products" and add 5 objects to it // create an object named "cart" with property "products" (empty array) // add methods: addToCart, removeFromCart, getTotalPrice, getTotalCount // cart.addToCart(product1); returns: total count of products in cart // cart.addToCart(product1); returns: total count of products in cart // you can add same product maximum product.count times // cart.getTotalCount(); returns: 2 // cart.getTotalPrice(); returns: total price of all products in cart

const product1 = { title: 'Pen', count: 1, price: 2 };
const product2 = { title: 'Notebook', count: 3, price: 5 };
const product3 = { title: 'Pencil', count: 2, price: 1 };
const product4 = { title: 'Eraser', count: 4, price: 0.5 };
const product5 = { title: 'Ruler', count: 2, price: 1.5 };

const products = [product1, product2, product3, product4, product5];

const cart = {
  products: [],
  addToCart: function(product) {
    const existingProduct = this.products.find(p => p.title === product.title);
    if (existingProduct) {
      if (existingProduct.count < product.count) {
        existingProduct.count++;
      } else {
        console.log(`Maximum quantity reached for ${product.title}`);
      }
    } else {
      this.products.push({ ...product, count: 1 });
    }
    return this.getTotalCount();
  },
  removeFromCart: function(product) {
    const index = this.products.findIndex(p => p.title === product.title);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    return this.getTotalCount();
  },
  getTotalPrice: function() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.count * product.price;
    }
    return totalPrice;
  },
  getTotalCount: function() {
    let totalCount = 0;
    for (const product of this.products) {
      totalCount += product.count;
    }
    return totalCount;
  }
};

console.log("Total Count:", cart.addToCart(product1));
console.log("Total Count:", cart.addToCart(product1));
console.log("Total Count:", cart.addToCart(product1));
console.log("Total Count:", cart.removeFromCart(product1));
console.log("Total Price:", cart.getTotalPrice());
console.log("Total Count:", cart.getTotalCount());
