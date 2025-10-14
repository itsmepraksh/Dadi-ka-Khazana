
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const DataContext = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

    const generalRecipe = [
    {
      recipeName: "Pumpkin Marshmallow Pie",
      ingredients: "1 (9 inch) unbaked pie crust, 3/4 cup white sugar, 1/2 teaspoon salt, 1 teaspoon ground cinnamon, 1/2 teaspoon ground ginger, 1/4 teaspoon ground cloves, 2 large eggs, beaten, 1 (15 ounce) can pumpkin, 1 (12 fluid ounce) can evaporated milk, 2 cups miniature marshmallows",
      instructions: "Preheat oven to 425 degrees F (220 degrees C). In a large bowl, mix sugar, salt, cinnamon, ginger, and cloves. Beat in eggs. Stir in pumpkin. Gradually stir in evaporated milk. Pour into pie crust. Bake in preheated oven for 15 minutes. Reduce temperature to 350 degrees F (175 degrees C), and continue baking for 40 to 50 minutes, or until a knife inserted near the center comes out clean. During the last 5 minutes of baking, sprinkle marshmallows over the top of the pie. Continue baking until marshmallows are puffed and lightly browned. Cool on a wire rack for 2 hours. Serve or refrigerate.",
      recipeImage: "https://images.unsplash.com/photo-1462392407305-011695db8df4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      recipeName: "Jaggery Rice Pudding",
      ingredients: "You will need 2-3 tablespoons of sesame seeds (til) to dry roast, 1-2 tablespoons of ghee, 8-10 cashews, 8-10 almonds, and 1 tablespoon of raisins to lightly fry. Additionally, 1 liter of milk, 1/4 cup of rice (soaked for about 30 minutes), 1/2 to 3/4 cup of grated jaggery (adjust to taste), and 1/2 teaspoon of cardamom powder are required. For extra flavor, you can also add some saffron strands if you like. Combining all these ingredients will help you make a delicious sesame and jaggery kheer, which tastes even better when served in traditional clay cups.",
      instructions:
        "1. Dry roast til on low flame until golden and aromatic. Keep aside.\n2. Heat ghee in a heavy-bottomed pan, lightly fry cashews, almonds, and raisins. Remove and set aside.\n3. In the same pan, add milk and bring to a boil.\n4. Add soaked rice and cook on low flame, stirring occasionally, until the rice is fully cooked and milk is thickened (20-25 mins).\n5. Add grated jaggery and mix well. Stir continuously for 5-7 mins so it doesn't curdle.\n6. Add roasted til, cardamom powder, and the fried dry fruits.\n7. Simmer for another 5 minutes. Turn off the heat.\nLet it rest for 10 minutes. Serve warm in mitti ke kulhads for that rustic feel. Refrigerate leftovers."
      ,
      recipeImage:
        "https://images.unsplash.com/photo-1714040292680-5a9ea419b6b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"

    },
    {
      recipeName: "Sabudana Vada",
      ingredients: "1 cup sabudana (tapioca pearls), 2 medium potatoes (boiled & mashed), 1/2 cup roasted peanuts (crushed), 2 green chilies (finely chopped), 1 teaspoon grated ginger, 1 tablespoon chopped coriander leaves, 1 teaspoon cumin seeds, Salt to taste, Oil for deep frying",
      instructions: "1. Rinse sabudana in water 2-3 times, then soak it in just enough water to cover for 5-6 hours or overnight. 2. Once soaked, drain any excess water completely. 3. In a large bowl, mix soaked sabudana, mashed potatoes, crushed roasted peanuts, green chilies, ginger, coriander, cumin seeds, and salt. 4. Mix well to form a soft dough-like mixture. 5. Divide into equal portions and shape into flat vadas. 6. Heat oil in a deep pan on medium heat. 7. Fry the vadas in hot oil till golden and crisp from both sides. 8. Drain on paper towel and serve hot with green chutney or sweetened curd.",
      recipeImage: "https://images.unsplash.com/photo-1603554593710-89285666b691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  ]
 
  const [userPost, setUserPost] = useState(()=>{
    try {
      const storedPost = localStorage.getItem("posts");
      return storedPost ? JSON.parse(storedPost) : [];
    } catch (err) {
      console.error("userPost load failed : ",err)
      return [];
    }
  })

  const [recipe, setRecipe] = useState(() => {
    try {
      const storedRecipes = localStorage.getItem("recipe");

      if(storedRecipes){
        const userCreated = JSON.parse(storedRecipes);

        const alreadyHasGeneral = userCreated.some(r=> r.recipeName === "Pumpkin Marshmallow Pie");

        if(!alreadyHasGeneral){
          const merged = [...generalRecipe, ...userCreated];
          localStorage.setItem("recipe",JSON.stringify(merged));
          return merged;
        }

        return userCreated;
      }
      else{
        localStorage.setItem("recipe", JSON.stringify(generalRecipe));
        return generalRecipe;
      } 

    } catch (err) {
      console.error("localstorage data broken", err);
      return []
    }
  });

  const [cart, setCart] = useState(()=>{
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Cart load failed : ",err)
      return [];
    }
  }) 

  // console.log(isLoggedIn)

  useEffect(() => {
 
    const token = localStorage.getItem('token')
    localStorage.setItem("recipe", JSON.stringify(recipe));
    localStorage.setItem("cart",JSON.stringify(cart))
 

    if (!token) setIsLoggedIn(false)
    else setIsLoggedIn(true)
  }, [recipe,cart])

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe, showBtn, setShowBtn, isLoggedIn, setIsLoggedIn,cart,setCart, userPost, setUserPost }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default DataContext;
