import loginImage from "../assets/loginImage.webp";
import carLogo from "../assets/carLogo.webp";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <section className="flex h-screen mx-auto items-center justify-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src={loginImage}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100 ">
          <div className="flex items-center justify-center">
            <img src={carLogo} className="bg-cover size-20 " alt="" />
          </div>
          <h1 className="text-xl text-center md:text-2xl font-bold leading-tight mt-12">
            Ingresa con tu cuenta
          </h1>

          <LoginForm />

          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Necesitas una cuenta ?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Crear una cuenta
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
