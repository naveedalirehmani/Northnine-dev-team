1. What's the output?

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();

A: Lydia and undefined

B: Lydia and ReferenceError

C: ReferenceError and 21

D: ~~undefined and ReferenceError~~

In the sayHi function, both name and age are accessed before they are declared. name is declared with var, so it's hoisted and initialized with undefined, allowing it to be accessed before its actual declaration. However, age is declared with let, and accessing it before its declaration results in a ReferenceError due to the temporal dead zone.


2. What's the output?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

A: 0 1 2 and 0 1 2

B: 0 1 2 and 3 3 3

C: ~~3 3 3 and 0 1 2~~

In the first loop, var creates a single variable i with function scope. The asynchronous setTimeout captures the final value of i, which is 3, resulting in 3 3 3 being printed.

In the second loop, let creates a new lexical environment for i in each iteration, resulting in 0 1 2 being printed because each setTimeout callback captures the correct value of i for its respective iteration.

3. What's the output?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

A: 20 and 62.83185307179586

B: ~~20 and NaN~~

C: 20 and 63

D: NaN and 63


diameter() Method:
The diameter() method is defined using a regular function within the object shape. This allows this to refer to the object itself, so this.radius correctly accesses the radius property of the shape object.
perimeter() Method:
The perimeter property is defined using an arrow function. Arrow functions do not bind their own this, so in this context, this refers to the surrounding scope (which is likely the global scope or undefined). This would lead to an error because this.radius would be undefined.

4. What's the output?

+true;
!'Lydia';

A: ~~1 and false~~

B: false and NaN

C: false and false

The unary plus operator + before true converts the boolean value true to a number, which is 1.
The logical NOT operator ! before the string 'Lydia' converts the string to a boolean value. Since a non-empty string is considered truthy in JavaScript, 'Lydia' evaluates to false. 

5. Which one is true?

const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

A: ~~mouse.bird.size is not valid~~

B: mouse[bird.size] is not valid

C: mouse[bird["size"]] is not valid

D: All of them are valid

In JavaScript, when using dot notation to access properties of an object, the key must be a string. Since bird is an object and not a string key within mouse, the statement mouse.bird.size is not valid.

6. What's the output?

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

A: ~~Hello~~

B: Hey!

C: undefined

D: ReferenceError

E: TypeError

Initially, c is assigned the object { greeting: 'Hey!' }.
Then, d is assigned the reference of c.
When c.greeting is changed to 'Hello', it updates the object that both c and d are pointing to.
Therefore, console.log(d.greeting) will output 'Hello'

7. What's the output?

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

A: true false true

B: false false true

C: ~~true false false~~

D: false true true

a == b compares the values of a and b, which are both 3, so it evaluates to true.
a === b compares the values and types of a and b. Since a is a primitive number and b is an object (instance of Number), it evaluates to false.
b === c compares b, which is an object, to c, which is a primitive number with the same value. This comparison evaluates to false because they are of different types (object vs. number).

8. What's the output?

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));

A: orange

B: purple

C: green

D: ~~TypeError~~

The colorChange method is defined as a static method in the Chameleon class.
When freddie.colorChange('orange') is called, it will result in a TypeError because colorChange is a static method and is not accessible through instances of the class like freddie. Static methods are called on the class itself, not on instances of the class.

9. What's the output?

let greeting;
greetign = {}; 
console.log(greetign);

A: ~~{}~~

B: ReferenceError: greetign is not defined

C: undefined

There is a typographical error in the code where greetign is assigned an empty object, but the variable is declared as greeting.
Despite the typo, JavaScript is forgiving and creates a global variable greetign when it is assigned a value, even though it was not explicitly declared.
Therefore, console.log(greetign) will output the empty object {}.

10. What happens when we do this?

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

A: ~~Nothing, this is totally fine!~~

B: SyntaxError. You cannot add properties to a function this way.

C: "Woof" gets logged.

D: ReferenceError


answer: In JavaScript, functions are objects, so you can add properties to them just like you would with any other object. Therefore, adding a property like bark.animal = 'dog'; to a function in JavaScript is valid and does not cause any errors.

11. What's the output?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

