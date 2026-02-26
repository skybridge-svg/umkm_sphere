function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user && pass) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Isi username & password!");
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
}