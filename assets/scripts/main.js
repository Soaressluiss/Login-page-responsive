let ver = document.querySelector(".fa-eye");
let enviar = document.querySelector(".btn");
let password = document.querySelector("#password");
let usename = document.querySelector("#username");

ver.addEventListener("click", () => {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

function verificar() {
  if (usename.value.length <= 3) {
    alert("há um campo faltando ou muito pequeno!")
    console.log(usename.value.length);
  }
  if (password.value.length <= 3) {
    alert("há um campo faltando ou muito pequeno!")
    console.log(password.value.length);
  } else {
    location.reload()
    alert("Você está Logado! :)")
    password.value = "";
    usename.value = "";
  }
  return
}
enviar.addEventListener('click', verificar);

usename.focus();