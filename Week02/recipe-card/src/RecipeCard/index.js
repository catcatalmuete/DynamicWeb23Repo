import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeImg from './RecipeImg'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './RecipeIng'
import InstructionsList from './RecipeInst'
import './recipecard.css'

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className={'grid'}>
        { <RecipeInfo title={RECIPE.title} description={RECIPE.description} />}
        <div className={'infoGrid'}>
          { <IngredientsList ingredients={RECIPE.ingredients} />}
          { <InstructionsList instructions={RECIPE.instructions} />}
        </div>
      </div>
    </Card>
  )
}

function Card(props) {
  return <div className={'card'}>{props.children}</div>
}
