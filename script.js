function showWelcome() {
    alert("Welcome to my website!");
}

function showHide() {
    var x = document.getElementById("moreInfo");

    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields");
    } else {
        document.getElementById("result").innerHTML =
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
            "Message: " + message;

        alert("Your information has been submitted");
    }
}

document.getElementById("date");
function showMessage() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("result").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Message: " + message;
}
