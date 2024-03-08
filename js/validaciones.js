var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellido");
var correoInput = document.getElementById("correo");
var direccionInput = document.getElementById("direccion");
var ciudadInput = document.getElementById("ciudad");
var estadoInput = document.getElementById("estado");
var tipoConstruccionInput = document.getElementById("tipo_construccion");
var descripcionInput = document.getElementById("descripcion");
var adjuntarPlanosInput = document.getElementById("adjuntar_planos");
var acuerdoInput = document.getElementById("acuerdo");

nombreInput.addEventListener("blur", function () {
    validarCampo(nombreInput);
});

apellidoInput.addEventListener("blur", function () {
    validarCampo(apellidoInput);
});

correoInput.addEventListener("blur", function () {
    validarCorreo(correoInput);
});

direccionInput.addEventListener("blur", function () {
    validarCampo(direccionInput);
});

ciudadInput.addEventListener("blur", function () {
    validarCampo(ciudadInput);
});

estadoInput.addEventListener("blur", function () {
    validarCampo(estadoInput);
});

tipoConstruccionInput.addEventListener("blur", function () {
    validarCampo(tipoConstruccionInput);
});

descripcionInput.addEventListener("blur", function () {
    validarCampo(descripcionInput);
});

adjuntarPlanosInput.addEventListener("blur", function () {
    validarCampo(adjuntarPlanosInput);
});

acuerdoInput.addEventListener("blur", function () {
    validarCampo(acuerdoInput);
});
function validarCampo(campo) {
    var valor = campo.value.trim();

    if (campo.type === "checkbox" && !campo.checked) {
        campo.classList.remove("is-valid");
        campo.classList.add("is-invalid");
        return;
    }

    if (valor === "") {
        campo.classList.remove("is-valid");
        campo.classList.add("is-invalid");
    } else {
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
    }
}

function validarCorreo(correoInput) {
    var correo = correoInput.value.trim();
    var correoValido = /\S+@\S+\.\S+/;

    if (correo === "") {
        correoInput.classList.remove("is-valid");
        correoInput.classList.add("is-invalid");
    } else if (!correoValido.test(correo)) {
        correoInput.classList.remove("is-valid");
        correoInput.classList.add("is-invalid");
    } else {
        correoInput.classList.remove("is-invalid");
        correoInput.classList.add("is-valid");
    }
}