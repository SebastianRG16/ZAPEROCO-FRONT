import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const location = useLocation();
  const direccion = location.pathname;

  // Define un estado para controlar la visibilidad del menú en pantallas pequeñas
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú en pantallas pequeñas
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="h-full w-full justify-center flex bg-slate-200">
      <nav className="fixed mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div>
          <div className="container mx-auto flex items-center justify-between text-gray-900">
            <a
              href=""
              className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <span className="font-bold">Zaperoco</span>
            </a>
            <ul className="hidden items-center gap-6 lg:flex">
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link
                  to="/home"
                  className={` ${
                    direccion == "/home"
                      ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                      : ""
                  } flex items-center hover:text-cyan-900  hover:font-semibold`}
                >
                  Registrar información
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link
                  to="donaciones/"
                  className={` ${
                    direccion == "/home/donaciones/"
                      ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                      : ""
                  } flex items-center hover:text-cyan-900  hover:font-semibold`}
                  href=""
                >
                  Donaciones
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link
                  to="resumen/"
                  className={` ${
                    direccion == "/home/resumen/"
                      ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                      : ""
                  } flex items-center hover:text-cyan-900  hover:font-semibold`}
                  href=""
                >
                  Resumen
                </Link>
              </li>
            </ul>
            <Link
              to="/"
              className="middle none center hidden rounded-lg bg-gradient-to-tr from-red-600 to-red-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              data-ripple-light="true"
            >
              <span>Salir</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              data-collapse-target="navbar"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div
            className={`${
              menuVisible ? "overflow" : "overflow-hidden"
            } block h-0 w-full basis-full text-blue-gray-900 transition-all duration-300 ease-in lg:hidden`}
            style={{ zIndex: 1 }}
          >
            <div className="container mx-auto pb-2 bg-white">
              <ul className="mt-2 mb-4 flex flex-col gap-2">
                <li className="flex justify-center mt-2 p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link
                    to="/home"
                    className={` ${
                      direccion == "/home"
                        ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                        : "text-black"
                    } flex items-center hover:text-cyan-900  hover:font-semibold`}
                  >
                    Registrar informacion
                  </Link>
                </li>
                <li className="flex justify-center p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link
                    to="donaciones/"
                    className={` ${
                      direccion == "/home/donaciones/"
                        ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                        : "text-black"
                    } flex items-center hover:text-cyan-900  hover:font-semibold`}
                  >
                    Donaciones
                  </Link>
                </li>
                <li className="flex justify-center p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link
                    to="resumen/"
                    className={` ${
                      direccion == "/home/resumen/"
                        ? "font-semibold text-cyan-900 underline underline-offset-8 decoration-amber-500 decoration-wavy decoration-2"
                        : "text-black"
                    } flex items-center hover:text-cyan-900  hover:font-semibold`}
                  >
                    Resumen
                  </Link>
                </li>
              </ul>
              <Link
                to="/"
                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                <span>Salir</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full h-screen">
        <div className="">
          <div className="max-w-screen-xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
