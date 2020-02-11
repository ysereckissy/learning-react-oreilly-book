import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import NameForm from './components/NameForm';

function App() {
  console.log(this)
  const element = (
    <div className="App">
        <h1>
          Hello World!
        </h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <NameForm />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
  var tahoe = {
    resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    print: function(delay=1000) {
      /// a function sets limits "this" off to the object in which it is defined. so,
      /// this === tahoe in this context
      console.log(this)
      ///const _self = this
      setTimeout( function() {
        /// since setTimeout is defined in the window object and the provided timeOut callback
        /// will be called in the context of setTimeout, this === window. 
        /// One solution is to used an arrow function instead, that doesn't redefine the value of
        /// "this". Another solution is to bind the callback function to the context of tahoe.
        /// a third solution is to use the variable _self we defined which value is the context of 
        /// tahoe whenever we need to use "this"
        console.log(this.resorts.join(","))
        console.log(this)
      }.bind(this), delay)
    }
  }
  tahoe.print()
  /// demonstrate that function are first-class citizens by using a function a array element
  const messages = [
    "they can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
  ]
  messages[1](messages[0])
  messages[3](messages[2])
  /// function can be sent to other functions
  /// Just to give an idea, this is how middlewares are implemented in redux
  const insideFn = logger => logger("They can be sent to other functions as arguments")
  insideFn(message => console.log(message))

  /// Functions can also be returned from other functions just like varibles:
  /// This is a very powerful concept as described below.
  const createScream = logger => message => logger(message.toUpperCase() + "!!!")
  const scream = createScream(message => console.log(message))
  scream("function can be returned from another functions")
  scream("createScream returns a function")
  scream("scream invokes that returned function")
  /// The last two examples above are of higer-order functions, functions that either take or return
  /// other functions.
  /// pay attention to the number of arrows in the ES6 syntax of the function definition. If more 
  /// than one, then the function is an higer-order function.
  /// Javascript is a functional language because its functions are first-class citizens. This means
  /// that functions are data. They can be saved, retrieved, or flow through your application just
  /// like varibles.

  /// IMPERATIVE VERSUS DECLARATIVE PROGRAMMING
  /// =========================================
  /// Functional programming is a part of a larger programming paradigm: declarative programming.
  /// Declarative programming is a style of programming where applications are structured in a way
  /// that prioritizes descrtibing what should happen over defining how it should happen.
  /// In a declarative program, the syntax itself describes what should happen and the details of how 
  /// things happen are abstracted away.


  return element;
}

///setInterval(App, 1000)
export default App;
