function validatePassword(buttonType) {
    var password = document.getElementById("password").value;

    // Check if the password meets your criteria (e.g., at least 8 characters)
    if (buttonType === "CONTINUE") {
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return false;
        } else {
            // Password meets criteria, redirect to another page
            window.location.href = "index.html";
            return false; // Prevent the form from being submitted
        }
    }

    // Return true to allow the form to be submitted
    return true;
}