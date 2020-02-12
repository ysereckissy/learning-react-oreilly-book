import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import NameForm from './components/NameForm';
import startTicking from './apps/clock/Clock';

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
  startTicking()
  return element;
}

///setInterval(App, 1000)
export default App;
