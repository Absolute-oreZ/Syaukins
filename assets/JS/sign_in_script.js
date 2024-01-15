function validatePassword() {
    var enteredUsername = document.getElementById("username").value;
    var defaultUsername = "Syaukinn"; // Set your default username here
    var enteredPassword = document.getElementById("password").value;
    var defaultPassword = "default123"; // Set your default password here

    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
        alert("Login successful!");
        window.location.href = "Homepage.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Allow form submission
    }
}