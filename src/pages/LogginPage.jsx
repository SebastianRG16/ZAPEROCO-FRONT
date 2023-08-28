import niñosCancer from "../assets/images/niñosCancer.png";
import { Link, useNavigate } from "react-router-dom";

export function LogginPage() {
  const navigate = useNavigate();

  const validateUser = () => {
    console.log("hola");
    navigate("home");
  };

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
                <form>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="ejemplo@ejemplo.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600 ">
                        Contraseña
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        {/* Forgot password? */}
                      </a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Tu contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={validateUser}
                      className="w-full mb-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
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

                {/* <p className="mt-6 text-sm text-center text-gray-400">
                  ¿Aún no tiene cuenta?{" "}
                  <a
                    href="#"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Crear cuenta
                  </a>
                  .
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
