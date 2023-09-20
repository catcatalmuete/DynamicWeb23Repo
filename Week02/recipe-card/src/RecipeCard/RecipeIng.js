import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeIng(props) {
    const {ingredients} = props

    return (
        <div>
            <h3 className={styles.ingTitle}>Ingredients</h3>
            <ul className={styles.ingredients}>
                {ingredients.map((i, index) => (
                <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
}