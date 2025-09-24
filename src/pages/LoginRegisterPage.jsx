import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginRegisterPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const registerHandler = (data) => {
    console.log(data);
    reset();
  };

  const loginHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="py-5 px-4">
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
