
const numsecreto = Math.floor(Math.random() * 100) + 1; 


function adivinarNumero() {
    
    let suposicion = parseInt(prompt("Adivina el número entre 1 y 100:"));

    while (suposicion !== numSecreto) {
        if (suposicion < numSecreto) {
            alert("¡Muy bajo! Intenta con un número más alto.");
        } else if (suposicion > numSecreto) {
            alert("¡Muy alto! Intenta con un número más bajo.");
        }

        
        suposicion = parseInt(prompt("Intenta de nuevo:"));
    }

   
    alert("¡Felicidades!  número secreto correcto: " + numSecreto);
}

adivinarNumero();