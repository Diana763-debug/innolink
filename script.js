document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const ndp = document.getElementById("ndp").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (nama && ndp && email && password) {
    alert("Log masuk berjaya! Selamat datang " + nama + " 😊");
    window.location.href = "home.html";
  } else {
    alert("Sila isi semua ruangan!");
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.log("SW registration failed:", err));
}
