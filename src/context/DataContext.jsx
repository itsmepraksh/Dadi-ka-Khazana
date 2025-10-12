
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const DataContext = ({ children }) => {
 

  const [showBtn, setShowBtn] = useState(false)
  const [recipe, setRecipe] = useState(() => {
    try {
      const storedRecipes = localStorage.getItem("recipe");
      return storedRecipes ? JSON.parse(storedRecipes) : [];

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

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // console.log(isLoggedIn)

  useEffect(() => {

    // localStorage.setItem("userCredentials", "")
    const token = localStorage.getItem('token')
    localStorage.setItem("recipe", JSON.stringify(recipe));
    localStorage.setItem("cart",JSON.stringify(cart))
 

    if (!token) setIsLoggedIn(false)
    else setIsLoggedIn(true)
  }, [recipe,cart])





  return (
    <RecipeContext.Provider value={{ recipe, setRecipe, showBtn, setShowBtn, isLoggedIn, setIsLoggedIn,cart,setCart }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default DataContext;
