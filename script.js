document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message");

    message.textContent = "Registration successful! Welcome, " + name + ".";
    message.style.color = "green";

    document.getElementById("registrationForm").reset();
});