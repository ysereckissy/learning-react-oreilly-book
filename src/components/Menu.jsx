import React from 'react'
import Recipe from './Recipe'

const RecipesMenu = ({title, recipes}) => (
    <article>
        <header>
            <h1>
                {title}
            </h1>
        </header>
        <div className="recipes">
            {
                recipes.map((recipe, ii) => <Recipe key={ii} {...recipe} />) 
            }
        </div>
    </article>
)

export default RecipesMenu