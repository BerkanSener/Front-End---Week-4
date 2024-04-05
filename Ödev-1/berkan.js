document.getElementById("loginButton").addEventListener("click", function() {
  var name = document.getElementById("nameInput").value.trim();
  var welcomeDiv = document.getElementById("welcome-message");
  var welcomeContainer = document.getElementById("welcome-container");
  var clockDiv = document.getElementById("clock");
  var welcomeText = document.getElementById("welcome-text");

  if (name !== "") {
    welcomeText.innerHTML = "<p>Merhaba, <strong>" + name + "</strong>! Hoş geldiniz!</p>";
    welcomeDiv.style.display = "none";
    welcomeContainer.classList.remove("hidden");
    setInterval(updateClock, 1000);
    addMessage("Bu verimli eğitimde çok güzel dostluklar ve başarı katacağız kendimize!");
  } else {
    alert("Lütfen bir isim girin!");
  }
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  var clockDiv = document.getElementById("clock");
  clockDiv.textContent = "Şu anki saat: " + timeString;
}
function addMessage(message) {
  var messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  document.getElementById("welcome-container").appendChild(messageDiv);
}