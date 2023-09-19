import React from 'react'
import './recipecard.css'

export default function RecipeInfo(props) {
  const {title, description} = props

  return (
    <div>
      <h1 className={'title'}>{title}</h1>
      <p className={'description'}>{description}</p>
    </div>
  )
}