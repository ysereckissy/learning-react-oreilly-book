import React from 'react';
import './App.css';
import NameForm from './components/NameForm';

function MainApplication() {
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
  return element;
}

///setInterval(App, 1000)
export default MainApplication;
