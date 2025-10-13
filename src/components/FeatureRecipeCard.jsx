 

const FeatureRecipeCard = ({ imgSrc, recipeName, recipeFrom }) => {
  return (
    <div id="feature-card" className="shrink-[0]  lg:w-50 xl:w-60">
      <img className="w-40 lg:w-full rounded-lg" src={imgSrc} alt="recipe-image" />
      <h1 className="py-1 text-lg">{recipeName}</h1>
      <p className="text-sm text-red-300">{recipeFrom}</p>
    </div>
  );
};

export default FeatureRecipeCard;
