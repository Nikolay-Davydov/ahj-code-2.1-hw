/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

class Game {
  constructor() {
    this.previosCord = 0;
    this.counter = 0;
    this.field = document.querySelectorAll(".game_field");
  }
  activeImg() {
    const img = document.createElement("img");
    img.src = goblin_namespaceObject;
    return img;
  }
  dellImg() {
    const img = document.querySelector("img");
    if (img) {
      img.remove();
    }
  }
  randomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
  }
  randomInsert() {
    const cordField = this.randomNumber(this.field[0].children.length);
    if (cordField == this.previosCord) {
      this.randomInsert();
    } else {
      this.previosCord = cordField;
      this.field[0].children[cordField].appendChild(this.activeImg());
    }
  }
  main() {
    this.dellImg();
    this.randomInsert();
    this.counter += 1;
  }
}
const newGame = new Game();
setInterval(() => newGame.main(), 1000);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;