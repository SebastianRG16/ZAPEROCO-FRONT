import React, { useEffect, useState } from 'react';
import WebSocketClient from 'websocket';

export function ReadQRComponent() {
  const [message, setMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Establece la conexión WebSocket
    const websocket = new WebSocketClient.w3cwebsocket('wss://pruebas-1nzk.onrender.com');
    setWs(websocket);

    // Maneja el evento de apertura de la conexión WebSocket
    websocket.onopen = () => {
      console.log('Conexión WebSocket abierta');
    };

    // Maneja los mensajes recibidos a través del WebSocket
    websocket.onmessage = (messageEvent) => {
      const messageData = messageEvent.data;
      console.log('hola')
      try {
        const data = JSON.parse(messageData);
        setMessage(data.message);
      } catch (error) {
        // Si no se puede analizar como JSON, muestra el mensaje tal como está
        setMessage(messageData);
      }
    };

    // Maneja el cierre de la conexión WebSocket
    websocket.onclose = () => {
      console.log('Conexión WebSocket cerrada');
    };

    // Cierra la conexión WebSocket cuando el componente se desmonta
    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (ws && inputMessage) {
      ws.send(JSON.stringify({ message: inputMessage }));
      setInputMessage('');
    }
  };

  return (
    <div className="mt-20">
      <h1>WebSocket Data:</h1>
      <p>{message}</p>
      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
}