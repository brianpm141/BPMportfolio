document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const swapButton = document.getElementById('swap-button');
    const entradaTextarea = document.getElementById('entrada');
    const claveEnigmaTextarea = document.getElementById('clave_enigma');
    const salidaTextarea = document.getElementById('salida');

    const API_BASE_URL = 'https://mini-enigma.vercel.app/minienigma';

    const callApi = async (endpoint, message, password) => {
        try {
            salidaTextarea.value = "Cargando...";
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            salidaTextarea.value = data.result;

        } catch (error) {
            console.error('Error calling the API:', error);
            salidaTextarea.value = `Error: ${error.message}`;
        }
    };

    encryptButton.addEventListener('click', () => {
        const message = entradaTextarea.value;
        const password = claveEnigmaTextarea.value;
        if (message && password) {
            callApi('/encrypt', message, password);
        } else {
            salidaTextarea.value = 'Por favor, introduce un mensaje y una clave.';
        }
    });

    decryptButton.addEventListener('click', () => {
        const message = entradaTextarea.value;
        const password = claveEnigmaTextarea.value;
        if (message && password) {
            callApi('/decrypt', message, password);
        } else {
            salidaTextarea.value = 'Por favor, introduce un mensaje y una clave.';
        }
    });

    swapButton.addEventListener('click', () => {
        const salidaValue = salidaTextarea.value;
        entradaTextarea.value = salidaValue;
        salidaTextarea.value = "";
    });
});