A: ~~TypeError~~

B: SyntaxError

C: Lydia Hallie

D: undefined undefined

answer:In the given code, member is an instance of the Person constructor function. The getFullName function is added to the Person constructor function itself, not to its prototype. Therefore, when trying to access member.getFullName(), a TypeError will occur because getFullName is not a method of the instance member.

12. What's the output?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);

A: ~~Person {firstName: "Lydia", lastName: "Hallie"} and undefined~~

B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}

C: Person {firstName: "Lydia", lastName: "Hallie"} and {}

D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError

answer:Lydia will be an instance of the Person object with the properties firstName: "Lydia" and lastName: "Hallie," which explains why this output is occurring. Sarah will, however, be undefined because, when Person('Sarah', 'Smith') is called without new, it adds firstName: "Sarah" and lastName: "Smith" to the global object (this), rather than creating a new object. Sarah will be undefined because the function does not explicitly return anything. 

13. What are the three phases of event propagation?

A: Target > Capturing > Bubbling

B: Bubbling > Target > Capturing

C: Target > Bubbling > Capturing

D: ~~Capturing > Target > Bubbling~~

The capturing phase is rarely used and is typically used when you want to handle events before they reach the target element. The target phase is where the event is processed by the target element itself. The bubbling phase is the most commonly used phase and is where event handlers are triggered on the way back up the DOM tree from the target element to the window object.

14. All object have prototypes.

A: ~~true~~

B: false

answer:In JavaScript, every object has a prototype property, which is an object that acts as the object's design template. The object inherits certain shared properties and functions from its prototype. The object will inherit attributes and methods from the prototype of the constructor function used to build it, for instance, if you create a new object using the new keyword.

15. What's the output?

function sum(a, b) {
  return a + b;
}

sum(1, '2');

A: NaN

B: TypeError

C: ~~"12"~~

D: 3

answer: When a string and a number are used with the + operator in JavaScript, the number is converted into a string and joined with the other string. Here, '2' is a string and '1' is a number. JavaScript turns 1 into a string and concatenates it with '2' when you add them together using +, creating the string "12".

16. What's the output?

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

A: 1 1 2

B: 1 2 2

C: ~~0 2 2~~

D: 0 1 2

Answer:  First console.log: Logs the original value (0), then increments.s
Second console.log: Increments first (to 2), then logs the incremented value (2).
Third console.log: Logs the current value (2), with no change from the previous step
17. What's the output?

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

A: "Lydia" 21 ["", " is ", " years old"]

B:~~ ["", " is ", " years old"] "Lydia" 21~~

C: "Lydia" ["", " is ", " years old"] 21

answer:when the getPersonInfo function is called with the template ${person} is ${age} years old, the words and numbers are separated. The words become an array ["", " is ", " years old"], and the name 'Lydia' comes first, followed by the age 21. So, the output will be ["", " is ", " years old"], then 'Lydia', and finally 21.

18. What's the output?

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

A: You are an adult!

B: You are still an adult.

C: ~~Hmm.. You don't have an age I guess~~

answer:The function checkAge compares the data parameter with { age: 18 } using both strict and abstract equality (=== and ==). However, since objects are compared by reference, not by value, both comparisons will fail.
19. What's the output?

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

A: "number"

B: "array"

C: ~~"object"~~

D: "NaN"

The function getAge takes a variable number of arguments using the rest parameter syntax ...args.
Inside the function, it prints the type of args using the typeof operator.
Since args is an array-like object containing all the arguments passed to the function, its type is object.

20. What's the output?

function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();

A: 21

B: undefined

C: ~~ReferenceError~~

D: TypeError

answer: In strict mode ('use strict';), using variables without declaring them first with var, let, or const is not allowed.
In the provided function getAge, age is assigned the value 21 without being declared with any of the proper keywords.
Therefore, when the function is executed, it will throw a ReferenceError because age is not defined.

21. What's the value of sum?

const sum = eval('10*10+5');

A: ~~105~~

B: "105"

C: TypeError

D: "10*10+5"

answer: The eval() function evaluates JavaScript code represented as a string.
In this case, the string '10*10+5' represents a mathematical expression.
 the expression 10*10+5, which results in 105.


