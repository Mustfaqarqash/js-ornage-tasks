// Local Storage Tasks

// 1. Store and Retrieve a String
localStorage.setItem('myString', 'Hello, World!');
console.log(localStorage.getItem('myString'));

// 2. Store and Retrieve a Number
localStorage.setItem('myNumber', 123);
console.log(Number(localStorage.getItem('myNumber')));

// 3. Store and Retrieve a Boolean
localStorage.setItem('myBoolean', true);
console.log(localStorage.getItem('myBoolean') === 'true');

// 4. Remove an Item from Local Storage
localStorage.setItem('tempItem', 'to be removed');
localStorage.removeItem('tempItem');
console.log(localStorage.getItem('tempItem') === null);

// 5. Clear All Items in Local Storage
localStorage.setItem('item1', 'value1');
localStorage.setItem('item2', 'value2');
localStorage.clear();
console.log(localStorage.length === 0);

// 6. Check Existence of an Item
localStorage.setItem('checkItem', 'exists');
console.log(localStorage.getItem('checkItem') !== null);

// 7. Store and Retrieve an Array
const myArray = [1, 2, 3];
localStorage.setItem('myArray', JSON.stringify(myArray));
console.log(JSON.parse(localStorage.getItem('myArray')));

// 8. Store and Retrieve an Object
const myObject = {name: "John", age: 30};
localStorage.setItem('myObject', JSON.stringify(myObject));
console.log(JSON.parse(localStorage.getItem('myObject')));

// 9. Store Multiple Items
localStorage.setItem('itemA', 'A');
localStorage.setItem('itemB', 'B');
console.log(localStorage.getItem('itemA'));
console.log(localStorage.getItem('itemB'));

// 10. Update an Existing Item
localStorage.setItem('updateItem', 'initial');
localStorage.setItem('updateItem', 'updated');
console.log(localStorage.getItem('updateItem'));

// Session Storage Tasks

// 1. Store and Retrieve a String
sessionStorage.setItem('sessionString', 'Hello, World!');
console.log(sessionStorage.getItem('sessionString'));

// 2. Store and Retrieve a Number
sessionStorage.setItem('sessionNumber', 123);
console.log(Number(sessionStorage.getItem('sessionNumber')));

// 3. Store and Retrieve a Boolean
sessionStorage.setItem('sessionBoolean', true);
console.log(sessionStorage.getItem('sessionBoolean') === 'true');

// 4. Remove an Item from Session Storage
sessionStorage.setItem('sessionTempItem', 'to be removed');
sessionStorage.removeItem('sessionTempItem');
console.log(sessionStorage.getItem('sessionTempItem') === null);

// 5. Clear All Items in Session Storage
sessionStorage.setItem('sessionItem1', 'value1');
sessionStorage.setItem('sessionItem2', 'value2');
sessionStorage.clear();
console.log(sessionStorage.length === 0);

// 6. Check Existence of an Item
sessionStorage.setItem('sessionCheckItem', 'exists');
console.log(sessionStorage.getItem('sessionCheckItem') !== null);

// 7. Store and Retrieve an Array
const sessionArray = [1, 2, 3];
sessionStorage.setItem('sessionArray', JSON.stringify(sessionArray));
console.log(JSON.parse(sessionStorage.getItem('sessionArray')));

// 8. Store and Retrieve an Object
const sessionObject = {name: "John", age: 30};
sessionStorage.setItem('sessionObject', JSON.stringify(sessionObject));
console.log(JSON.parse(sessionStorage.getItem('sessionObject')));

// 9. Store Multiple Items
sessionStorage.setItem('sessionItemA', 'A');
sessionStorage.setItem('sessionItemB', 'B');
console.log(sessionStorage.getItem('sessionItemA'));
console.log(sessionStorage.getItem('sessionItemB'));

// 10. Update an Existing Item
sessionStorage.setItem('sessionUpdateItem', 'initial');
sessionStorage.setItem('sessionUpdateItem', 'updated');
console.log(sessionStorage.getItem('sessionUpdateItem'));
