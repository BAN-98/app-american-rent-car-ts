import { Link } from "react-router-dom";
import registerImage from "../assets/registerImage.webp";
import RegisterForm from "../components/forms/RegisterForm";


export const Register = () => {
  return (
    <section className="flex h-screen mx-auto items-center justify-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          loading="lazy"
          src={registerImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-8
        flex items-center justify-center"
      >
        <div className="w-full h-100 ">
          <h1 className="text-xl text-center md:text-2xl font-bold leading-tight">
            Registrate
          </h1>
          <RegisterForm />
          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Ya tienes una cuenta ?{" "}
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Iniciar Sesion
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
