import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full ">
      <div id="nav-data" className=" p-5 flex flex-row-reverse md:flex-row items-center  justify-between items-center">
        <FontAwesomeIcon className="text-2xl" icon={faUser} />
        <h1 className="text-red-300 font-['GilroyBold'] text-2xl md:w-[40%]">
          Dadi ka Kazana
        </h1>
        <h2 onClick={() => setToggle(!toggle)} className="text-2xl md:hidden">
          &#9776;
        </h2>
      </div>

      <div
        className={
          toggle
            ? "absolute top-20 z-[99] bg-red-400/90 h-[88vh] w-full flex flex-col  md:flex-row justify-center items-center gap-4 p-5 font-medium"
            : "hidden md:flex w-[60%] justify-center items-center gap-3 text-sm "
        }
      >
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
      </div>
    </div>
  );
};

export default Nav;
