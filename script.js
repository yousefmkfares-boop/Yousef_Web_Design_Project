function showWelcome() { alert("Welcome to my website!"); }
function showHide() { var info = document.getElementById("moreInfo"); if (info) { info.hidden = !info.hidden; } }
function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var result = document.getElementById("result");
    if (!name || !email || !message) { result.textContent = "Please fill in all fields."; }
    else { result.textContent = "Thank you, " + name + ". Your information has been entered successfully."; }
}