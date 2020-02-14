import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RecipesMenu from './components/RecipesMenu';
import recipes from './data/recipes-data'

ReactDOM.render(
                <RecipesMenu recipes={recipes} title="Delicious Recipes"/>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
