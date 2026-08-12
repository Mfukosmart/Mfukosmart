import { useForm } from "react-hook-form";

export default function ForgotPassword(){

    const {register,handleSubmit}=useForm();

    const onSubmit=(data)=>{

        alert("Password reset link sent");

    }

    return(

        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-center text-green-700">

                Forgot Password

            </h2>

            <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 mt-6">

                <input
                className="w-full border p-3 rounded-lg"
                placeholder="Enter Email"
                {...register("email")}
                />

                <button
                className="w-full bg-green-700 text-white py-3 rounded-lg">

                    Send Reset Link

                </button>

            </form>

        </div>

    );

}