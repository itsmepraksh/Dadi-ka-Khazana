import { useForm } from "react-hook-form"

 

const CreateRecipe = () => {

    const {register,reset , handleSubmit , formState:{errors}} = useForm();

    const submitHandler = (data)=>{
        console.log(data)
        reset()
    }
  return (
    <div className='p-5'>
        <h1>Share your dadi ki recipe</h1>
        <form onSubmit={handleSubmit(submitHandler)} action="" className='flex flex-col gap-3 w-full md:w-1/2 mt-5'>
            <input {...register("title")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='recipe name' />
            <input {...register("ingr")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='ingredients' />
            <input {...register("inst")} type="text" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='instructions' />
            <input {...register("imgUrl")} type="url" className='border-zinc-300 border-[1px] px-3 py-1' placeholder='recipe image' />
            <button type='submit' className='bg-blue-400 py-1 active:scale-[0.9]'>Submit</button>
        </form>
    </div>
  )
}

export default CreateRecipe