let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono la opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("sql");
    habilidades[3].classList.add("iis");
    habilidades[4].classList.add("cs");
    habilidades[5].classList.add("angular");
    habilidades[6].classList.add("react");
    habilidades[7].classList.add("boostrap");
    habilidades[8].classList.add("github");
    habilidades[9].classList.add("gitlab");
    habilidades[10].classList.add("reportservice");
    habilidades[11].classList.add("comunication");
    habilidades[12].classList.add("teamwork");
    habilidades[13].classList.add("creativity");
  }
}

//detecto el scrolling  para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
