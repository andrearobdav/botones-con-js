window.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].onclick=action1;
  document.querySelectorAll(".boton")[1].onclick=action2;
  document.querySelectorAll(".boton")[2].onclick=action3;
  document.querySelectorAll(".boton")[3].onclick=action4;
  document.querySelectorAll(".boton")[4].onclick=action5;
}


function action1() {
    document.querySelector(".caja").innerHTML="2022, no me sorprendas.";
}

function action2() {
  document.querySelector(".caja").innerHTML="<img src='img/Meme-Vanilla-JS.png'>";
}

function action3() {
  document.querySelector(".caja").innerHTML="<img src='img/spongebob-squarepants-chest.gif'>";
}

function action4() {
  document.querySelector(".caja").innerHTML="<button>mejor sí, 2022. Sorpréndeme.</button";
}

function action5() {
  document.querySelector(".caja").innerHTML="";
}