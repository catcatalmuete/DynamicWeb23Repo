import React from 'react'
import './recipecard.css'

export default function RecipeImg(props) {
    const {imgSrc} = props

    return <img src={imgSrc} alt="adobo" className={'img'}/>
}