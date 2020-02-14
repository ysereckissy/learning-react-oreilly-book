import React from 'react'
import IngredientsList from './IngredientsList'
import RecipeInstruction from './RecipeInstructions'

const Recipe = ({name, ingredients, steps}) => (
    <section id={name.toLowerCase().replace(/ /g, "-")} >
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <RecipeInstruction title="Cooking Instructions" steps={steps} />
    </section>
)

export default Recipe