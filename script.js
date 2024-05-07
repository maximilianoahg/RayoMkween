function validarFormulario(event) {
    // Validar teléfono
    var telefono = $('#phone'); 
    var valorTelefono = telefono.val();
    var numeros = /^[0-9]+$/;
    if (!numeros.test(valorTelefono)) {
        $('#phone-error').css('display', 'block');
        event.preventDefault();
    } else {
        $('#phone-error').css('display', 'none');
    }

    // Validar contraseña
    var contraseña = $('#password').val();
    var confirmarContraseña = $('#confirm_password').val();
    if (contraseña !== confirmarContraseña) {
        $('#password-error').css('display', 'block');
        event.preventDefault();
    } else {
        $('#password-error').css('display', 'none');
    }
}

$(document).ready(function() {
    $('#form').submit(validarFormulario);
});
