import React from 'react'

const RecipeInstruction = ({title, steps}) =>
<section>
    <h2>{title}</h2>
    {steps.map((step, index) => 
        <p key={index}>{step}</p>
    )}
</section>

export default RecipeInstruction
