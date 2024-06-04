// SignUp.html

// Función para almacenar los valores ingresados en SignUp.html
function storeSignUpValues() {
    // Obtener los valores ingresados
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Almacenar los valores en localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Abrir SignIn.html
    window.location.href = "signIn.html";
}

// SignIn.html

// Función para verificar los valores ingresados en SignIn.html
function verifySignInValues() {
    // Evitar que el formulario se envíe (lo cual refrescaría la página)
    event.preventDefault();

    // Obtener los valores ingresados
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Recuperar los valores almacenados en localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Verificar si los valores ingresados coinciden con los almacenados
    if (username === storedUsername && password === storedPassword) {
        // Los valores coinciden, realizar la lógica de inicio de sesión
        alert("Sign In exitoso");
        // Redirigir a index.html
        window.location.href = "index.html";

    } else {
        // Los valores no coinciden, mostrar mensaje de error
        alert("La contraseña o el usuario no coinciden")

        // Redirigir a SignIn.html
        window.location.href = "signIn.html";
    }
}