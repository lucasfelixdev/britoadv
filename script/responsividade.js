

function toggleBackgroundColor(element) {
  // Detecta se a tela está abaixo de 768px (dispositivos móveis)
  if (window.innerWidth <= 768) {


      if (element.style.backgroundColor === 'rgb(255 255 255 / 0%)') { // Verifica se a cor é a cor alvo
     
          element.style.backgroundColor = '#ebc894';
      }
  }
}

let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const itens = document.querySelectorAll(".navUlDestk a");
const navBar = document.querySelector(".nav-bar__container")

menuToggle.addEventListener("click", () =>{
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    navBar.classList.toggle("on", show)
    show = !show;
})

