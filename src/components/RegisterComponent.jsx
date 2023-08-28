import juntosLoLograremos from "../assets/images/juntosLoLograremos.png";
import { Link } from "react-router-dom";

export function RegisterComponent() {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-2 max-w-screen-2xl bg-slate-200">
        <div className="flex max-lg:h-screen lg:h-auto">
          <div className="m-auto">
            <div>
              <div className="mt-5 bg-white rounded-lg shadow">
                <div className="flex">
                  <div className="flex-1 py-5 pl-5 overflow-hidden">
                    <svg
                      className="inline align-text-top"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g>
                        <path
                          d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                          fill="none"
                          id="svg_1"
                          stroke="null"
                        ></path>
                        <path
                          d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                          id="svg_2"
                        ></path>
                        <circle
                          cx="7.04807"
                          cy="6.97256"
                          r="2.5"
                          id="svg_3"
                        ></circle>
                      </g>
                    </svg>
                    <h1 className="inline text-2xl font-semibold leading-none">
                      Registrar informacion
                    </h1>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <input
                    placeholder="Nombres"
                    className="mb-2 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                  <input
                    placeholder="Apellidos"
                    className="mb-2 text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />

                  <div className="mb-2 flex-grow">
                    <input
                      placeholder="Cedula"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div className="mb-2 flex-grow">
                    <input
                      placeholder="Numero telefonico"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div className="mb-2 flex-grow">
                    <input
                      placeholder="Correo electronico"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div className="flex w-full mb-2">
                    <div className="w-1/2">
                      <p>Tu aporte voluntario:</p>
                    </div>
                    <div className="w-1/2 grid grid-cols-2">
                      <div className=" items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          //   className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                          className="peer relative h-4 w-4 cursor-pointer  rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          Urna
                        </label>
                      </div>
                      <div className=" items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          //   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          className="peer relative h-4 w-4 cursor-pointer rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 ">
                          Electronico
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 grid grid-cols-2">
                    <div className=" items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        //   className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        className="peer relative h-4 w-4 cursor-pointer  rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-900 ">
                        Asistente
                      </label>
                    </div>
                    <div className=" items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        //   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        className="peer relative h-4 w-4 cursor-pointer rounded-full border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-900 ">
                        Invitado especial
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="flex flex-row-reverse p-3">
                  <div className="flex-initial pl-3">
                    <button
                      type="button"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-green-700 rounded-md hover:bg-green-500  focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                      <span className="pl-2 mx-1">Enviar</span>
                    </button>
                  </div>
                  <div className="flex-initial">
                    <Link
                      to="/"
                      type="button"
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize rounded-md bg-red-700 hover:bg-red-500 hover:fill-curren focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                      </svg>
                      <span className="pl-2 mx-1">Cancelar</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center max-lg:hidden">
          <img
            src={juntosLoLograremos}
            alt=""
            className="object-cover xl:max-[1537px]:h-5/6 rounded"
          />
        </div>
      </div>
    </div>
  );
}
