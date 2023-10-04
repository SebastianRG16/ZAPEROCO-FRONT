export function DonationsTimeRealComponent() {
  // Datos de ejemplo para comparar dos valores
  const valor1 = 30;
  const valor2 = 70;

  const radio = 100; // Radio del gráfico de torta
  const centerX = radio + 10; // Coordenada X del centro del gráfico
  const centerY = radio + 10; // Coordenada Y del centro del gráfico
  const valor1Angle = (valor1 / 100) * 360; // Ángulo para Valor 1
  const valor2Angle = (valor2 / 100) * 360; // Ángulo para Valor 2

  // Función para calcular las coordenadas de un punto en el borde del círculo
  const calcularCoordenadas = (angle) => {
    const radians = (angle - 90) * (Math.PI / 180);
    const x = centerX + radio * Math.cos(radians);
    const y = centerY + radio * Math.sin(radians);
    return { x, y };
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Comparación de Valores</h1>
        <svg width={radio * 2 + 20} height={radio * 2 + 20}>
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
            strokeDashoffset={`188`} // Ajuste aquí
            transform={`rotate(-90 ${centerX} ${centerY})`}
          />
        </svg>
        <div className="mt-4">
          <p>Valor 1: {valor1}%</p>
          <p>Valor 2: {valor2}%</p>
        </div>
      </div>
    </div>
  );
}
