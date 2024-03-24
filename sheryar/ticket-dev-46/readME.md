> 30 JavaScript questions for you. Your task is to choose the correct answer(s) for each question and mark them with a strikethrough. Then, write a short paragraph explaining why you chose that particular answer(s). If you're not sure which answer is correct, you can select multiple answers, but make sure to provide a separate explanation for each choice.

question # 1
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

Answer: The correct option is" D " because var is a global object and it has  global scope. but with let and const, behave differently. They are not attached to the global object.they are block-scoped and they store in the Temporal Dead Zone (TDZ):
Temporal Dead Zone (TDZ): This means that they cannot be accessed before they are declared within their block. Attempting to do so results in a ReferenceError.

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

 Answer: The correct option is" C " When var is used to declare "i", it has function scope, meaning there is only one variable "i" shared across all iterations of the loop.The setTimeout functions are executed after the loop has completed, and at that point, "i" has a value of 3. and When let is used to declare "i", it has block scope, creating a new lexical environment for each iteration of the loop.Each iteration of the loop with let i = 0; i < 3; i++ has its own unique variable "i".
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

Answer: The correct option is "b". the diameter property is a method defined using a regular function syntax.When diameter() is called, "this" inside the method refers to the shape object. in arrow functions do not bind their own "this" in their prototype. Instead, they inherit the "this" value from the parent scope, which is known as lexical scoping. This behavior is different from regular functions.Since this.radius is not defined in the global context, this.radius will be undefined, resulting in NaN (Not a Number).

4. What's the output?

+true;
!'Lydia';

Answer: The correct option is" A " because The "+" sign before true tries to convert the boolean value true into a number.In JavaScript, true is converted to the number 1.So, +true; evaluates to 1. and The "!" sign before a non-empty string like 'Lydia' converts it into a boolean value.Since 'Lydia' is a non-empty string, it is considered truthy in JavaScript.The logical NOT operator (!) then converts this truthy value to false.

A:~~ 1 and false ~~
B: false nd NaN
C: false and false



5. Which one is true?

const bird = {
  size: 'small',
};
 
const mouse = {
  name: 'Mickey',
  small: true,
};

A: mouse.bird.size is not valid
B: ~~mouse[bird.size] is not valid~~
C: mouse[bird["size"]] is not valid
D: All of them are valid

Answer: The correct option is" B ".In JavaScript, when using square brackets [] to access a property of an object, the expression inside the brackets is evaluated as a string.In the given scenario, bird.size evaluates to 'small', which is a string.When trying to access a property of an object using mouse[bird.size], it is equivalent to mouse['small'].However, the mouse object does not have a property named 'small', so this expression is not valid and will result in undefined.


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

ANSWER:The correct option is "A".The variable "d" is declared but not assigned yet so that When d = c; is executed, the  "d"references the same object that" c" is pointing to. So, "d" and "c "are  pointing to the same object in memory.

7. What's the output?

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

A: ~~true false true~~
B: false false true
C: true false false
D: false true true

ANSWER:The correct option is "A" because the double equal check the value only and the triple equal check both the value and the data type of the value.in this case "b" has a data type of object but the value is same .
let b = new Number(3); / let b= new Object(3); This creates  the 'Number object' which is a "built-in object" in JavaScript used for working with number. and The "Number constructor" expects a single argument representing a numeric value, not an object with properties.like (rollnumber : 3) 



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
D: TypeError

ANSWER: The output is "D"  because the colorChange method is a static method, meaning it belongs to the class itself, not its instances. When called on an instance (freddie.colorChange('orange')), this inside the method refers to the class, not the instance. Therefore, trying to access this.newColor inside the static method results in a TypeError because newColor is not defined on the class itself.


9. What's the output?

let greeting;
greetign = {}; // Typo!
console.log(greetign);

A:~~{}~~
B: ReferenceError: greetign is not defined
C: undefined

ANSWER:The correct option is "A".because in the code "let greeting;" we declared an variable which take some space in memory but not assigned a value to it .
 in the code "greetign = {};" we create a "Implicit global variable declaration " this is a way in which we cannot used "let","var" and "const" to create a variable.and this variable has global scope which mean we can access it everywhere. 

10. What happens when we do this?

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: ~~"Woof" gets logged.~~
D: ReferenceError

ANSWER: If we call the function bark(); then The correct option is "C and A".
in this line "bark.animal = 'dog';" is a way to add Property and value to a object . in the code the bark() not a object it is a function .

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

A: TypeError
B: SyntaxError
C: ~~Lydia Hallie~~
D: undefined undefined

ANSWER:The correct option is "C".beause in this question there is a constructor function "member".
The constructor function is similar as a regular function . but it is good pratice to capitalize the first letter of your constructor function.
A constructor function should be call only the "new" operator.we can used "new" operator to creater a object from the construtor function.

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

ANSWER:The correct option is "A".beause in this question there is a constructor function "lydia".
A constructor function should be call only the "new" operator.we can used "new" operator to creater a object from the construtor function.

13. What are the three phases of event propagation?

A: Target > Capturing > Bubbling
B: Bubbling > Target > Capturing
C: Target > Bubbling > Capturing
D: ~~Capturing > Target > Bubbling~~


 ANSWER:The correct option is "D" .the event first goes down through the parent elements until it reaches the target element (capturing phase). When the event reaches the target it triggers there (target phase), and then goes back up the chain (bubbling phase), calling handlers along the way.

14. All object have prototypes.

