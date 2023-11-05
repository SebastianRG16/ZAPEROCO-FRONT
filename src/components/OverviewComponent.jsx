import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://apizaperoco.onrender.com/donation/donation/";

export function OverviewComponent() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        await axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data);
        });
      } catch (error) {
        setPost(null);
      }
    };
    getPost();
  }, []);

  return (
    <div className="h-screen">
      <div className="flex h-full">
        {post == null ? (
          <div className="w-full mt-20 flex justify-center items-center">
            <div className="">cargando...</div>
          </div>
        ) : (
          <section className="container mx-auto p-6 font-mono h-full mt-20">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th className="px-4 py-3">Nombre completo</th>
                      <th className="px-4 py-3">Cédula</th>
                      <th className="px-4 py-3">Tipo donación</th>
                      <th className="px-4 py-3">Teléfono</th>
                      <th className="px-4 py-3">Correo</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {post &&
                      post.map((user, index) => (
                        <tr className="text-gray-700" key={index}>
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              {/* <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div> */}
                              <div>
                                <p className="font-semibold text-black">
                                  {user.name + " " + user.lastName}
                                </p>
                                <p className="text-xs text-gray-600">
                                  Invitado {user.tipe_user}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            {user.card}
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-semibold  leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              {user.tipe_donation}{" "}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            {user.celphone}
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            {user.email}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
