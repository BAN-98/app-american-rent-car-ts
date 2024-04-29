import { Link } from "react-router-dom";
import registerImage from "../assets/registerImage.webp";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../components/ui/Input";
import { registerUser} from "../api/auth";
import { Iuser } from "../interfaces";
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fielNames = [
    {
      label: "Correo",
      name: "email",
      type: "text",
      reqired: true,
      placeholder: "jhonDoe@gmail.com",
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      reqired: true,
    },
    {
      label: "Nombre",
      name: "user_name",
      type: "text",
      reqired: true,
      placeholder: "Jhon Doe",
    },
    {
      label: "Direccion",
      name: "address",
      type: "text",
      reqired: true,
    },
    {
      label: "Telefono",
      name: "phone",
      type: "text",
      reqired: true,
    },
    {
      label: "Fecha de Naicimiento",
      name: "birthday",
      type: "date",
      reqired: false,
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none";
  const registerForm = async (data: FieldValues) => {
    const response = await registerUser(data as Iuser)
    console.log(response);
  };

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

          <form className="mt-6" onSubmit={handleSubmit(registerForm)}>
            {fielNames.map((props, index) => (
              <Input
                key={index}
                {...props}
                register={register}
                className={inputClass}
                containerClassName={props.name === "email" ? "mt-4" : ""}
              />
            ))}

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Sign Up
            </button>
          </form>
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
