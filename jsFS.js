function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password === "123") {
        window.location.href = "sarees.html"; // Redirect to saree selection page
    } else {
        alert("Invalid Password! Please enter 123.");
    }
}
