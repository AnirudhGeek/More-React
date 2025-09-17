import { useForm } from "react-hook-form";

function ReactHookFormExamplePage() {
  //it is always recommended that we should use react hook form with the libraries like zod

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData){
    console.log(formData)

    //API calling
    reset()
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col items-center gap-2">
        <div>
          <label>Name</label>
          <input {...register('name')} className="border ml-2" type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input {...register('email',{
            required:true
          })} className="border ml-2" type="email" name="email" />
            {
                errors.email && errors.email.type === 'required' ? <p className="text-red-400 font-bold m-5">Email is required</p> : null
            }
        </div>
        <div>
          <label>Password</label>
          <input {...register('password',{
            required:true,
            minLength:8
          })} className="border ml-2" type="password" name="password" />
          {
            errors.password && errors.password.type === "required" ? <p className="text-red-400 font-bold m-5">Password is required</p> : null
          }
          {
            errors.password && errors.password.type === "minLength" ? <p className="text-red-400 font-bold m-5">Password should be atleast 8 characters</p> : null
          }
        </div>

        <button className="border px-1.5 py-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookFormExamplePage;
