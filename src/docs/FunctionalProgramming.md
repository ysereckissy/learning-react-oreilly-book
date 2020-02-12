# 1. Functional Programming

## 1.2 Functional Concepts

### 1.2.1 Immutability
To mutate is to change, so to be immutable is to be unchangeable. In functional programming, data is immutable. It never changes. Then, how data is modified?
Instead of changing the original data structures, we build changed copies of those data structures and use them instead.

Consider and object that represents the color lawn:

```javascript
let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}
```

We can build a function that would rate colors, and use that function to change that rating of color object:

In the following example, the data which reference is given as parameter is effectively changed, which is bad, because the function changes or mutate the original data.
```javascript
function rateColor(color, rating) {
    color.rating = rating
    return color
}
consle.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)
```
In the following example, we rewrite the function so that is doesn't harm the original object:
```javascript
var rateColor = function(color, rating) {
    return Oject.assign({}, color, {rating: rating})
}
console.log(rateColor(color_lawn, 5).rating) /// prints 5
console.log(color_lawn.rating) /// prints 0
```

We can write the same function using the ES6 arrow function along with the ES7 spread operator. The function uses the spread operator to copy the color into a new object and then overwrite its rating:
```javascript
const rateColor = (color, rating) => ({
    ...color,
    rating
})
```
exactly the same version as above but with cleaner syntax. Notice that we wrap the returned object in paraentheses. With arrow functions, this is required since the arrrow can't point to an object's curly baces.

Object modification can be done declaratively leveraging the function ```javascript Object.assign({}, ...)``` so, what about other data structure like array? in Javascript, don't use array method like ```javascript Array.push(...)``` to modify an array declaratively, since the method mutates the the array object on which it is called. instead, use method ```javascript concat(...)``` that create a copy of the array object on which it is called before modifying it.
```javascript
/// Don't do this in declarative programming
let list = [
    {title: "Rad Red"},
    {title: "Lawn"},
    {title: "Party Pink"}
]

var addColor = function(title, colors) {
    colors.push({title: title})
    return colors
}
console.log(addColor("Gram Green", list).length) /// prints 4
console.log(list.length) /// print 4
/// Instead, implement the following immutable function
/// this implementation takes a new object and adds it to a copy of the original array
const addColor = (title, colors) => colors.concat({title})
console.log(addColor("Gram Green", list).length) /// prints 4
console.log(list.length) /// prints 3
```
The declarative version of the function can be implemented using the ES6 spread operator, which copies the original list to a new array and then adds the new object containing color's title to that copy. This is a immutable function
```javascript
const addColor = (title, list) => [...list, {title}]
```
## 1.3 Pure Functions
A pure function is a function that returns a value computed based on its arguments. Pure functions take at least one argument and always return a value or another function. __A dead giveaway that a function is impure is if it makes sense to call it without using its return value. For pure functions, that's noop__

TODO: Give an example of impure function

Pure functions are easily testable. they do not change anything in their environment therefore, testing them doesn't require complicated setup or teardown. Everything a pure function needs to operate is accessed via arguments. When testing, you control the arguments thus you can estimate the function outcome.

TODO: Give an example of pure function

Pure functions are another core concept of functional programming. The will make your life easier because they will not affect your application's state. When writing functions, try to follow these three rules:

1. The function should take in at least one argument.
2. The function should return a value or another function
3. The function should not change or mutate any of its arguments.

## 1.4 Data Transformation

There are two core functions that you must master in order to be proficient with functional JavaScript: ```javascript Array.map``` and ```javascript Array.reduce```.


## 1.5 Higher Order Function

Higher order functions are functions that take function in argument or return functions or both. Examples are ```javascript Array.map(...), Array.filter(...), Array.reduce(...) ```

