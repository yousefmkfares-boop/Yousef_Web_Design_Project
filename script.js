function showWelcome() {
  alert("Welcome to my website!");
}

function showHide() {
  var info = document.getElementById("moreInfo");
  if (!info) return;
  info.hidden = !info.hidden;
  var button = document.querySelector('[onclick="showHide()"]');
  if (button) button.textContent = info.hidden ? "Show more information" : "Hide information";
}

function toggleTheme() {
  var enabled = document.body.classList.toggle("light-theme");
  var button = document.querySelector('[onclick="toggleTheme()"]');
  if (button) {
    button.setAttribute("aria-pressed", String(enabled));
    button.textContent = enabled ? "Use dark colors" : "Change colors";
  }
}

function updateCurrentDate() {
  var date = document.getElementById("currentDate");
  if (date) date.textContent = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function updateMessageCount() {
  var message = document.getElementById("message");
  var count = document.getElementById("messageCount");
  if (message && count) count.textContent = message.value.length;
}

function submitForm(event) {
  event.preventDefault();
  var form = event.currentTarget;
  var name = form.elements.name.value.trim();
  var email = form.elements.email.value.trim();
  var message = form.elements.message.value.trim();
  var result = document.getElementById("result");
  if (!name || !email || !message) {
    result.textContent = "Please fill in all fields.";
    return;
  }
  result.replaceChildren();
  var heading = document.createElement("strong");
  heading.textContent = "Thank you, " + name + "! Your message is ready:";
  var details = document.createElement("p");
  details.textContent = "Email: " + email + " — Message: " + message;
  result.append(heading, details);
}

document.addEventListener("DOMContentLoaded", function () {
  updateCurrentDate();
  updateMessageCount();
});
