import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
type Inputs = {
  email: string,
  password: string,
};
const Login = () => {
    const {signIn, signUp} = useAuth()
    const [login, setLogin] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    document.title = "Login/Sign Up"
    const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
        if(login) {
            await signIn(email, password)
        }else{
            await signUp(email, password)
        }
    };
    return (
    <>
        <div className="relative flex  w-screen flex-col bg-black md:items-center md:justify-center
            md:bg-transparent md:h-[65hv]">
            <img src="https://rb.gy/p2hphi" alt="" className=" -z-10 !hidden opacity-60
            sm:!inline object-fill"/>
            
        <form
            className="absolute m-auto  space-y-8 rounded bg-black/75 py-10 px-6  md:max-w-md md:px-14 text-center text-black"
            onSubmit={handleSubmit(onSubmit)}
            >
            <h1 className="text-4xl font-semibold text-white">{login ? "Login" : "Sign Up"}</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                <input
                    type="email"
                    placeholder="Email"
                    className={`input ${
                    errors.email && 'border-b-2 border-orange-500'
                    }`}
                  {...register('email', { required: true })}
                />
                {errors.email && (
                    <p className="p-1 text-[13px] font-light  text-orange-500">
                    Please enter a valid email.
                    </p>
                )}
                </label>
                <label className="inline-block w-full">
                <input
                    type="password"
                  {...register('password', { required: true })}
                    placeholder="Password"
                    className={`input ${
                    errors.password && 'border-b-2 border-orange-500'
                    }`}
                />
                {errors.password && (
                    <p className="p-1 text-[13px] font-light  text-orange-500">
                    Your password must contain between 4 and 60 characters.
                    </p>
                )}
                </label>
            </div>
            <button
                className="w-full rounded text-white py-3 font-semibold"
                type="submit"
            >
                {login ? "Login" : "Sign Up"}
            </button>
            <div className="text-[gray]"  onClick={() => login ? setLogin(false) : setLogin(true)}>
                {login &&  "Not a member?"}
                {!login &&  "Already a member?"}
                <p
                className="cursor-pointer text-white hover:underline"
                >
                    {login && "Sign up"}
                    {!login && "Login"}
                </p>
            </div>
        </form>
        </div>
    </>
    )
}

export default Login