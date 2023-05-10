import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";

const brandWrapper = document.querySelector(".repair__contents");
const technicWrapper = document.querySelector(".technic__contents");
const btnRepair = document.querySelector(".repair__btn");
const btnTechnic = document.querySelector(".technic__btn");
const btnRepairArrow = document.querySelector(".repair__arrows");
const btnTechnicArrow = document.querySelector(".technic__arrows");
const slider = document.querySelectorAll(".swiper-container");
const sliderPagin = document.querySelectorAll(".swiper-pagination");

let mySwiper;

function mobileSlider() {
  slider.forEach((el) => {
    if (window.innerWidth <= 576 && el.dataset.mobile == "false") {
      mySwiper = new Swiper(".swiper", {
        slidesPerGroup: 1,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      el.dataset.mobile = "true";
      sliderPagin.forEach((el) => (el.style.display = "block"));
    }
    if (window.innerWidth > 576) {
      el.dataset.mobile = "false";
      if (el.classList.contains("swiper-initialized")) {
        el.classList.remove("swiper-initialized");
        sliderPagin.forEach((el) => (el.style.display = "none"));
      }
    }
  });
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
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

const messageIcon = document.querySelectorAll("#message");
const callIcon = document.querySelectorAll("#callOrder");
const feedback = document.querySelector("#feedback");
const call = document.querySelector("#call");

messageIcon.forEach((el) => {
  el.addEventListener("click", () => {
    feedback.style.visibility = "visible";
  });
});
callIcon.forEach((el) => {
  el.addEventListener("click", () => {
    call.style.visibility = "visible";
  });
});

function closeModal(id, e) {
  if (
    e.target.parentNode.id == "close" ||
    e.target.className == "overlay" ||
    e.target.className == "menu__icon"
  ) {
    id.style.visibility = "hidden";
  }
}
feedback.addEventListener("click", (e) => {
  closeModal(feedback, e);
});
call.addEventListener("click", (e) => {
  closeModal(call, e);
});

const menu = document.querySelector(".menu"),
  menuOverflow = document.querySelector(".menu__overflow"),
  menuHorizontal = document.querySelector(".menu-h"),
  burger = menuHorizontal.querySelector(".menu-h__icon_burger");

function menuShow() {
  menu.classList.add("menu_show");
  menuHorizontal.style.visibility = "hidden";
  menuOverflow.classList.add("menu__overflow_checked");
  document.body.style.overflowY = "hidden";
}

function menuHide(e) {
  if (
    e.target.className === "menu menu_show" ||
    e.target.parentNode.className === "menu__icon menu__icon_close"
  ) {
    menu.classList.remove("menu_show");
    menuOverflow.classList.remove("menu__overflow_checked");
    menuHorizontal.style.visibility = "visible";
    document.body.style.overflowY = "unset";
  }
}

burger.addEventListener("click", menuShow);

menu.addEventListener("click", (e) => {
  menuHide(e);
});
