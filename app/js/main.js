/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");



var brandWrapper = document.querySelector(".repair__contents");
var technicWrapper = document.querySelector(".technic__contents");
var btnRepair = document.querySelector(".repair__btn");
var btnTechnic = document.querySelector(".technic__btn");
var btnRepairArrow = document.querySelector(".repair__arrows");
var btnTechnicArrow = document.querySelector(".technic__arrows");
var swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
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
var messageIcon = document.querySelector("#message");
var closeIcon = document.querySelector("#close");
var feedback = document.querySelector(".overlay");
console.dir(feedback);
messageIcon.addEventListener("click", function () {
  feedback.style.visibility = "visible";
});
feedback.addEventListener("click", function (e) {
  var target = e.target;

  if (target.parentNode.id == "close" || target.className == "overlay") {
    feedback.style.visibility = "hidden";
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/close.svg */ "./icons/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/logo.svg */ "./icons/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/search.svg */ "./icons/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/call.svg */ "./icons/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/chat.svg */ "./icons/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/profile.svg */ "./icons/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/repair.svg */ "./icons/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/checkstatus.svg */ "./icons/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gps_lg.jpg */ "./img/gps_lg.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/lenovo.png */ "./icons/brands/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/samsung.png */ "./icons/brands/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/apple.png */ "./icons/brands/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/viewsonic.png */ "./icons/brands/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/bosch.png */ "./icons/brands/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/hp.png */ "./icons/brands/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/acer.png */ "./icons/brands/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/brands/sony.png */ "./icons/brands/sony.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/arrows.svg */ "./icons/arrows.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/go.svg */ "./icons/go.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css\"\r\n    />\r\n    <title>Services</title>\r\n  </head>\r\n  <body>\r\n    <aside class=\"menu\">\r\n      <div class=\"menu__top\">\r\n        <div class=\"menu__wrapper\">\r\n          <div class=\"menu__icon menu__icon_close\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"close\" />\r\n          </div>\r\n          <div class=\"logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\" />\r\n          </div>\r\n          <div class=\"menu__icon\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"search\" />\r\n          </div>\r\n        </div>\r\n        <ul class=\"menu__list\">\r\n          <li class=\"title menu__link\">Ремонт техники</li>\r\n          <li class=\"title menu__link menu__link_checked\">Услуги и сервисы</li>\r\n          <li class=\"title menu__link\">Корпоративным клиентам</li>\r\n          <li class=\"title menu__link\">Продавцам техники</li>\r\n          <li class=\"title menu__link\">Партнерам</li>\r\n          <li class=\"title menu__link\">Производителям</li>\r\n          <li class=\"title menu__link\">Наши сервисные центры</li>\r\n          <li class=\"title menu__link\">Контакты</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"menu__bottom\">\r\n        <div class=\"menu__contacts\">\r\n          <div class=\"menu__icon\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"call\" />\r\n          </div>\r\n          <div class=\"menu__icon\" id=\"message\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"chat\" />\r\n          </div>\r\n          <div class=\"menu__icon\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"profile\" />\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"title menu__email\">mail@cps.com</a>\r\n        <a href=\"tel:'88008908900'\" class=\"title title-lg\">8 800 890 8900</a>\r\n        <div class=\"menu__languages\">\r\n          <div class=\"menu__language menu__language_checked title\">RU</div>\r\n          <div class=\"menu__language title\">EN</div>\r\n          <div class=\"menu__language title\">CH</div>\r\n        </div>\r\n      </div>\r\n    </aside>\r\n\r\n    <div class=\"content\">\r\n      <header class=\"header\">\r\n        <div class=\"container\">\r\n          <div class=\"header__top\">\r\n            <h1 class=\"header__title\">Услуги и сервисы</h1>\r\n            <div class=\"header__wrapper\">\r\n              <div class=\"header__info\">\r\n                <a href=\"#\" class=\"title header__link\">Оставить заявку</a>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"repair\" class=\"header__img\" />\r\n              </div>\r\n              <div class=\"header__info\">\r\n                <a href=\"#\" class=\"title header__link\">Статус ремонта</a>\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"repair-status\"\r\n                  class=\"header__img\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"header__bottom\">\r\n            <button\r\n              class=\"btn btn--reset title header__btn header__btn_checked\"\r\n            >\r\n              Ремонтируемые бренды\r\n            </button>\r\n            <button class=\"btn btn--reset title header__btn\">\r\n              Дополнительные услуги\r\n            </button>\r\n            <button class=\"btn btn--reset title header__btn\">\r\n              Цены на услуги\r\n            </button>\r\n            <button class=\"btn btn--reset title header__btn\">\r\n              Адреса сервисных центров\r\n            </button>\r\n            <button class=\"btn btn--reset title header__btn\">\r\n              Специальные цены\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <main class=\"main\">\r\n        <section class=\"review\">\r\n          <div class=\"container\">\r\n            <h2 class=\"title review__title\">Отзывы</h2>\r\n            <div class=\"review__wrapper\">\r\n              <div class=\"review__info\">\r\n                <p class=\"title title-sm review__desc\">\r\n                  Мы являемся авторизованным сервисным центром по ремонту\r\n                  техники Dell. Только у нас вы можете отремонтировать свой\r\n                  ноутбук Dell с официальной гарантией производителя.\r\n                  <br />\r\n                  <br />\r\n                  Мы успешно работаем с 1992 года и заслужили репутацию\r\n                  надежного партнера, что подтверждает большое количество\r\n                  постоянных клиентов. Мы гордимся тем, что к нам обращаются по\r\n                  рекомендациям и, в свою очередь, советуют нас родным и\r\n                  близким.\r\n                </p>\r\n                <a href=\"#\" class=\"title review__link\">Читать далее</a>\r\n              </div>\r\n              <div class=\"review__img\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"gps\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"repair\">\r\n          <div class=\"container\">\r\n            <h2 class=\"title repair__title\">\r\n              Ремонт техники различных брендов\r\n            </h2>\r\n            <div class=\"repair__contents swiper-wrapper\">\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"repair__wrapper swiper-slide\">\r\n                <div class=\"repair__brand\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"brand\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-pagination\"></div>\r\n\r\n            <div class=\"repair__switch\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" class=\"repair__arrows\" alt=\"arrows\" />\r\n              <button class=\"btn btn--reset title repair__btn\">\r\n                Показать все\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"technic\">\r\n          <div class=\"container\">\r\n            <h2 class=\"title technic__title\">Ремонт различных видов техники</h2>\r\n            <div class=\"technic__contents\">\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт ноутбуков</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт планшетов</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт ПК</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт мониторов</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт ноутбуков</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт планшетов</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт ПК</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"technic__card\">\r\n                <div class=\"title technic__card-title\">Ремонт мониторов</div>\r\n                <div class=\"technic__card-img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"repair__switch\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"\r\n                class=\"technic__arrows\"\r\n                alt=\"arrows\"\r\n              />\r\n              <button class=\"btn btn--reset title technic__btn\">\r\n                Показать все\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"price\">\r\n          <div class=\"container\">\r\n            <h2 class=\"title price__title\">цены на услуги</h2>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_sm\">Ремонтные услуги</h4>\r\n              <h4 class=\"title title-sm title-sm_sm\">Цена</h4>\r\n              <h4 class=\"title title-sm title-sm_sm\">Срок</h4>\r\n            </div>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_md\">Диагностика</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">Бесплатно</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">30 мин</h4>\r\n              <button class=\"btn btn--reset price__btn\">Заказать</button>\r\n            </div>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_md\">Замена дисплея</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">1 000 ₽</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">30-120 мин</h4>\r\n              <button class=\"btn btn--reset price__btn\">Заказать</button>\r\n            </div>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_md\">\r\n                Замена полифонического динамика\r\n              </h4>\r\n              <h4 class=\"title title-sm title-sm_md\">1 000 ₽</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">30-120 мин</h4>\r\n              <button class=\"btn btn--reset price__btn\">Заказать</button>\r\n            </div>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_md\">\r\n                Тестирование с выдачей технического заключения\r\n              </h4>\r\n              <h4 class=\"title title-sm title-sm_md\">1 000 ₽</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">30-120 мин</h4>\r\n              <button class=\"btn btn--reset price__btn\">Заказать</button>\r\n            </div>\r\n            <div class=\"price__wrapper\">\r\n              <h4 class=\"title title-sm title-sm_md\">\r\n                Замена программного обеспечения\r\n              </h4>\r\n              <h4 class=\"title title-sm title-sm_md\">1 000 ₽</h4>\r\n              <h4 class=\"title title-sm title-sm_md\">30-120 мин</h4>\r\n              <button class=\"btn btn--reset price__btn\">Заказать</button>\r\n            </div>\r\n            <div class=\"title title-sm price__text\">\r\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на\r\n              единичную услугу. Для получения коммерческого предложения на\r\n              постоянное обслуживание, оставьте заявку.\r\n            </div>\r\n            <a href=\"#\" class=\"title price__offer\">\r\n              Получить коммерческое предложение\r\n            </a>\r\n          </div>\r\n        </section>\r\n      </main>\r\n\r\n      <footer class=\"footer\">\r\n        <div class=\"container\">\r\n          <div class=\"footer__wrapper\">\r\n            <div class=\"title title-sm title-sm_sm footer__content\">\r\n              © 2019 CPS\r\n              <br />\r\n              Разработано командой Apesong\r\n            </div>\r\n            <div class=\"title title-sm title-sm_sm footer__content\">\r\n              Политика конфиденциальности\r\n            </div>\r\n            <div class=\"title title-sm title-sm_sm footer__content\">\r\n              Информация, размещенная на данной странице, не является публичной\r\n              офертой\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n\r\n    <div class=\"overlay\">\r\n      <form class=\"feedback\">\r\n        <div class=\"feedback__header\">\r\n          <div class=\"feedback__icon\" id=\"close\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"close\" />\r\n          </div>\r\n          <h2 class=\"title title-lg feedback__title\">Обратная связь</h2>\r\n        </div>\r\n        <input type=\"text\" class=\"title feedback__input\" placeholder=\"Имя\" />\r\n        <input type=\"tel\" class=\"title feedback__input\" placeholder=\"Телефон\" />\r\n        <input\r\n          type=\"email\"\r\n          class=\"title feedback__input\"\r\n          placeholder=\"Электронная почта\"\r\n        />\r\n        <textarea\r\n          class=\"title feedback__input feedback__message\"\r\n          cols=\"30\"\r\n          rows=\"10\"\r\n        ></textarea>\r\n        <p class=\"title title-sm title-sm_sm feedback__policy\">\r\n          Нажимая “отправить”, вы даете согласие на\r\n          <span>обработку персональных данных </span> и соглашаетесь с нашей\r\n          <span>политикой конфиденциальности</span>\r\n        </p>\r\n        <div class=\"feedback__wrapper\">\r\n          <button class=\"btn btn--reset price__btn feedback__btn\">\r\n            Отправить\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js\"></script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./icons/arrows.svg":
/*!**************************!*\
  !*** ./icons/arrows.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/arrows.svg";

/***/ }),

/***/ "./icons/brands/acer.png":
/*!*******************************!*\
  !*** ./icons/brands/acer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./icons/brands/apple.png":
/*!********************************!*\
  !*** ./icons/brands/apple.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./icons/brands/bosch.png":
/*!********************************!*\
  !*** ./icons/brands/bosch.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bosch.png";

/***/ }),

