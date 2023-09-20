import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeImg from './RecipeImg'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './RecipeIng'
import InstructionsList from './RecipeInst'
import Card from './Card'
import styles from './RecipeCard.module.css'

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className={styles.grid}>
        { <RecipeInfo title={RECIPE.title} description={RECIPE.description} />}
        <div className={styles.infoGrid}>
          { <IngredientsList ingredients={RECIPE.ingredients} />}
          { <InstructionsList instructions={RECIPE.instructions} />}
        </div>
      </div>
    </Card>
  )
}
