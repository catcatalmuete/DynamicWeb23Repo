import React from 'react'
import './recipecard.css'

export default function RecipeInst(props) {
    const {instructions} = props

    return (
        <div>
        <h3 className={'instTitle'}>Instructions</h3>
        <ol className={'instructions'}>
            {instructions.map((i, index) => (
            <li key={index}>{i}</li>
            ))}
        </ol>
        </div>
    )
}
