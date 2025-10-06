
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const DataContext = ({ children }) => {


  // const [loginDta, setLoginDta] = useState([])

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

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log(isLoggedIn)

  useEffect(() => {

    // localStorage.setItem("userCredentials", "")
    const token = localStorage.getItem('token')
    localStorage.setItem("recipe", JSON.stringify(recipe));


    if (!token) setIsLoggedIn(false)
    else setIsLoggedIn(true)
  }, [recipe])





  return (
    <RecipeContext.Provider value={{ recipe, setRecipe, showBtn, setShowBtn, isLoggedIn, setIsLoggedIn }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default DataContext;
