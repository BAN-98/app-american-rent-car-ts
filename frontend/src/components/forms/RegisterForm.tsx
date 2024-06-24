import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { registerUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
 /*  const { userRegister, user } = useAuth(); */

  const {
    register,
    handleSubmit,
    /*  formState: { errors }, */
  } = useForm<FieldValues>();

  const fielNames = [
    {
      label: "Correo",
      name: "email",
      type: "text",
      required: true,
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

  const registerForm: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    await registerUser(data);
  };
  return (
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
  );
};

export default RegisterForm;
