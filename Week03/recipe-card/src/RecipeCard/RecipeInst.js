import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeInst(props) {
    const {instructions} = props

    return (
        <div>
        <h3 className={styles.instTitle}>Instructions</h3>
        <ol className={styles.instructions}>
            {instructions.map((i, index) => (
            <li key={index}>{i}</li>
            ))}
        </ol>
        </div>
    )
}
