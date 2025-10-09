import { useContext } from "react";
import { RecipeContext } from "../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";

const Recipes = () => {
  const { recipe } = useContext(RecipeContext);
  
  return (
    <div className="py-20 px-4">
      <h1 className=" text-2xl font-medium pb-4">Latest Recipes</h1>
      {/* <div id="recipe-container">
        {recipe.length > 0 ?
         recipe.map((rep) => (
          <div id="recipe-content" className="p-4" key={rep?.id}>
            <img
              className="h-[40vh] w-full object-cover rounded-xl"
              src={rep?.imgUrl || "https://images.unsplash.com/photo-1570299792061-8b78ae15915f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt=""
            />
            <div id="recipe-details" className=" pt-5 flex flex-col gap-2">
              <div id="rating">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
              <div
                id="recipe-title"
                className="text-2xl font-bold text-zinc-200"
              >
               {rep?.title}
              </div>
              <p>{rep?.ingr}</p>
              <p className="text-zinc-300 text-sm">
               { rep?.inst}
              </p>
              <div
                id="recipe-owner"
                className="flex justify-between items-center pt-3"
              >
                <div id="owner-detail">
                  <img
                    src="https://images.unsplash.com/photo-1720190369372-c35cbdb92dd2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="owner-image"
                    className="w-10 aspect-[1/1] rounded-full object-cover object-top inline"
                  />
                  <h2 className="text-xl capitalize font-medium inline pl-3">
                    radhema
                  </h2>
                </div>
                <div id="icon" className="flex gap-3">
                  <div id="save-btn"> &#128190; </div>
                  <div id="comment-btn">&#128172;</div>
                </div>
              </div>
            </div>
          </div>
        ) 
      )
        
        : <p>no data</p>}
      </div> */}

      <div
        id="recipe-content"
        className=" border-[1px] border-zinc-700 rounded-xl overflow-hidden"
      >
        <div
          className="h-[40vh] w-full bg-cover bg-center flex
            bg-[url('https://images.unsplash.com/photo-1462392407305-011695db8df4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        >
          <div
            id="recipe-title"
            className="mt-auto text-shadow-lg p-4 text-2xl font-bold text-zinc-200"
          >
            Pumpkin Marshmallow Pie
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
            <span className="text-sm text-white font-['GilroyBold'] ">Ingredients: </span> <br /> Pie Crust, 3/4 cup white sugar, 1/2 teaspoon salt, 1
            teaspoon ground cinnamon, 1/2 teaspoon ground ginger, 1/4 teaspoon
            ground cloves, 2 large eggs, 1 (15 ounce) can pumpkin, 1 (12 fluid
            ounce) can evaporated milk, 2 cups mini marshmallows
          </p>

          <p id="instructions" className="text-zinc-400 text-xs">
            <span className="text-sm text-white font-['GilroyBold'] ">Instructions: </span> <br /> 1. Preheat oven to 425 degrees F (220 degrees C). <br /> 2. In a large bowl,
            whisk together sugar, salt, cinnamon, ginger, and cloves. Beat in
            eggs, then stir in pumpkin. Gradually stir in evaporated milk. <br />{" "}3. Pour into pie crust. <br /> 4. Bake in preheated oven for 15 minutes. Reduce
            temperature to 350 degrees F (175 degrees C), and continue baking
            for 40 to 50 minutes, or until a knife inserted near the center comes
            out clean. <br /> 5. During the last 5 minutes of baking, sprinkle
            mini marshmallows over the top of the pie. Continue baking until
            marshmallows are puffed and golden brown. Cool on a wire rack for 2
            hours before serving. Refrigerate leftovers.
          </p> 
        </div>
      </div>
    </div>
  );
};

export default Recipes;
