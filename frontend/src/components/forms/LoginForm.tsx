
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { authUser } from "../../api/auth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,/* 
    formState: { errors }, */
  } = useForm();
  const fieldNames = [
    {
      label: "Email",
      name: "email",
      type: "text",
      reqired: true,
      placeholder: "jhon@gmail.com",
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      reqired: true,
    },
  ];
  const registerForm: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    await authUser(data);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none";
  return (
    <form className="mt-6" onSubmit={handleSubmit(registerForm)}>
      {fieldNames.map((props, index) => (
        <Input
          key={index}
          {...props}
          register={register}
          className={inputClass}
        />
      ))}
      <button
        type="submit"
        className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
