import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RecipesMenu from './components/Menu';
import recipes from './data/recipes-data'
import AddColorForm from './components/AddColorForm';

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

ReactDOM.render(
                ///<RecipesMenu recipes={recipes} title="Delicious Recipes"/>, 
                <AddColorForm onNewColor={logColor}/>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
