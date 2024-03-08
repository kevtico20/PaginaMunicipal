document.getElementById("enviarBtn").addEventListener("click", function () {
    validarCampos();
});

function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var estado = document.getElementById("estado").value;
    var tipo_construccion = document.getElementById("tipo_construccion").value;
    var descripcion = document.getElementById("descripcion").value;
    var adjuntar_planos = document.getElementById("adjuntar_planos").value;
    var acuerdo = document.getElementById("acuerdo").checked;

    if (nombre === "" || apellido === "" || correo === "" || direccion === "" || ciudad === "" || estado === "" ||
        tipo_construccion === "" || descripcion === "" || !acuerdo) {
        mostrarModal("Por favor complete los campos", "bg-danger");
    } else {
        mostrarModal("Enviado exitosamente", "bg-success");
        document.getElementById("formulario").submit();
    }
}

function mostrarModal(mensaje, bgClass) {
    document.getElementById("modal-body-content").innerHTML = mensaje;


    var header = document.querySelector('.modal-header');
    var footer = document.querySelector('.modal-footer');

    header.classList.remove('bg-danger', 'bg-success');
    header.classList.add(bgClass);

    footer.classList.remove('bg-danger', 'bg-success');
    footer.classList.add(bgClass);
    
    
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    
}


