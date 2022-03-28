let ver = document.querySelector(".fa-eye");
let enviar = document.querySelector(".btn");

ver.addEventListener("click", () => {
  let password = document.querySelector("#password");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

enviar.addEventListener("click", () => {
  location.reload();
});

