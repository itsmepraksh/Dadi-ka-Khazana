import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="flex justify-between items-center p-5 overflow-x-hidden ">
      <h1 className="text-red-300 font-bold text-3xl md:w-[40%]">Dadi ka Kazana</h1>
      <h2 onClick={()=>setToggle(!toggle)} className="md:hidden">&#9776;</h2>
      <div className={toggle ? "absolute top-20 z-[9] bg-red-400/90 w-[90%] flex flex-col   md:flex-row justify-center items-center gap-4 p-5 font-medium" : "hidden md:flex w-[60%] justify-center items-center gap-3 text-sm "}  >
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/home"
          onClick={() => setToggle(false)}
        >
          home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/recipes"
          onClick={() => setToggle(false)}
        >
          recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/contact"
          onClick={() => setToggle(false)}
        >
          contact
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/connect"
          onClick={() => setToggle(false)}
        >
          connect
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/product"
          onClick={() => setToggle(false)}
        >
          product
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "px-4 py-1 bg-red-400 active:scale-[0.9]"
              : "bg-red-300 px-4 py-1"
          }
          to="/create_recipe"
          onClick={() => setToggle(false)}
        > 
          Create recipe{" "}
        </NavLink>
      </div>

    </div>
  );
};

export default Nav;
