import React from 'react'
import styles from './RecipeCard.module.css'

export default function RecipeImg(props) {
    const {imgSrc} = props

    return <img src={imgSrc} alt="adobo" className={styles.img}/>
}