22. How long is cool_secret accessible?

sessionStorage.setItem('cool_secret', 123);

A: Forever, the data doesn't get lost.

B: ~~When the user closes the tab.~~

C: When the user closes the entire browser, not only the tab.

D: When the user shuts off their computer.

answer:sessionStorage is a type of web storage that lasts for the duration of the page session.
A page session lasts as long as the browser is open and survives page reloads, but it ends when the user closes the tab.
Therefore, the cool_secret stored in sessionStorage will be accessible until the user closes the tab. Once the tab is closed, the sessionStorage for that session is cleared, and the cool_secret data is lost.

23. What's the output?

var num = 8;
var num = 10;

console.log(num);

A: 8

B: ~~10~~

C: SyntaxError

D: ReferenceError

answer:The variable num is initially declared and assigned the value 8.
Then, the variable num is declared again and assigned the value 10, which overrides the previous value of 8.
When console.log(num) is executed, it prints the current value of num, which is 10

24. What's the output?

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

A: false true false true

B: ~~false true true true~~

C: true true false true

D: true true true true

answer: obj.hasOwnProperty('1'); returns false: The object obj does not have a property named '1' because the keys are stored as strings in JavaScript objects. Although 1 is a property key in obj, '1' (as a string) is not, so obj.hasOwnProperty('1'); returns false.
obj.hasOwnProperty(1); returns true: The object obj has a property named 1, so obj.hasOwnProperty(1); returns true.
set.has('1'); returns true: The set set has a value '1', so set.has('1'); returns true.
set.has(1); returns true: The set set has a value 1, so set.has(1); returns true.

25. What's the output?

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

A: { a: "one", b: "two" }

B: { b: "two", a: "three" }

C:~~{ a: "three", b: "two" }~~

D: SyntaxError

answer:Initially, obj is declared with three properties: a, b, and a.
However, since a is assigned multiple times, only the last occurrence will be stored in the object. So, the value of a becomes 'three'.
Therefore, the output will be { b: "two", a: "three" }, where the property 'a' holds the value 'three' and the property 'b' holds the value 'two'


26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

A: ~~true~~

B: false

C: it depends

answer:The global object (window object in a web browser environment, or global object in Node.js).
The this keyword, which, in the global context, refers to the global object (window in a web browser, or global in Node.js). 
The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword" is true.

27. What's the output?

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

A: 1 2

B: 1 2 3

C: ~~1 2 4~~

D: 1 3 4

answer:The for loop initializes i to 1.
It runs as long as i is less than 5.
At each iteration, it checks if i is equal to 3. If it is, the continue statement skips the rest of the loop's body for that iteration and moves to the next iteration.
Therefore, console.log(i); is only executed for i values of 1, 2, and 4.

28. What's the output?

String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza())

A: ~~"Just give Lydia pizza already!"~~

B: TypeError: not a function

C: SyntaxError

D: undefined

answer:name is a string containing the value 'Lydia'.
When you call name.giveLydiaPizza(), JavaScript implicitly converts name into a String object and then calls the giveLydiaPizza method, which returns the string 'Just give Lydia pizza already!'.
Therefore, console.log(name.giveLydiaPizza()) prints 'Just give Lydia pizza already!'

29. What's the output?

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

A: 123

B: ~~456~~

C: undefined

D: ReferenceError

answer:when objects are used as keys in JavaScript, they are automatically converted to strings. So, even though b and c are different objects, they both become "[object Object]" when used as keys in object a. This means that a[b] and a[c] are actually setting the same property in a. Therefore, when console.log(a[b]) is called, it will show the last value assigned to that property, which is 456. 

30. What's the output?

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

A: First Second Third

B:~~ First Third Second~~

C: Second First Third

D: Second Third First

answer:When bar() is called, it schedules the execution of () => console.log('Second') using setTimeout. This scheduling is asynchronous, meaning it doesn't wait for the function inside setTimeout to finish before moving on.
Next, foo() is called, which immediately logs 'First' to the console.
Then, baz() is called, logging 'Third' to the console.
After the initial code execution is complete, the function inside setTimeout is executed, logging 'Second' to the console. 