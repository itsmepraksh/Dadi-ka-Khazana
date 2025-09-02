 
import {useForm} from 'react-hook-form'
const Connect = () => {

  const {register,reset,handleSubmit} = useForm()

  const submitHandler = (data)=>{
    console.log(data)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <input {...register("title")} type="text" placeholder="name" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Connect