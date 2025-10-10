import { useContext } from "react";
import { useForm } from "react-hook-form"
import { RecipeContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const AddRecipe = () => {

  const {isLoggedIn, recipe, setRecipe, setShowBtn } = useContext(RecipeContext);

  const navigate = useNavigate()

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const recipeHandler = (data) => {
    console.log(data)

    if(!isLoggedIn) return( toast.error('LogIn first!'), setShowBtn(false) ,navigate('/login'))


    const copyRecipe = [...recipe];
    copyRecipe.push(data);
    setRecipe(copyRecipe);
    reset()
    toast.success('recipe added sucessfully!')
  }
  return (
    // <div className='p-5'>
    //     <h1>Share your dadi ki recipe</h1>
    //     <form onSubmit={handleSubmit(submitHandler)} action="" className='flex flex-col gap-3 w-full md:w-1/2 mt-5'>
    //         <input {...register("title")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='recipe name' />
    //         <input {...register("ingr")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='ingredients' />
    //         <input {...register("inst")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='instructions' />
    //         <input {...register("imgUrl")} type="url" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='recipe image' />
    //         <button type='submit' className='bg-blue-400 py-1 active:scale-[0.9]'>Submit</button>
    //     </form>
    // </div>
    <section className="p-4 absolute bg-zinc-900 w-full h-fit z-[99] top-15  flex flex-col">
      <small
        onClick={() => setShowBtn(false)}
        className="ml-auto border-[1px] border-white text-xs text-zinc-300 p-1">close</small>
      <form
        onSubmit={handleSubmit(recipeHandler)}
        className="flex flex-col gap-y-4">
        <label className="flex flex-col gap-y-2" >
          <p >Recipe Name</p>
          <input
            {...register("recipeName", { required: true })}
            type="text"
            placeholder="e.g, Spicy Thai Basil Chicken"
            className="bg-zinc-700 p-3 rounded-lg text-sm"
          />
          {errors.recipeName && <small className="font-[GilroyRegular] text-red-300">This is required</small>}
        </label>

        <label className="flex flex-col gap-y-2" >
          <p >Recipe Image</p>
          <input
            {...register("recipeImage", { required: true })}
            type="text"
            placeholder="e.g, Spicy Thai Basil Chicken"
            className="bg-zinc-700 p-3 rounded-lg text-sm"
          />
          {errors.recipeImage && <small className="font-[GilroyRegular] text-red-300">This is required</small>}
        </label>

        <label className="flex flex-col gap-y-2" >
          <p>Ingredients</p>
          <textarea
            {...register("ingredients", { required: true })}
            rows="3"
            placeholder="e.g, Spicy Thai Basil Chicken"
            className="bg-zinc-700 p-3 rounded-lg text-sm"></textarea>
            {errors.ingredients && <small className="font-[GilroyRegular] text-red-300">This is required</small>}
        </label>

        <label className="flex flex-col gap-y-2" >
          <p >Instructions</p>
          <textarea
            {...register("instructions", { required: true })}
            rows="5"
            placeholder="e.g, Spicy Thai Basil Chicken"
            className="bg-zinc-700 p-3 rounded-lg text-sm"
          ></textarea>
          {errors.instructions && <small className="font-[GilroyRegular] text-red-300">This is required</small>}
        </label>

        {/* <label >
          <p>Rating</p>
        </label> */}

        <button type="submit" className="bg-red-400 font-['GilroyBold'] py-3 rounded-lg active:scale-[0.95] transition">create</button>

      </form>

    </section>
  )
}

export default AddRecipe