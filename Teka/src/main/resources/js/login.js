function validarInicioSesion() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        // Redireccionar a la página de inicio.html si el inicio de sesión es exitoso
        window.location.href = 'menu.html';
        return false;
    } else {
        alert('Usuario o contraseña incorrectos.');
        return false;
    }
}
//configurar
function registrarse() {
    // Aquí puedes agregar la lógica para redirigir a la página de registro si es necesario.
    // Por ejemplo: window.location.href = 'registro.html';
}