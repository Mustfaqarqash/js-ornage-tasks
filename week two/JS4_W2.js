// Local Storage Tasks

// Task 1: Store and Retrieve a String
localStorage.setItem('myString', 'Hello, World!');
const storedString = localStorage.getItem('myString');
console.log(storedString);  // Output: Hello, World!

// Task 2: Store and Retrieve a Number
localStorage.setItem('myNumber', 123);
const storedNumber = parseInt(localStorage.getItem('myNumber'));
console.log(storedNumber);  // Output: 123

// Task 3: Store and Retrieve a Boolean
localStorage.setItem('myBoolean', true);
const storedBoolean = localStorage.getItem('myBoolean') === 'true';
console.log(storedBoolean);  // Output: true

// Task 4: Remove an Item from Local Storage
localStorage.setItem('itemToRemove', 'This will be removed');
localStorage.removeItem('itemToRemove');

// Task 5: Clear All Items in Local Storage
localStorage.setItem('item1', 'Value 1');
localStorage.setItem('item2', 'Value 2');
localStorage.clear();

// Task 6: Check Existence of an Item
const itemExists = localStorage.getItem('existingItem') !== null;
console.log(itemExists);  // true or false based on existence

// Task 7: Store and Retrieve an Array
const myArray = [1, 2, 3];
localStorage.setItem('myArray', JSON.stringify(myArray));
const storedArray = JSON.parse(localStorage.getItem('myArray'));
console.log(storedArray);  // Output: [1, 2, 3]

// Task 8: Store and Retrieve an Object
const myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const storedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(storedObject);  // Output: { name: 'John', age: 30 }

// Task 9: Store Multiple Items
localStorage.setItem('item1', 'Value 1');
localStorage.setItem('item2', 'Value 2');
const item1 = localStorage.getItem('item1');
const item2 = localStorage.getItem('item2');
console.log(item1, item2);  // Output: Value 1 Value 2

// Task 10: Update an Existing Item
localStorage.setItem('myItem', 'Initial Value');
localStorage.setItem('myItem', 'Updated Value');
const updatedValue = localStorage.getItem('myItem');
console.log(updatedValue);  // Output: Updated Value


// Session Storage Tasks

// Task 1: Store and Retrieve a String
sessionStorage.setItem('myString', 'Hello, World!');
const storedSessionString = sessionStorage.getItem('myString');
console.log(storedSessionString);  // Output: Hello, World!

// Task 2: Store and Retrieve a Number
sessionStorage.setItem('myNumber', 123);
const storedSessionNumber = parseInt(sessionStorage.getItem('myNumber'));
console.log(storedSessionNumber);  // Output: 123

// Task 3: Store and Retrieve a Boolean
sessionStorage.setItem('myBoolean', true);
const storedSessionBoolean = sessionStorage.getItem('myBoolean') === 'true';
console.log(storedSessionBoolean);  // Output: true

// Task 4: Remove an Item from Session Storage
sessionStorage.setItem('itemToRemove', 'This will be removed');
sessionStorage.removeItem('itemToRemove');

// Task 5: Clear All Items in Session Storage
sessionStorage.setItem('item1', 'Value 1');
sessionStorage.setItem('item2', 'Value 2');
sessionStorage.clear();

// Task 6: Check Existence of an Item
const sessionItemExists = sessionStorage.getItem('existingItem') !== null;
console.log(sessionItemExists);  // true or false based on existence

// Task 7: Store and Retrieve an Array
const sessionArray = [1, 2, 3];
sessionStorage.setItem('sessionArray', JSON.stringify(sessionArray));
const storedSessionArray = JSON.parse(sessionStorage.getItem('sessionArray'));
console.log(storedSessionArray);  // Output: [1, 2, 3]

// Task 8: Store and Retrieve an Object
const sessionObject = { name: 'John', age: 30 };
sessionStorage.setItem('sessionObject', JSON.stringify(sessionObject));
const storedSessionObject = JSON.parse(sessionStorage.getItem('sessionObject'));
console.log(storedSessionObject);  // Output: { name: 'John', age: 30 }

// Task 9: Store Multiple Items
sessionStorage.setItem('item1', 'Value 1');
sessionStorage.setItem('item2', 'Value 2');
const sessionItem1 = sessionStorage.getItem('item1');
const sessionItem2 = sessionStorage.getItem('item2');
console.log(sessionItem1, sessionItem2);  // Output: Value 1 Value 2

// Task 10: Update an Existing Item
sessionStorage.setItem('myItem', 'Initial Value');
sessionStorage.setItem('myItem', 'Updated Value');
const updatedSessionValue = sessionStorage.getItem('myItem');
console.log(updatedSessionValue);  // Output: Updated Value
