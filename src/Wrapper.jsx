import { createContext, useState } from "react";
export const recipeContext = createContext();

const Wrapper = (props) => {
  const [data, setData] = useState(null);
  return <recipeContext.Provider value={[data,setData]}>{props.children}</recipeContext.Provider>;
};

export default Wrapper;
