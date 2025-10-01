import { useContext } from "react";
import { useForm } from "react-hook-form"
import { RecipeContext } from "../context/DataContext";

 

const AddRecipe = () => {

  const {recipe , setRecipe , setShowBtn} = useContext(RecipeContext);



    const {register,reset , handleSubmit , formState:{errors}} = useForm();

    const submitHandler = (data)=>{
        console.log(data)

        const copyRecipe = [...recipe];
        copyRecipe.push(data);
        setRecipe(copyRecipe);
        reset()
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
    <section className="p-4 absolute bg-zinc-900 w-full h-[90vh] z-[99] top-15  flex flex-col">
      <small
      onClick={()=>setShowBtn(false)}
       className="ml-auto border-[1px] border-white text-xs text-zinc-300 p-1">close</small>
        <form  className="flex flex-col gap-y-4">
        <label className="flex flex-col gap-y-2" >
          <p >Recipe Name</p>
          <input type="text" 
          placeholder="e.g, Spicy Thai Basil Chicken" 
          className="bg-zinc-700 p-3 rounded-lg text-sm"
          />
        </label>
        
        <label className="flex flex-col gap-y-2" >
          <p >Recipe Image</p>
          <input type="text" 
          placeholder="e.g, Spicy Thai Basil Chicken" 
          className="bg-zinc-700 p-3 rounded-lg text-sm"
          />
        </label>
        
        <label className="flex flex-col gap-y-2" >
          <p>Ingredients</p> 
          <textarea rows="3"
           placeholder="e.g, Spicy Thai Basil Chicken"
           className="bg-zinc-700 p-3 rounded-lg text-sm"></textarea>
        </label>
        
        <label className="flex flex-col gap-y-2" >
          <p >Instructions</p>
          <textarea rows="5" 
          placeholder="e.g, Spicy Thai Basil Chicken" 
          className="bg-zinc-700 p-3 rounded-lg text-sm"
          ></textarea>
        </label>

        <button className="bg-red-400 font-['GilroyBold'] py-3 rounded-lg active:scale-[0.95] transition">create</button>

        </form>

      </section>
  )
}

export default AddRecipe