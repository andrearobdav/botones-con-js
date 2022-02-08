windows.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].onclick=action1;
}

function action1() {
    document.querySelector(".caja").innerHTML="Hola Mundo";
}