import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://apizaperoco.onrender.com/donation/donation/";

export function DonationsTimeRealComponent() {
  const [get, setGet] = useState(null);
  const [valor1, setValor1] = useState(0); //especial
  const [valor2, setValor2] = useState(0); //invitado

  // Datos de ejemplo para comparar dos valores
  // let valor1 = 0;
  // let valor2 = 0;
  let porcentajeStroke;
  let porcentaje = 0;

  const radio = 100; // Radio del gráfico de torta
  const centerX = radio + 10; // Coordenada X del centro del gráfico
  const centerY = radio + 10; // Coordenada Y del centro del gráfico

  const getFullData = async () => {
    try {
      await axios.get(baseURL).then((response) => {
        setGet(response.data);
        CalculationPerson();
      });
    } catch (error) {
      setGet(null);
    }
  };

  useEffect(() => {
    getFullData();
  }, []);

  useEffect(() => {
    CalculationPerson();
  }, [get]);

  const CalculationPerson = () => {
    
    if (get !== null) {
      const asistentesData = get.filter(
        (user) => user.tipe_user === "asisitente"
      );
      const especialesData = get.filter(
        (user) => user.tipe_user === "especial"
      );
      
      setValor1(asistentesData.length);
      setValor2(especialesData.length);
    }
  };

  const calcularInvitados = () => {
    const totalStroke = 628;
    let totalInvitados = valor1 + valor2;
    porcentaje = Math.trunc((valor2 * 100) / totalInvitados);
    console.log('hola')
    console.log(porcentaje)
    // setporcentaje1(porcentaje)
    // setporcentaje2(100 - porcentaje)
    porcentajeStroke = Math.trunc((totalStroke * porcentaje) / 100);
  };

  calcularInvitados();

  let socket = null;

  function connectWebSocket() {
    socket = new WebSocket("wss://pruebas-1nzk.onrender.com");

    socket.addEventListener("open", (event) => {
      console.log("WebSocket connection established:", event);
    });

    socket.addEventListener("message", () => {
      getFullData();
      // Maneja el mensaje entrante aquí
    });

    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed:", event);

      // Intenta volver a conectarte después de un breve retraso
      // setTimeout(connectWebSocket, 2000);
    });
  }

  useEffect(() => {
    connectWebSocket();
  }, []);

  return (
    <div className="w-full h-screen flex max-md:flex-col justify-center">
      <div className="w-1/2 h-full text-black flex max-md:mt-20 flex-col items-center max-md:w-full justify-center">
        <p className="h-1/2 text-[#FF6384] flex items-center text-9xl font-black">+{valor2}</p>
        <p className="h-1/2 text-[#36A2EB] flex md:-mt-32 items-center text-9xl font-black">+{valor1}</p>
      </div>
      <div className="w-1/2 flex justify-center items-center max-md:w-full h-full">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold mb-16">Comparación de Valores</h1>
          <svg className="" width={radio * 2 + 20} height={radio * 2 + 20}>
            {/* Valor 1 */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radio}
              fill="transparent"
              stroke="#FF6384"
              strokeWidth="20"
              strokeDasharray={`628`}
              strokeDashoffset="628 - 440"
              transform={`rotate(-90 ${centerX} ${centerY})`}
            />
            {/* Valor 2 */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radio}
              fill="transparent"
              stroke="#36A2EB"
              strokeWidth="20"
              strokeDasharray={`628`}
              strokeDashoffset={`${porcentajeStroke}`} // Ajuste aquí
              transform={`rotate(-90 ${centerX} ${centerY})`}
            />
          </svg>
          <div className="mt-4 w-[300px]">
            <p className="text-xl text-right font-semibold">Asistentes: {Math.trunc((valor2 * 100) / (valor1 + valor2))}%</p>
            <p className="text-xl text-right font-semibold">Invitados especiales: {100 - Math.trunc((valor2 * 100) / (valor1 + valor2))}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
