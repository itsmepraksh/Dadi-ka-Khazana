import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const DataContext = ({ children }) => {
  
  const [showBtn, setShowBtn] = useState(false)
  const [recipe, setRecipe] = useState(() => {
    try {
      const storedRecipes = localStorage.getItem("recipe");
      return storedRecipes ? JSON.parse(storedRecipes) : [];
      
    } catch (err) {
      console.error("localstorage data broken",err);
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  // const [isLoggedIn, setIsLoggedIn] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe , showBtn , setShowBtn }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default DataContext;
