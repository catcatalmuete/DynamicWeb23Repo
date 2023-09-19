import React from 'react'
import './recipecard.css'

export default function RecipeIng(props) {
    const {ingredients} = props

    return (
        <div>
            <h3 className={'ingTitle'}>Ingredients</h3>
            <ul className={'ingredients'}>
                {ingredients.map((i, index) => (
                <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
}