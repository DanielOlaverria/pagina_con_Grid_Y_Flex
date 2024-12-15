
let fecha = document.getElementById("fecha").innerHTML = new Date(2024, 10, 22, 21, 19);
fecha.innerHTML;

let boton = document.querySelectorAll(".boton");
let mostrarParrafo = document.querySelectorAll(".parrafoOculto")

boton.forEach(function(e, i){
    e.addEventListener("click", function(){
        mostrarParrafo[i].classList.toggle("mostrarparrafo");

        if (mostrarParrafo[i].classList.contains("mostrarparrafo")) {
            e.innerHTML = "Leer menos...";
            e.style.backgroundColor ="#6ff5";
            e.style.color = "#000";
        } else {
            e.innerHTML = "Leer mas...";
            e.style.backgroundColor ="#000";
            e.style.color = "#fff";
        }
    });
})

//Codigo para el funcionamiento del formulario

function validateForm() {
    // Obtener el valor del correo
    const email = document.getElementById('correo').value;
    const emailError = document.getElementById('emailError');

    // Validar si el correo está completo
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
        return false; // Evita el envío del formulario
    }

    // Si el correo es válido, limpiar el mensaje de error
    emailError.textContent = "";
    return true; // Permite el envío del formulario
}

function clearForm() {
    // Limpiar los campos del formulario
    document.getElementById('contactForm').reset() = "";
    document.getElementById('emailError').textContent = ""; // Limpiar el error del correo
}