import { useContext } from "react";
import { RecipeContext } from "../context/DataContext";

const Recipes = () => {
  const { recipe } = useContext(RecipeContext);
  return (
    <div className="py-20 px-4">
      <h1 className=" text-2xl font-medium">Latest Recipes</h1>
      <div id="recipe-container">
        {recipe.length > 0 ?
         recipe.map((rep) => (
          <div id="recipe-content" className="p-4">
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
      </div>


      {/* 
       <div id="recipe-content" className="p-4">
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
                Pumpkin Marshmallow Pie
              </div>
              <p className="text-zinc-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ex vero quibusdam maiores dolore expedita tempora
                sapiente rem facere ipsam.
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
          </div> */}
    </div>
  );
};

export default Recipes;
