import { login } from "../../services/authService";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await login(data);

    console.log(response.data);

    alert("Login Successful!");

  } catch (error) {
    console.error(error);

    alert("Invalid credentials");
  }
};

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <div className="text-center mb-8">

        <h1 className="text-3xl font-bold text-green-700">
          MaliTrack
        </h1>

        <p className="text-gray-500 mt-2">
          Sign in to your account
        </p>

      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>

          <label className="block mb-2 font-medium">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaEnvelope className="text-gray-400"/>

            <input
              type="email"
              className="w-full p-3 outline-none"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required"
              })}
            />

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </p>

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaLock className="text-gray-400"/>

            <input
              type="password"
              className="w-full p-3 outline-none"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required"
              })}
            />

          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.password?.message}
          </p>

        </div>

        <button
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
        >
          Login
        </button>

      </form>

      <div className="mt-6 text-center">

        <button className="text-green-700 hover:underline">
          Forgot Password?
        </button>

      </div>

    </div>
  );
}