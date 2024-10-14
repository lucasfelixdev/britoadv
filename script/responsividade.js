let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const itens = document.querySelectorAll(".navUlDestk a");
const navBar = document.querySelector(".nav-bar__container")

menuToggle.addEventListener("click", () =>{
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    navBar.classList.toggle("on")
    show = !show;
})

itens.forEach(item => {
  item.addEventListener("click", () => {
    menuSection.classList.remove("on");
    navBar.classList.remove("on")
    document.body.style.overflow = "initial";
    show = true;
  });
});
