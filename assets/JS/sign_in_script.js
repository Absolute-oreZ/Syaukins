function validatePassword() {
    console.log("validatePassword function called");
    var defaultUsername = "Syaukinn"; // Set your default username here
    var defaultPassword = "default123"; // Set your default password here

    console.log("validatePassword function called");
    var enteredUsername = document.getElementById("login-username").value;
    var enteredPassword = document.getElementById("login-password").value;

    console.log("Entered Username:", enteredUsername);
    console.log("Entered Password:", enteredPassword);

    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
        return false; // Prevent the form from being submitted
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}