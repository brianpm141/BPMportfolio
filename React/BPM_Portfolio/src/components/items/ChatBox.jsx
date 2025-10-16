import React, { useState, useEffect, useRef } from "react";

// URL base de la API que quieres integrar
const API_BASE_URL = "https://mini-enigma.vercel.app/minienigma";

export default function ChatBoxNoTailwind() {
  const [input, setInput] = useState("");
  const [statusMsg, setStatusMsg] = useState("");   // validación / estado / loading / errores
  const [apiResult, setApiResult] = useState(null); // resultado real de la API (string)
  const [password, setPassword] = useState("");
  const [encode, setEncode] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mountedRef = useRef(true);
  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  const validate = (currentInput, currentPassword) => {
    const trimmed = currentInput.trim();
    const pwdTooShort = currentPassword.length < 15;

    if (trimmed === "" && pwdTooShort) {
      return { valid: false, message: "Escribe un mensaje y la contraseña debe tener mínimo 15 caracteres." };
    }
    if (trimmed === "") {
      return { valid: false, message: "Por favor escribe un mensaje." };
    }
    if (pwdTooShort) {
      return { valid: false, message: "La contraseña debe tener mínimo 15 caracteres." };
    }
    return { valid: true, message: "Presiona el botón para transformar el mensaje." };
  };

  // validación en tiempo real -> actualiza isValid y statusMsg (solo si no hay resultado de API mostrado)
  useEffect(() => {
    const { valid, message } = validate(input, password);
    setIsValid(valid);

    // Si no hay resultado actual mostrado, mostramos el mensaje de estado
    if (!isLoading && apiResult === null) {
      setStatusMsg(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, password, isLoading, apiResult]);

  const callApi = async (endpoint, message, currentPassword) => {
    if (!mountedRef.current) return;
    setIsLoading(true);
    setStatusMsg("Cargando...");
    setApiResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, password: currentPassword }),
      });

      // lee texto por si la API no responde JSON válido
      const text = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        parsed = null;
      }

      console.log("API raw response:", { status: response.status, text, parsed });

      if (!response.ok) {
        // intenta extraer detalle si existe
        let detail = `Error HTTP! Status: ${response.status}`;
        if (parsed && parsed.detail) detail = parsed.detail;
        throw new Error(detail);
      }

      // Si la API devuelve un campo `result` usamos eso; si no, mostramos JSON crudo/texto
      let finalString;
      if (parsed && typeof parsed.result !== "undefined") {
        const nicePrefix = endpoint.replace("/", "").toUpperCase();
        finalString = `${nicePrefix}: ${parsed.result}`;
      } else if (parsed) {
        finalString = `RESPUESTA: ${JSON.stringify(parsed)}`;
      } else {
        finalString = `RESPUESTA: ${text}`;
      }

      if (mountedRef.current) {
        setApiResult(finalString);
        setStatusMsg(""); // limpiamos status porque ahora mostramos resultado
      }
    } catch (err) {
      if (mountedRef.current) {
        setApiResult(null);
        setStatusMsg(`Error al procesar: ${err.message}`);
      }
    } finally {
      if (mountedRef.current) setIsLoading(false);
    }
  };

  const handleAction = () => {
    const trimmed = input.trim();
    const { valid, message } = validate(input, password);

    if (!valid || isLoading) {
      // feedback inmediato
      if (!isLoading) {
        setApiResult(null);
        setStatusMsg(message);
      }
      return;
    }

    const endpoint = encode ? "/encrypt" : "/decrypt";
    callApi(endpoint, trimmed, password);
  };

  return (
    <div className="cb-root">
      <div className="cb-row">
        <div className="cb-col">
          <label htmlFor="cb-input">Ingresa el mensaje</label>
          <textarea
            id="cb-input"
            value={input}
            onChange={(e) => { setApiResult(null); setInput(e.target.value); }}
            placeholder="Escribe aquí..."
            rows={6}
            aria-label="Mensaje a transformar"
          />
        </div>

        <div className="cb-col">
          <label htmlFor="cb-output">Salida (Mensajes y Resultado)</label>
          <textarea
            id="cb-output"
            readOnly
            value={apiResult !== null ? apiResult : statusMsg}
            rows={6}
            aria-label="Salida"
          />
        </div>
      </div>

      <div className="cb-controls">
        <div className="cb-pass">
          <label htmlFor="cb-pass">Contraseña</label>
          <input
            id="cb-pass"
            type="password"
            value={password}
            onChange={(e) => { setApiResult(null); setPassword(e.target.value); }}
            placeholder="Mínimo 15 caracteres"
            aria-label="Contraseña"
          />
        </div>

        <div className="cb-toggle">
          <span>Encriptar</span>
          <label className="cb-switch">
            <input
              type="checkbox"
              checked={encode}
              onChange={(e) => setEncode(e.target.checked)}
              aria-label="Alternar Encriptar/Desencriptar"
            />
            <span className="cb-slider" />
          </label>
          <span>Desencriptar</span>
        </div>

        <button
          className="cb-action"
          onClick={handleAction}
          disabled={!isValid || isLoading}
          aria-disabled={!isValid || isLoading}
        >
          {isLoading ? "Procesando..." : (encode ? "Encriptar" : "Desencriptar")}
        </button>
      </div>
    </div>
  );
}
