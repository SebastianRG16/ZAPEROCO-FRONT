import { useForm } from "react-hook-form";
import niñosCancer from "../assets/images/niñosCancer.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const URL = "https://apizaperoco.onrender.com/generate_token/";

export function LogginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await toast.promise(
      axios
        .post(URL, {
          username: data.username,
          password: data.password,
        })
        .then(async (response) => {
          navigate('home/')
        }),
      {
        loading: "Verificando...",
        success: <b>Credenciales correctas!</b>,
        error: <b>Credenciales incorrectas</b>,
      }
    );

    setIsLoading(false);
  });

  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{ backgroundImage: `url(${niñosCancer})` }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Zaperoco</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 ">
                  ZAPEROCO
                </h2>

                <p className="mt-3 text-gray-500 ">
                  Inicie sesión para acceder a su cuenta
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={onSubmit}>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Usuario
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      placeholder="ejemplo@ejemplo.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register("username", { required: true })}
                    />
                    {errors.username && (
                      <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                        Este campo es requerido
                      </span>
                    )}
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600 ">
                        Contraseña
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      ></a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Tu contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="flex text-red-600 text-[10px] font-semibold ml-2 sm:text-[12px] md:text-[13px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                        Este campo es requerido
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <button className="w-full mb-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Iniciar sesión
                    </button>
                    <Link
                      to="donar"
                      type="button"
                      className="cursor-pointer text-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Hacer donacion
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