/***/ "./icons/brands/hp.png":
/*!*****************************!*\
  !*** ./icons/brands/hp.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./icons/brands/lenovo.png":
/*!*********************************!*\
  !*** ./icons/brands/lenovo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./icons/brands/samsung.png":
/*!**********************************!*\
  !*** ./icons/brands/samsung.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./icons/brands/sony.png":
/*!*******************************!*\
  !*** ./icons/brands/sony.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./icons/brands/viewsonic.png":
/*!************************************!*\
  !*** ./icons/brands/viewsonic.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ }),

/***/ "./icons/call.svg":
/*!************************!*\
  !*** ./icons/call.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./icons/chat.svg":
/*!************************!*\
  !*** ./icons/chat.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./icons/checkstatus.svg":
/*!*******************************!*\
  !*** ./icons/checkstatus.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./icons/close.svg":
/*!*************************!*\
  !*** ./icons/close.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./icons/go.svg":
/*!**********************!*\
  !*** ./icons/go.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/go.svg";

/***/ }),

/***/ "./icons/logo.svg":
/*!************************!*\
  !*** ./icons/logo.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./icons/profile.svg":
/*!***************************!*\
  !*** ./icons/profile.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./icons/repair.svg":
/*!**************************!*\
  !*** ./icons/repair.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./icons/search.svg":
/*!**************************!*\
  !*** ./icons/search.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/gps_lg.jpg":
/*!************************!*\
  !*** ./img/gps_lg.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gps_lg.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map