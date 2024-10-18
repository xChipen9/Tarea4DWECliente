let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById('comprobar').addEventListener('click', comprobarNumero);

function comprobarNumero() {
    const entrada = document.getElementById('adivinarEntrada').value;
    const numero = Number(entrada);  // Corregir el nombre de la variable 'entrada'
    const mensaje = document.getElementById('mensaje');
    
    intentos++;
    document.getElementById('intentos').textContent = `Intentos: ${intentos}`;

    if (numero < 1 || numero > 100 || isNaN(numero)) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        mensaje.className = "";  // Eliminar clases de color si el número es inválido
    } else if (numero === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        mensaje.className = "verde";  // Cambiar a clase verde si es correcto
    } else if (numero > numeroSecreto) {
        mensaje.textContent = "Demasiado alto.";
        mensaje.className = "rojo";  // Cambiar a clase roja si el número es mayor
    } else {
        mensaje.textContent = "Demasiado bajo.";
        mensaje.className = "amarillo";  // Cambiar a clase amarilla si el número es menor
    }
}
