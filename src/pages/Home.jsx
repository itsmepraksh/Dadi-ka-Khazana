import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import FeatureRecipeCard from "../components/FeatureRecipeCard";
import PopularRecipeCard from "../components/PopularRecipeCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 pl-5 md:pl-[7%]">
      <section
        id="hero-section"
        className=" h-[75vh] overflow-hidden bg-cover bg-bottom md:bg-[10%_60%] lg:bg-[20%_70%] rounded-2xl
         bg-[url('https://images.unsplash.com/photo-1710091691777-3115088962c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div id="blur-bg" className="bg-black/20 flex h-full w-full">
          <div id="hero-data" className="mt-auto pl-5 md:pl-[7%] py-5 ">
            <h1 className="text-4xl md:text-5xl font-['GilroyBlack']">
              Welcome to <br />
              Dadi ka Khazana
            </h1>
            <p className="py-4 text-lg md:text-xl md:w-2/3 font-medium">
              Discover and share delicious recipes from around the world.
            </p>
            <div id="hero-cta-btn" className="flex gap-2 md:gap-4">
              <button className="bg-red-400 w-65 md:w-2/3 py-3 text-lg font-medium rounded-xl active:scale-[0.98] transition">
                Explore Recipes
              </button>
              <FontAwesomeIcon
                onClick={() => navigate("/create_recipe")}
                icon={faPlus}
                className="bg-zinc-300/30 p-4 rounded-xl active:scale-[0.95] transition"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="categories" className="py-10">
        <h1 className="font-['GilroyBold'] text-2xl md:text-3xl">Categories</h1>
        <div
          id="category-link"
          className="w-full flex flex-row gap-3 py-4 overflow-x-scroll"
        >
          <p className="bg-gray-600/40 px-4 py-1 flex-shrink-[0] rounded">
            Indian
          </p>
          <p className="bg-gray-600/40 px-4 py-1 flex-shrink-[0] rounded">
            Italian
          </p>
          <p className="bg-gray-600/40 px-4 py-1 flex-shrink-[0] rounded">
            Quick Meals
          </p>
          <p className="bg-gray-600/40 px-4 py-1 flex-shrink-[0] rounded">
            Healthy
          </p>
        </div>
      </section>

      <section id="feature">
        <h1 className="text-2xl font-['GilroyBold'] pb-4">Featured Recipes</h1>
        <div id="feature-recipes-box" className="flex flex-wrap gap-4">
          <FeatureRecipeCard
            imgSrc={
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            recipeName={"Paneer Tikka"}
            recipeFrom={"Indian"}
          />
          <FeatureRecipeCard
            imgSrc={
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            recipeName={"Pasta Carbonara"}
            recipeFrom={"Italian"}
          />
          <FeatureRecipeCard
            imgSrc={
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            recipeName={"Quinoa Salad"}
            recipeFrom={"Healty"}
          />
          <FeatureRecipeCard
            imgSrc={
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            recipeName={"Dosa"}
            recipeFrom={"South Indian"}
          />
        </div>
      </section>

      <section id="popular" className="py-10"> 
        <h1 className="text-2xl font-['GilroyBold'] pb-4">Popular Recipes</h1>
        <div id="popular-recipe-box" className="flex overflow-x-scroll gap-4">
          <PopularRecipeCard imgSrc={"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          recipeName={"Biryani"}
          recipeDesc={"Fragrant rice dish with meat and spices"}
          />
           <PopularRecipeCard imgSrc={"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          recipeName={"Biryani"}
          recipeDesc={"Fragrant rice dish with meat and spices"}
          />
           <PopularRecipeCard imgSrc={"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          recipeName={"Biryani"}
          recipeDesc={"Fragrant rice dish with meat and spices"}
          />



          
        </div>
      </section>


    </div>
  );
};

export default Home;
