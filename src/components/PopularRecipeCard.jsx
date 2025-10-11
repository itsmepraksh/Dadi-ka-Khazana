import React from 'react'

const PopularRecipeCard = ({imgSrc , recipeName , recipeDesc}) => {
  return (
    <div id="popular-card" className="shrink-[0]">
      <img className="w-72 max-h-40 xl:w-96 xl:max-h-56 object-cover rounded-lg" src={imgSrc} alt="popular-recipe-image" />
      <h1 className="py-1 text-lg">{recipeName}</h1>
      <p className="text-sm text-zinc-400">{recipeDesc}</p>
    </div>
  )
}

export default PopularRecipeCard