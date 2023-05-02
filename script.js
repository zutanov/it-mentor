// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;

//   case 1:
//     alert("Вы ввели число 1");
//     break;

//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// const cont = document.querySelector(".container");
// cont.addEventListener("click", function (e) {
//   console.log(e.target);
//   let target = e.target;
//   let div = target.closest(".pane");
//   if (target.classList.contains("remove-button")) {
//     target.closest("DIV").remove();
//   }
// });

// for (let el of document.body.childNodes) {
//   console.log(el);
// }

// for (let el of document.body.children) {
//   console.log(el);
// }

// console.log(document.body.children[0]);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].firstElementChild);

// document.addEventListener("click", (e) => {
//   console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
//   console.log(`pageX: ${e.pageX}, pageY: ${e.pageY}`);
// });

const brands = document.querySelectorAll(".services__wrapper");
const contents = document.querySelector(".services__contents");
const services = document.querySelector(".services");
const btnShow = document.querySelector(".services__btn");
const btnHide = document.querySelector(".services__btn-hide");

const brand = Array.from(brands);
let brandItems;

if (document.documentElement.clientWidth > 768) {
  brandItems = brand.slice(0, 8);
} else if (document.documentElement.clientWidth > 320) {
  brandItems = brand.slice(0, 6);
} else {
  const swiperDiv = document.createElement("div");
  const swiperPagin = document.createElement("div");
  swiperDiv.classList.add("swiper");
  swiperPagin.classList.add("swiper-pagination");
  swiperDiv.append(contents);
  swiperDiv.appendChild(swiperPagin);
  services.appendChild(swiperDiv);
  brandItems = brand.slice(0);
}

const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

brandItems.forEach((el) => el.classList.add("services__wrapper-show"));

btnShow.addEventListener("click", function () {
  this.classList.remove("services__btn-show");
  btnHide.classList.add("services__btn-show");
  brand.forEach((el) => el.classList.add("services__wrapper-show"));
});

btnHide.addEventListener("click", function () {
  this.classList.remove("services__btn-show");
  btnShow.classList.add("services__btn-show");
  brand.forEach((el) => el.classList.remove("services__wrapper-show"));
  brandItems.forEach((el) => el.classList.add("services__wrapper-show"));
});