Example:
```javascript
const invokeIf = (condition, fnTrue, fnFalse) => (condition)? fnTrue() : fnFalse
/// Now we implement our fnTrue function
const showWelcome = () => console.log("Welcome!!!")
/// Here is our fnFalse function
const showUnauthorized = () => console.log("Unauthorized!!!")

/// Calling the Higher order function
invokeIf(true, showWelcome, showUnauthorized)
invokeIf(false, showWelcome, showUnauthorized)

/// Call back functions can be defined at the call time as shown below:
invokeIf(true, 
        () => console.log("Welcome!!!"), 
        () => console.log("Unauthorized!!"))
```
Higher Order functions that return other functions can help us handle the complexities associated with asynchronicity in javascript. They can help us create funcions that can be used or reused at our convenience.

### 1.5.1 Currying
Currying is a functional technique that involves the use of higer-order functions. Currying is the practice of holding on to some of the values needed to complete an operation until the rest can be supplied at a later point in time. This is achieved through the use of function that returns another function, the curried function.

Here is an example:
```javascript
/** 
The userLogs function hangs on to some information (usename) and returns a function that can be used and reused when the rest of the information (message) is made available.
*/
const userLogs = userName => message => console.log(`${userName}` -> `${message}`)
/// The following call returns a fucntion
const log = userLogs("grandpa23")
/// The function can be used at will
log("attempted to load 20 fake memebers")
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    errors => log("encountered an error loading members")
)
/// grandpa23 -> attempted to load 20 fake members
/// grandpa23 -> succefully loaded 20 members
```

## 1.6 Recursion
Recursion is a technique that involves creating functions that recall themselves.

```javascript
const countDown = (value, fn) => {
    fn(value)
    return (value > 0) ? countDown(value - 1, fn) : value
}
countDown(10, value => console.log(value))
```
**Browser Call Stack Limitiation** : Recursion should be used overloops whenever possible, but not all Javascript engines are optimized for a large amout of recursion. To much recursion can cause Javascript errors. These errors can be avoided by implementing advanced techniques to clear the call stack and flatten out recursive calls. Future Javascript engines plan to eliminate call stack limitations entirely.

Recursion is another functional technique that works well with asynchronous processes. Functions can recall themselves when they are ready.

The countdown function can be modified to count down with a delay. This modified version of the countdown function can be used to create a countdown clock:
```javascript
const countDown = (value, fn, delay = 1000) {
    fn(value)
    return (value > 0) ?
        setTimeout(() => countDown(value - 1, fn), delay) :
        value
}
countDown(10, value => console.log(value))
```
Recursion is a powerful functional technique that is fun to implement. Use recursion over looping whenever possible.

## 1.7 Composition
Functional programs break up their logic into small pure functions that are focused on specific tasks. Eventually, you will need to put these smaller functions together. Specifically, you may need to combine them, call them in series or parallel, or compose them into larger functions until you eventually have an application.

Example of chaining in javascript:
```javascript
const template = "hh:mm:ss tt"
const clockTime = template.replace("hh", "03")
                        .replace("mm", "33")
                        .replace("ss", "33")
                        .replace("tt", "AM")
```
Chaining is one composition technique, but there are other. The goal of composition is to generate a higher-order function by combining simpler functions.

```javascript
const both = date => appendAMPM(civilianHours(date))
/// more elegant approach
const both = compose(
    civilianHours,
    appendAMPM
)
both(new Date())
```
This approach looks better. It is easy to scale because we can add more funcions at any point. This approach also makes it easy to change the order of the composed functions.

The compose function is a higher order function. I takes functions as arguments and returns a single value.

```javascript 
const compose = (...fns) => (arg) => fns.reduce(
    (composed, f) => f(composed) ,
    arg
)
```
Compose takes in functions as arguments and returns a single function. In this implementation, the spread operator is used to turn those function arguments into an array called fns. A function is then returned that expects one argument, arg. When this function is invoked, the fns array is piped starting with the argument we want to sent through the function. The argument become the initial value for composed and then each iteration of the reduced callback returns. Notice that the callback takes two arguments: Composed and function f. Each function is invoked with compose which is the result of the previous functions output. Eventually, the last function will be invoked and the last result returned.