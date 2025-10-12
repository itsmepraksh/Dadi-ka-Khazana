import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RecipeContext } from "../context/DataContext";

const LoginRegisterPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const {setIsLoggedIn} = useContext(RecipeContext)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const generateToken = (email)=>{
    return btoa(email + "_" + new Date().getTime())
  } 

  const encryptPassword = (password)=>{
    return btoa(password + "_" + new Date().getTime())
  }

  const decryptPassword = (password)=>{
    return atob(password)
  }

  const registerHandler = ({ username, email, password }) => {

    // console.log(username, email, password);

    let user_name = username.trim().toLowerCase();
    let user_email = email.trim().toLowerCase();
    let user_password = password.trim().toLowerCase();



    // const isExists = localStorage.getItem("userCredentials") 
    // console.log(isExists)

    try {

      if (!user_email || !user_name || !user_password) throw new Error("invalid data");

      const isExists = JSON.parse(localStorage.getItem("userCredentials"))

      if(isExists && isExists.user_email === user_email) throw new Error("Credentials Exists")

      console.log(isExists)

      user_password = encryptPassword(user_password)

      const userCredentials = { user_name, user_email, user_password }

      localStorage.setItem("userCredentials", JSON.stringify(userCredentials))

      const token = generateToken(user_email);

      localStorage.setItem("token",token)
      setIsLoggedIn(true)

      toast.success("Registration successful!");

    } catch (err) {
      console.error(err)
      toast.error(err.message || "Registration failed !");
    } 

    reset();
  };

  const loginHandler = ({email, password}) => {
 
    let user_email = email.trim().toLowerCase();
    let user_password = password.trim().toLowerCase();

    try {

      if( !user_email || !user_password) throw new Error("Invalid Credentials");

      const isExists = JSON.parse(localStorage.getItem("userCredentials"));
      if(!isExists) throw new Error("Invalid Credentials");

      if(isExists && isExists.user_email !== user_email) throw new Error("Email or Password gone wrong!");

      console.log(decryptPassword(isExists.user_password))

      const verifyPassword = decryptPassword(isExists.user_password).split('_') 
      console.log(verifyPassword)

      if(verifyPassword[0] !== user_password) throw new Error("Email or Password gone wrong!");

      

      const token = generateToken(isExists.user_email)

      localStorage.setItem("token",token)

      setIsLoggedIn(true)
      toast.success("LoggedIn successfully!")
      
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Login Failed")
    }
    
    reset();
  };

  return (
    <div className="py-20 px-4 md:px-[7%] md:py-[12%] lg:w-1/2 flex flex-col lg:place-self-center ">
      <h1 className="text-center text-4xl font-bold">Welcome</h1>
      <p className="text-zinc-400 text-center py-2 text-lg">
        Please login or create an account
      </p>
      <div
        id="btn-box"
        className="flex items-center justify-center gap-2 py-10 font-medium"
      >
        <button
          onClick={() => {
            setIsClicked(!isClicked);
            reset();
          }}
          className={
            isClicked
              ? "w-35"
              : "w-35 bg-red-400 rounded-3xl py-2 active:scale-[0.95] hover:bg-red-300 transition"
          }
        >
          Login
        </button>
        <button
          onClick={() => {
            setIsClicked(!isClicked);
            reset();
          }}
          className={
            isClicked
              ? "w-35 bg-red-400 rounded-3xl py-2 active:scale-[0.95] hover:bg-red-300 transition"
              : "w-35"
          }
        >
          Register
        </button>
      </div>
      <div>
        {isClicked ? (
          <form
            id="register-form"
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col gap-5"
          >
            <input
              {...register("username", { required: true })}
              className="border-[0.9px] border-zinc-600 p-4 rounded-3xl placeholder:text-zinc-400"
              placeholder="Full Name"
              type="name"
            />
            {errors.username && (
              <small className="text-red-500 text-xs">This is required</small>
            )}
            <input
              {...register("email", { required: true })}
              className="border-[0.9px] border-zinc-600 p-4 rounded-3xl placeholder:text-zinc-400"
              placeholder="Email"
              type="email"
            />
            {errors.email && (
              <small className="text-red-500 text-xs">This is required</small>
            )}
            <input
              {...register("password", { required: true })}
              className="border-[0.9px] border-zinc-600 p-4 rounded-3xl placeholder:text-zinc-400"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <small className="text-red-500 text-xs">This is required</small>
            )}

            <button className=" bg-red-400 rounded-3xl py-3 active:scale-[0.95] hover:bg-red-300 transition">
              Register
            </button>
          </form>
        ) : (
          <form
            id="login-form"
            onSubmit={handleSubmit(loginHandler)}
            className="flex flex-col gap-5"
          >
            <input
              {...register("email", { required: true })}
              className="border-[0.9px] border-zinc-600 p-4 rounded-3xl placeholder:text-zinc-400"
              placeholder="Email"
              type="email"
            />
            {errors.email && (
              <small className="text-red-500 text-xs">This is required</small>
            )}
            <input
              {...register("password", { required: true })}
              className="border-[0.9px] border-zinc-600 p-4 rounded-3xl placeholder:text-zinc-400"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <small className="text-red-500 text-xs">This is required</small>
            )}

            <button className=" bg-red-400 rounded-3xl py-3 active:scale-[0.95] hover:bg-red-300 transition">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPage;
