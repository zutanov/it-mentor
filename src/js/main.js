import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";

const brandWrapper = document.querySelector(".repair__contents");
const technicWrapper = document.querySelector(".technic__contents");
const btnRepair = document.querySelector(".repair__btn");
const btnTechnic = document.querySelector(".technic__btn");
const btnRepairArrow = document.querySelector(".repair__arrows");
const btnTechnicArrow = document.querySelector(".technic__arrows");

const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function contentTrigger(parentNode, btn, btnArrow) {
  if (btn.innerHTML === "Показать все" || btn.innerText === "Показать все") {
    btn.innerHTML = "Скрыть все";
    btnArrow.style.transform = "rotate(180deg)";
    parentNode.style.overflow = "visible";
    parentNode.style.height = "100%";
  } else {
    btn.innerHTML = "Показать все";
    btnArrow.style.transform = "rotate(0deg)";
    parentNode.style.overflow = "hidden";
    parentNode.style.height = "160px";
  }
}

btnRepair.addEventListener("click", function (e) {
  contentTrigger(brandWrapper, e.target, btnRepairArrow);
});
btnTechnic.addEventListener("click", function (e) {
  contentTrigger(technicWrapper, e.target, btnTechnicArrow);
});