A: ~~true~~
B: false

ANSWER: The correct option is "A". A prototype is just like an object which has  hidden proprites and function which are attached to original object when we created it.prototype are used and accessable.
prototype inheritance  mean one object access the proprites and its prototypes of the other object so it is called prototype inheritance.



15. What's the output?

function sum(a, b) {
  return a + b;
}

sum(1, '2');


A: NaN
B: TypeError
C: ~~"12"~~
D: 3

ANSWER:The correct is option is "c" because When a number is added to a string the JavaScript engine performs type coercion to convert the number into a string and then concatenates the two strings together. and the typeof will be string "12".

16. What's the output?

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

A: 1 1 2
B: 1 2 2
C:~~ 0 2 2~~
D: 0 1 2

ANSWER:The output is "C" . because in the first increnment is apply to the number after console. and second increment is apply before console.

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
B:~~["", " is ", " years old"] "Lydia" 21~~
C: "Lydia" ["", " is ", " years old"] 21


ANSWER:The output is "B"because In this code, a tagged template literal is used with the getPersonInfo function.
When a template literal is tagged with a function, the function is called with an array of string values .

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

 ANSWER:The output is "C" because Objects are reference types in JavaScript, so even if two objects have the same properties, they are not considered equal unless they refer to the same object in memory.In this case, the comparison { age: 18 } === { age: 18 } will evaluate to false because they are two distinct objects in memory.
Loose equality (==) in JavaScript performs type coercion, but it still compares object references for objects.
Since the data object and the new object { age: 18 } are different objects in memory, this comparison will also evaluate to false.


19. What's the output?

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

A: "number"
B: ~~"array"~~
C: "object"
D: "NaN"

ANSWER:The output is "B". because Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

20. What's the output?

function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge()

A: 21
B: undefined
C: ~~ReferenceError~~
D: TypeError

ANSWER:The output is "C" becauase Strict mode apply some rules and restrictions on our code to help in write more secure and optimized JavaScript. this is a key fatures of strict mode .
Preventing Implicit Global Variables: In non-strict mode, if you assign a value to a variable without declaring it with var, let, or const, JavaScript automatically creates a global variable. In strict mode, this behavior is disallowed, helping to prevent accidental global variable creation.

21. What's the value of sum?

const sum = eval('10*10+5');

A: ~~105~~
B: "105"
C: TypeError
D: "10*10+5"

ANSWER: the correct option is "A" because eval is build-in-function in javascript.it takes input as a string and evaluates it as JavaScript code or number.it aslo depend on the surrounding . For example, if the string represents a mathematical expression, eval() will evaluate it and return the result as a number.

22. How long is cool_secret accessible?
 
sessionStorage.setItem('cool_secret', 123);

A: Forever, the data doesn't get lost.
B: When the user closes the tab.
C: When the user closes the entire browser, not only the tab.
D: When the user shuts off their computer.

23. What's the output?

var num = 8;
var num = 10;

console.log(num);

A: 8
B: ~~10~~
C: SyntaxError
D: ReferenceError

ANSWER: the correct option is "B" because "var" is function-scoped or globally scoped.we can redecleared  variable using var. variable is redeclared with var, the new value will overwrite the previous one.

> in case of "let"  it is block-scoped. we can declared it once and we can reassign a value to a "let"variable. 
> in case of "const" it is block-scoped. we can declared it once and we cannot reassign a value to a "const" variable. 

24. What's the output?

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

A: false true false true
B: false true true true
C: ~~true true false true~~
D: true true true true

ANSWER: the correct option is "C" because In JavaScript object and its property and keys are automatically converted to strings when they are not strings already. So  The "hasOwnProperty" method is a built-in method available on all objects. It allows you to determine whether an object has a specific property or not.
"has" is built-in function in javasript and  the set does not converted number into string '1'.
Sets in JavaScript can store both strings and numbers (as well as other types).
25. What's the output?

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C:~~ { a: "three", b: "two" } ~~
D: SyntaxError

ANSWER: the correct option is "c" because object property name must be unique . if property name is same the new value will overwrite the previous one. but the values can be same .


26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

A: true
B: false=
C: it depends

27. What's the output?

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

A: 1 2
B: 1 2 3
C: ~~1 2 4~~
D: 1 3 4

ANSWER: the correct option is "c" because if the statment is false then there will be console "i".
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


ANSWER: the correct option is "A" because .The string 'Lydia' (stored in the variable name) is a type String.
Since we added a method giveLydiaPizza to the  name String in its prototype, all strings have access to this method.
Therefore, calling name.giveLydiaPizza() invokes the method on the string 'Lydia'.

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

In JavaScript, object keys are converted to strings. When an object is used as a key in another object, it is converted to its string representation.a[b] = 123; - The object "b" is converted to a string "[object Object]" and used as a key in object "a", setting a["[object Object]"] to 123. a[c] = 456; - The object "c" is also converted to a string "[object Object]" and used as a key in object "a", overwriting the previous value to set a["[object Object]"] to 456.

console.log(a[b]); Here, "b" is again converted to a string "[object Object]", and when used as a key to access "a".

30. What's the output?

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

A: First Second Third
B: ~~First Third Second~~
C: Second First Third
D: Second Third First

ANSWER: the correct option is "B" because setTimeout() is a web API. settimeout() It is a method that allows developers to schedule the execution of a function after a specified delay. it is not going to directly to the callstack .it will store in callback queue. after some  certain delay it will console.
