import { useContext } from "react";
import { useForm } from "react-hook-form"
import { RecipeContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const AddRecipe = () => {

  const { isLoggedIn, recipe, setRecipe, setShowBtn, userPost, setUserPost } = useContext(RecipeContext);

  const navigate = useNavigate()

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const recipeHandler = async (data) => {
    // console.log(data)

    if (!isLoggedIn) return (toast.error('LogIn first!'), setShowBtn(false), navigate('/login'))

    const file = data.recipeImage[0];
    // console.log(file)

    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    })

    try {
      const base64Image = await toBase64(file);

      const newRecipe = {
        ...data,
        recipeImage: base64Image,
      }

      const copyUserPost = [...userPost]
      copyUserPost.push(newRecipe);
      setUserPost(copyUserPost);

      const copyRecipe = [...recipe];
      copyRecipe.push(newRecipe);
      setRecipe(copyRecipe);
      toast.success('recipe added sucessfully!')
    } catch (err) {
      toast.error("image upload failed!")
      console.error(err)
    }


    reset()
  }

  // console.log(userPost)
  return (
    <section className="p-4 md:px-[7%]  absolute bg-zinc-900 w-full  h-screen overflow-y-scroll  z-[99] top-15 flex flex-col">
      <small
        onClick={() => setShowBtn(false)}
        className="ml-auto border-[1px] border-white text-xs text-zinc-300 p-1">close</small>
      <form
        onSubmit={handleSubmit(recipeHandler)}
        className="flex flex-col gap-y-4 md:gap-y-3">
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
            type="file"
            accept="image/*"
            // placeholder="e.g, Spicy Thai Basil Chicken"
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

        <button type="submit" className="bg-red-400 font-['GilroyBold'] py-3 xl:mt-5 xl:mb-10 rounded-lg active:scale-[0.95] transition">create</button>

      </form>

    </section>
  )
}

export default AddRecipe