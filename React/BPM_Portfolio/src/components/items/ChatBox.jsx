import React, { useState, useEffect } from "react";

// URL base de la API que quieres integrar
const API_BASE_URL = 'https://mini-enigma.vercel.app/minienigma';

// ------------------------------------------------------------------

export default function ChatBoxNoTailwind() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [password, setPassword] = useState("");
  const [encode, setEncode] = useState(true); 
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para la carga de la API


  const handleRealtimeValidation = (currentInput, currentPassword) => {
    const trimmedInput = currentInput.trim();
    const pwdLength = currentPassword.length;
    const inputEmpty = trimmedInput === "";
    const pwdTooShort = pwdLength < 15;

    let message = "";
    let valid = false;

    if (inputEmpty && pwdTooShort) {
      message = "Escribe un mensaje y la contraseña debe tener mínimo 15 caracteres.";
    } else if (inputEmpty) {
      message = "Por favor escribe un mensaje.";
    } else if (pwdTooShort) {
      message = "La contraseña debe tener mínimo 15 caracteres.";
    } else {
      message = "Presiona el botón para transformar el mensaje.";
      valid = true;
    }

    // Solo actualiza output con el mensaje de validación/error si no estamos cargando
    if (!isLoading) {
      setOutput(message);
    }
    setIsValid(valid);
  };

  useEffect(() => {
    handleRealtimeValidation(input, password);
  }, [input, password, isLoading]);

  const callApi = async (endpoint, message, currentPassword) => {
    setIsLoading(true); 
    setOutput("Cargando..."); 
    
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          password: currentPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Error HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      setOutput(`${endpoint.toUpperCase().substring(1)}: ${data.result}`);

    } catch (error) {
      setOutput(`Error al procesar: ${error.message}`);
    } finally {
      setIsLoading(false); // Finalizar carga
    }
  };

  /**
   * Manejador al presionar el botón de acción (Encriptar/Desencriptar)
   */
  const handleAction = () => {
    if (!isValid || isLoading) {
      return;
    }

    // Determinar qué endpoint llamar
    const endpoint = encode ? '/encrypt' : '/decrypt';

    // Llamar a la función de la API
    callApi(endpoint, input.trim(), password);
  };
  
  const handleSwap = () => {
    if (output && !output.startsWith("Error") && !output.startsWith("Cargando")) {
        const resultPrefix = encode ? "ENCRYPT" : "DECRYPT";
        const resultMatch = output.match(/:\s*(.*)/);
        const salidaValue = resultMatch ? resultMatch[1] : output;
        
        setInput(salidaValue.trim());
    } else {
        setInput(output.trim());
        setPassword('');
    }
    setOutput(""); // Limpiar la salida
    // La validación se ejecutará inmediatamente después gracias al useEffect
  };
  

  return (
    <div className="cb-root">
      <div className="cb-row">
        <div className="cb-col">
          <label>Ingresa el mensaje</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí..."
          />
        </div>

        <div className="cb-col">
          <label>Salida (Mensajes y Resultado)</label>
          <textarea
            readOnly
            value={output}
          />
        </div>
      </div>
      
      <div className="cb-controls">
        <div className="cb-pass">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 15 caracteres"
          />
        </div>

        <div className="cb-toggle">
          <span>Encriptar</span>
          <label className="cb-switch">
            <input
              type="checkbox"
              checked={encode}
              onChange={(e) => setEncode(e.target.checked)}
            />
            <span className="cb-slider" />
          </label>
          <span>Desencriptar</span>
        </div>

        {/* Deshabilitar si no es válido o si está cargando */}
        <button className="cb-action" onClick={handleAction} disabled={!isValid || isLoading}>
          {isLoading ? 'Procesando...' : 'Encriptar'}
        </button>
      </div>
    </div>
  );
}