let eyed = document.querySelector(".fa-eye");
let send = document.querySelector(".btn");
let password = document.querySelector("#password");
let username = document.querySelector("#username");

eyed.addEventListener("click", () => {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

function verificar() {
  if (username.value.length <= 3 || password.value.length <= 3) {
    alert("Há um campo faltando ou muito pequeno!")
  }
  else {
    location.reload()
    alert("Você está Logado! :)")
    password.value = "";
    username.value = "";
  }
  return

}
send.addEventListener('click', verificar);

username.focus();