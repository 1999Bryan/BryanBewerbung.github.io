function hashPassword(password) {
    return btoa(password);
}

function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var hashedPassword = hashPassword(enteredPassword);

    var correctHashedPassword = "QnJ5YW5MZW1ja2U="; // Base64 von "BryanLemcke"

    if (hashedPassword === correctHashedPassword) {
        sessionStorage.setItem("authenticated", "true");
        showContent();
    } else {
        document.getElementById("error").classList.remove("hidden");
    }
}

function showContent() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function logout() {
    sessionStorage.removeItem("authenticated");
    location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    var password = "BryanLemcke";
    var body = document.getElementById("body");

    function passcodeprotect() {
        var passcode = prompt("Geben Sie das Passwort ein:");
        if (passcode === password) {
            body.style.display = "block"; // Zeigt die Webseite an
        } else {
            alert("Falsches Passwort!");
            passcodeprotect(); // Erneute Abfrage
        }
    }

    passcodeprotect();
});

