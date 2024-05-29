// SignUp.html

// Function to store the values inputted in SignUp.html
function storeSignUpValues() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store the values in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

// SignIn.html

// Function to verify the values inputted in SignIn.html
function verifySignInValues() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve the stored values from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    print("Mostrar "+username+ " "+password+ " "+ storedPassword+ " "+ storedUsername)

    // Check if the input values match the stored values
    if (username === storedUsername && password === storedPassword) {
        // Values match, perform sign in logic
        alert("Has ingresado")
    } else {
        // Values do not match, display error message
        console.log("Invalid username or password!");
        alert("Has no ingresado")
    }
}