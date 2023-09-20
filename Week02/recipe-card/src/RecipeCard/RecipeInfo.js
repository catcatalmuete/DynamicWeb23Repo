import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeInfo(props) {
  const {title, description} = props

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}