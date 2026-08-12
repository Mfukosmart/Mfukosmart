import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { register as registerUser } from "../../services/authService";

export default function Register() {

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const onSubmit = async(data)=>{

        try{

            const res = await registerUser(data);

            alert(res.data.message);

        }catch(err){

            console.log(err);

            alert("Registration failed");

        }

    }

    return(

        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

            <h1 className="text-3xl font-bold text-center text-green-700">

                Create Business Account

            </h1>

            <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-6">

                <input
                placeholder="Business Name"
                className="w-full border p-3 rounded-lg"
                {...register("businessName",{required:true})}
                />

                <input
                placeholder="Owner Name"
                className="w-full border p-3 rounded-lg"
                {...register("ownerName",{required:true})}
                />

                <input
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                {...register("email",{required:true})}
                />

                <input
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                {...register("phone",{required:true})}
                />

                <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded-lg"
                {...register("password",{required:true})}
                />

                <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border p-3 rounded-lg"
                {...register("confirmPassword",{required:true})}
                />

                <button
                className="w-full bg-green-700 text-white py-3 rounded-lg">

                    Register

                </button>

            </form>

            <p className="text-center mt-5">

                Already have an account?

                <Link
                to="/"
                className="text-green-700 ml-2">

                    Login

                </Link>

            </p>

        </div>

    );

}