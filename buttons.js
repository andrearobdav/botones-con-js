window.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].onclick=action1;
  document.querySelectorAll(".boton")[1].onclick=action2;
}

function action1() {
    document.querySelector(".caja").innerHTML="Hola Mundo";
}