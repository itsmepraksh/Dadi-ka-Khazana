import { useContext } from "react";
import { RecipeContext } from "../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";

const Recipes = () => {
  const { recipe } = useContext(RecipeContext);

  console.log(recipe);

  return (
    <div className="py-20 px-4 md:px-[7%]">
      <h1 className=" text-2xl font-medium pb-4">Latest Recipes</h1>
      
      <div id="recipe-box" className="flex overflow-x-scroll gap-x-4">
        {recipe.length > 0 && recipe.map((itm,idx) => (
          <div
          id="recipe-content"
          key={idx}
          className=" border-[1px] border-zinc-700 rounded-xl overflow-hidden shrink-[0] w-full lg:w-[45%] xl:w-[35%]"
        >
          {/* {console.log(itm)} */}
          <div
            className={"h-[40vh] md:h-[55vh] lg:h-[40vh] w-full bg-cover bg-center flex"}
            style={{backgroundImage : `url(${itm.recipeImage})`}}
          >
            <div
              id="recipe-title"
              className="mt-auto text-shadow-lg p-4 text-2xl font-bold text-zinc-200"
            >
              {itm.recipeName} 
            </div>
          </div>

          <div id="recipe-details" className=" pt-5 flex flex-col gap-2 p-4">
            <div id="rating" className="flex justify-between">
              <p>4.8 <FontAwesomeIcon icon={faStarHalf} />(1.2k)</p>
              <div id="stars" className="text-sm">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>

            <p id="ingredients" className="text-zinc-400 text-xs">
              <span className="text-sm text-white font-['GilroyBold'] ">Ingredients: </span> <br />
              {itm.ingredients} 
            </p>

            <p id="instructions" className="text-zinc-400 text-xs">
              <span className="text-sm text-white font-['GilroyBold'] ">Instructions: </span> <br />
              {itm.instructions}
               
            </p>
          </div>
        </div>
        ))}

      </div>


    </div>
  );
};

export default Recipes;
