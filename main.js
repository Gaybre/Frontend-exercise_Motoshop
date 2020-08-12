!function(n){var r={};function e(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return n[a].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=n,e.c=r,e.d=function(n,r,a){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)e.d(a,t,function(r){return n[r]}.bind(null,t));return a},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=11)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",a=n[3];if(!a)return e;if(r&&"function"==typeof btoa){var t=(s=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),o=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([t]).join("\n")}var s,i,c;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(a)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(t[s]=!0)}for(var i=0;i<n.length;i++){var c=[].concat(n[i]);a&&t[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,":root {\r\n  --primary-color: #443434;\r\n  --secondary-color: #ff6600;\r\n  --secondary-color-light: #fe8500;\r\n  --gradient-color: linear-gradient(to top, var(--secondary-color), var(--secondary-color-light));\r\n  --gray-scale-1: #fff;\r\n  --gray-scale-2: #faf7f2;\r\n  --gray-scale-3: #e9e6e1;\r\n  --gray-scale-4: #a09c9d;\r\n  --gray-scale-5: #4d3d3d;\r\n  --gray-scale-6: #010101;\r\n\r\n  --spacing-small: 10px;\r\n  --spacing-normal: 20px;\r\n  --spacing-large: 50px;\r\n  --spacing-extra-large: 70px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 12px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.7rem;\r\n  color: var(--secondary-color);\r\n}\r\n\r\na {\r\n  padding: 0 var(--spacing-normal);\r\n  border-left: 1px solid var(--gray-scale-5);\r\n  border-right: 1px solid var(--gray-scale-5);\r\n  font-size: 1.3rem;\r\n  color: var(--gray-scale-1);\r\n  text-decoration: none;\r\n  text-shadow: -2px 2px 2px var(--primary-color);\r\n}\r\n\r\na:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.wrapper {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,".header {\r\n  height: calc(var(--spacing-large) + var(--spacing-small));\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.header  div {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--gray-scale-1);\r\n}\r\n\r\n.header-container {\r\n  justify-content: space-between;\r\n}\r\n\r\n.header__logo h1 {\r\n  font-size: 2rem;\r\n  margin-right: var(--spacing-normal);\r\n}\r\n\r\n.header__nav {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: calc(var(--spacing-large) + var(--spacing-small));\r\n}\r\n\r\n.header__nav-menu,\r\n.header__nav div {\r\n  display: none;\r\n}\r\n\r\n.header__nav-submenu {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--primary-color);\r\n  border-right: 10px solid var(--secondary-color);\r\n  text-align: left;\r\n}\r\n\r\n.header__nav-submenu a {\r\n  padding: var(--spacing-small) var(--spacing-normal);\r\n  border: 0;\r\n  font-size: 1.2rem;\r\n  color: var(--gray-scale-1);\r\n  text-decoration: none;\r\n  text-shadow: -2px 2px 2px var(--primary-color);\r\n  line-height: normal;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .header__nav-menu {\r\n    display: block;\r\n  }\r\n  \r\n  .header__nav-option {\r\n    display: none;\r\n  }\r\n\r\n  .header__nav-menu:hover ~ .header__nav-submenu,\r\n  .header__nav-submenu:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,".slider__container {\r\n  padding: var(--spacing-normal) 0;\r\n  background-color: var(--gray-scale-4);\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  padding-bottom: var(--spacing-large);\r\n  border: 10px solid var(--primary-color);\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.slider img {\r\n  width: 100%;\r\n}",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,".shopMenu-container {\r\n  background-color: var(--primary-color);\r\n  height: var(--spacing-extra-large);\r\n  box-sizing: content-box;\r\n  border-bottom: var(--spacing-small) solid var(--secondary-color);\r\n}\r\n\r\n.shopMenu__nav {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: var(--spacing-extra-large);\r\n}\r\n\r\n.shopMenu__subnav {\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n/* menú flotante del primer breackpoint shopMenu__nav-menu-1 */\r\n.shopMenu__subnav-menu-1,\r\n.shopMenu__subnav-menu-2 {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  display: none;\r\n  background-color: var(--primary-color);\r\n  border-right: 10px solid var(--secondary-color);\r\n  text-align: left;\r\n}\r\n\r\n.shopMenu__subnav-menu-1 a,\r\n.shopMenu__subnav-menu-2 a {\r\n  padding: var(--spacing-small) var(--spacing-normal);\r\n  border: 0;\r\n  font-size: 1.2rem;\r\n  color: var(--gray-scale-1);\r\n  text-decoration: none;\r\n  text-shadow: -2px 2px 2px var(--primary-color);\r\n  line-height: normal;\r\n}\r\n\r\n.shopMenu__subnav,\r\n.shopMenu__subnav-menu-1,\r\n.shopMenu__subnav-menu-2 {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .shopMenu__nav-2 {\r\n    display: none;\r\n  }\r\n  .shopMenu__subnav {\r\n    display: block;\r\n  }\r\n\r\n  .shopMenu__subnav-menu:hover ~ .shopMenu__subnav-menu-1,\r\n  .shopMenu__subnav-menu-1:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768PX) {\r\n  .shopMenu__nav-1 {\r\n    display: none;\r\n  }\r\n\r\n  .shopMenu__subnav-menu:hover ~ .shopMenu__subnav-menu-2,\r\n  .shopMenu__subnav-menu-2:hover {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .shopMenu__subnav-menu:hover ~ .shopMenu__subnav-menu-1 {\r\n    display: none;\r\n  }\r\n}\r\n",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,"/* --------------- contenedores de la sección */\r\n.bestSeller-container {\r\n  background-color: var(--gray-scale-3);\r\n  padding: calc(var(--spacing-normal) * 2) 0;\r\n}\r\n\r\n.bestSeller {\r\n  display: grid;\r\n  grid-template-columns: 1fr minmax(200px, 300px);\r\n  grid-gap: var(--spacing-normal);\r\n  font-weight: bold;\r\n}\r\n\r\n/* --------------- bestSeller__article */\r\n.bestSeller__article {\r\n  flex: 1;\r\n}\r\n\r\n.bestSeller__article-entry {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.bestSeller__article-entry article {\r\n  min-width: 140px;\r\n  max-width: 160px;\r\n}\r\n\r\n.bestSeller__article-entry img {\r\n  height: 160px;\r\n  width: 100%;\r\n  margin: var(--spacing-normal) 0;\r\n}\r\n\r\n/* --------------- bestSeller__article && bestSeller__brand*/\r\n.bestSeller__article-entry,\r\n.bestSeller__brand-entry {\r\n  font-size: 1rem;\r\n  color: var(--gray-scale-6);\r\n}\r\n\r\n.bestSeller__article-entry article:hover,\r\n.bestSeller__brand-entry article:hover {\r\n  color: var(--secondary-color);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* --------------- bestSeller__brand */\r\n.bestSeller__brand {\r\n  min-width: 200px;\r\n  max-width: 300px;\r\n}\r\n\r\n.bestSeller__brand-entry img {\r\n  width: 100%;\r\n  height: 160px;\r\n  margin: var(--spacing-normal) 0;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .bestSeller {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768PX) {\r\n  .bestSeller__article-entry {\r\n    flex-wrap: wrap;\r\n  }\r\n}",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,"/* ----------------------- estilos generales de SaleCatalog-section */\r\n.SaleCatalog-section {\r\n  background-color: var(--gray-scale-2);\r\n  padding: calc(var(--spacing-normal) * 2) 0;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.SaleCatalog {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-gap: var(--spacing-normal);\r\n}\r\n\r\n.SaleCatalog h3 {\r\n  margin-bottom: var(--spacing-normal);\r\n}\r\n\r\n/* ----------------------- panel izquierdo de las categorias */\r\n.categorie {\r\n  background-color: var(--gray-scale-1);\r\n  padding: var(--spacing-small);\r\n  border: 2px solid var(--gray-scale-3);\r\n  margin-bottom: var(--spacing-small);\r\n  transition: 200ms;\r\n}\r\n\r\n.categorie:hover {\r\n  color: var(--gray-scale-1);\r\n  text-shadow: -1px 1px 2px var(--primary-color);\r\n  background: var(--gradient-color);\r\n}\r\n\r\n/* ----------------------- sección de los Articulos más vendidos */\r\n/* ----------------------- buscador */\r\n.SaleCatalog__products-list-search {\r\n  display: flex;\r\n  margin-bottom: var(--spacing-small);\r\n  padding: var(--spacing-small);\r\n  border: 2px solid var(--gray-scale-3);\r\n  background-color: var(--gray-scale-1);\r\n}\r\n\r\n.SaleCatalog__products-list input {\r\n  width: 50%;\r\n  padding-left: var(--spacing-small);\r\n  border: none;\r\n  font-size: 1.3rem;\r\n  outline: none;\r\n}\r\n\r\n/* ----------------------- sección del contenedor de las cards */\r\n.SaleCatalog__products-list-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* ----------------------- Card de articulos más vendidos */\r\n.productCard {\r\n  max-width: 250px;\r\n  min-width: 240px;\r\n  margin-bottom: var(--spacing-normal);\r\n  padding: var(--spacing-small);\r\n  border: 2px solid var(--gray-scale-3);\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  background-color: var(--gray-scale-1);\r\n}\r\n\r\n.productCard__name {\r\n  text-align: left;\r\n}\r\n\r\n.productCard__img {\r\n  width: 60%;\r\n  max-height: 160px;\r\n  padding: var(--spacing-normal) 0;\r\n}\r\n\r\n.productCard__buy {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.productCard__buy button {\r\n  flex: 1;\r\n  border: none;\r\n  border-radius: calc(var(--spacing-small)/ 2);\r\n  box-shadow: 0 0 4px var(--gray-scale-5);\r\n  font-weight: 800;\r\n  font-size: 1.2rem;\r\n  color: var(--gray-scale-1);\r\n  background: var(--gradient-color);\r\n  outline: none;\r\n  transition: 200ms;\r\n}\r\n\r\n.productCard__buy button:hover {\r\n  text-shadow: -1px 1px 2px var(--primary-color);\r\n  transition: 0;\r\n}\r\n\r\n.productCard__buy button:active {\r\n  transform: scale(.8);\r\n}\r\n\r\n.productCard__buy p {\r\n  flex: 1;\r\n  align-self: flex-end;\r\n  font-size: 1.5rem;\r\n  font-weight: 800;\r\n  text-align: right;\r\n}\r\n\r\n/* botones al pie de pagina para navegancion entre paginas */\r\n.SaleCatalog__products-navigation button {\r\n  margin-top: var(--spacing-normal);\r\n  margin-right: var(--spacing-small);\r\n  padding: calc(var(--spacing-small) / 2) var(--spacing-normal);\r\n  border: 2px solid var(--gray-scale-3);\r\n  font-size: 1rem;\r\n  background: var(--gray-scale-1);\r\n  outline: none;\r\n}\r\n\r\n.SaleCatalog__products-navigation button:active {\r\n  background: var(--gradient-color);\r\n}\r\n\r\n.SaleCatalog__products-navigation button:nth-child(1) {\r\n  background: var(--secondary-color);\r\n}",""]),r.a=t},function(n,r,e){"use strict";var a=e(0),t=e.n(a)()(!1);t.push([n.i,".footer-container {\r\n  background-color: var(--primary-color);\r\n  /* height: calc(var(--spacing-large) + var(--spacing-normal)); */\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  /* height: calc(var(--spacing-large) + var(--spacing-normal)); */\r\n}\r\n\r\n.footer a {\r\n  padding: 0 var(--spacing-small);\r\n  border: none;\r\n}\r\n\r\n.footer__moreInfo,\r\n.footer__socialMedia {\r\n  display: flex;\r\n  line-height: calc(var(--spacing-large) + var(--spacing-normal));\r\n}\r\n\r\n.footer__socialMedia span {\r\n  display: flex;\r\n  margin-bottom: var(--spacing-small);\r\n  padding: var(--spacing-small);\r\n  border-radius: 100%;\r\n  background-color: var(--gray-scale-4);\r\n}\r\n\r\n.footer__socialMedia span:hover {\r\n  box-shadow: 0 0 10px var(--secondary-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.footer__socialMedia a:hover {\r\n  background-color: transparent;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .footer {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .footer a {\r\n    padding: var(--spacing-small);\r\n    line-height: normal;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768PX) {\r\n  .footer__moreInfo {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}",""]),r.a=t},function(n,r,e){var a=e(9),t=e(10);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var o={insert:"head",singleton:!1};a(t,o);n.exports=t.locals||{}},function(n,r,e){"use strict";var a,t=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),s=[];function i(n){for(var r=-1,e=0;e<s.length;e++)if(s[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},a=[],t=0;t<n.length;t++){var o=n[t],c=r.base?o[0]+r.base:o[0],l=e[c]||0,d="".concat(c," ").concat(l);e[c]=l+1;var p=i(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:d,updater:f(u,r),references:1}),a.push(d)}return a}function l(n){var r=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var t=e.nc;t&&(a.nonce=t)}if(Object.keys(a).forEach((function(n){r.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(r);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var d,p=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function u(n,r,e,a){var t=e?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=p(r,t);else{var o=document.createTextNode(t),s=n.childNodes;s[r]&&n.removeChild(s[r]),s.length?n.insertBefore(o,s[r]):n.appendChild(o)}}function m(n,r,e){var a=e.css,t=e.media,o=e.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var h=null,g=0;function f(n,r){var e,a,t;if(r.singleton){var o=g++;e=h||(h=l(r)),a=u.bind(null,e,o,!1),t=u.bind(null,e,o,!0)}else e=l(r),a=m.bind(null,e,r),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return a(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;a(n=r)}else t()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=t());var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<e.length;a++){var t=i(e[a]);s[t].references--}for(var o=c(n,r),l=0;l<e.length;l++){var d=i(e[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}e=o}}}},function(n,r,e){"use strict";e.r(r);var a=e(0),t=e.n(a),o=e(1),s=e(2),i=e(3),c=e(4),l=e(5),d=e(6),p=e(7),u=t()(!1);u.i(o.a),u.i(s.a),u.i(i.a),u.i(c.a),u.i(l.a),u.i(d.a),u.i(p.a),u.push([n.i,"",""]),r.default=u},function(n,r,e){"use strict";e.r(r);const a="https://raw.githubusercontent.com/Gaybre/Frontend-exercise_Motoshop/master/src/assets/images/defaultProduct.jpg";var t={title:"Ver todas las marcas",img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhMPEA8QEBUSFhcXGBMQERUQFREWFRgWGBYSFhYYHyggHRslGxUWIzEhJSsrLi4uFx8/ODMsNyg5LisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBAwUEAgj/xABDEAABAwMCAwUEBwQHCQAAAAABAAIDBAURBiESEzEHQVFhcRQiMoEjM0JSYpGhFVOSsSRVcnOCwfEIFzQ1Q2OU0dP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ao1ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWcIMLo2OzTVcraemidLI/oGjoO9zj0DR3kr3aP0nU3CcQU7Nh8crh9HE37zj4+AG5X6M0XZrfbZBboJGvqpGGSRzsOlc1uBl2Pgbv7rfXqclB+WqmBzHujcMOY4tI8C0kEfmFpXf13TGO41rMYxUSkDwDnlw/QhcMN/0QfCLrW7TVbPjkUVVKD3she5vzdjAUrt3Y9dpfigjpx4zStzjxwzi/VBX+Ewrqt3YHIce0XBjfKKIuP5uIXquvZ9YLaA+vq55XY+pdK0Od5iOIB+PmgozCwQpzeNaUzTy7XbKakaBgTys51Q4eTnEhv6nz7lC6iYvJc48Tick+JQaUREBERAREQEREBERAREQEREBEWWhAWcKf6N7KK2tAldikhOCJJmkveO4sjG5HqQFO3WTTdq/4qRtVKPsvJqHZ6/VsHC3p1KCiqemfI4MjY6Rx6NY0vcfkN1NtF9mFbWS4lhlo4mkcck0TmOI+7G12Mkjv6Ka1XbhTwjl0Fs4G93MLIAP8EQP81Gr/ANs9fURPhjZFS8wY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"};var o=`\n<section class="bestSeller-container">\n  <div class="bestSeller wrapper">\n    <div class="bestSeller__article">\n      <h3>\n        Art&iacuteculos detacados\n      </h3>\n      <div class="bestSeller__article-entry">\n        ${[{name:"AGV Skyline Block",img:"https://i.pinimg.com/564x/ff/81/23/ff812329904c1e39c6c9d8f2520b311d.jpg",default:a},{name:"Schuberth SR1",img:"https://cdn11.bigcommerce.com/s-7r9g3armut/images/stencil/1280x1280/products/8507/46772/helm-schuberth-sr1-130-1036-202-wit__60113.1533721119.jpg?c=2&imbypass=on",default:a},{name:"Arai Quantum DNA",img:"https://www.motosgarrido.com/5265-large_default/CASCO-ARAI-QUANTUM-DNA-BLANCO.jpg",default:a},{name:"Shoel XR1 100 Enigm TC4",img:"http://ecx.images-amazon.com/images/I/512ZqbT6gYL._SL500_AA300_.jpg",default:a}].map(n=>`\n            <article>\n              <img src="${n.img||n.default}" alt="${n.name}">\n              <p>${n.name}</p>\n            </article>\n          `).join("")}\n      </div>\n    </div>\n    <div class="bestSeller__brand">\n      <h3>\n        Marcas m&aacutes vendidas\n      </h3>\n      <div class="bestSeller__brand-entry">\n        <article>\n          <img src="${t.img}" alt="marcas más vendidas">\n          <p>${t.title}</p>\n        </article>\n      </div>\n    </div>\n  </div>\n</section>\n`;const s="https://raw.githubusercontent.com/Gaybre/Frontend-exercise_Motoshop/master/src/assets/images/defaultProduct.jpg",i=[{name:"Alpinestars GP Pro",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGT2HN3Es9P-ePcyCstZY6eQ9ZxcAfQQSi_Q&usqp=CAU",default:s,price:"429,95"},{name:"Shoei XR1100 Enigma TC-1",img:"https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/4CA2/0BBB/A8DD/9978/D478/3E70/5055/EEF5/Shoei-XR-1100-Enigma-TC-6_ml.jpg",default:s,price:"395,96"},{name:"Dainese VR46 TEX",img:"http://www.yamaha.cz/Controls/Imager.ashx?&foto=GalerieAkce_Bunda-VR46-TEX--DAI-173513460910.jpg",default:s,price:"219,95"},{name:"Schuberth C3 Carbon",img:"http://static.nextmoto.it/625X0/www/nextmoto/it/img/schuberth_c3_carbon.jpg",default:s,price:"678,56"},{name:"Alpinestars Tech 1-R",img:"https://lh3.googleusercontent.com/proxy/nyrP8Ok8W4L8pYR1xcU2Id3V2oj-n8AxFT1vTTVF05s4SoN6nB3lfpdTCfdKx2x8mlGYyWWhJAapU-VpmMxFGZrcVK-6yW73Bwi_9K9z6vGJmA_NyRreZVmcYPaNSlXMPtoNYuIvIQWgd_TLcieEkNNkZW8a5vA",default:s,price:"485,96"},{name:"DaineseRazon",img:"https://images.motocard.com/eyJidWNrZXQiOiJtb3RvY2FyZCIsImtleSI6InByb2R1Y3RzL2ltYWdlcy8wNTQ1OS9yYXpvbl9uLTEtTS0wNTQ1OTMxLmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJqcGVnIjp7InF1YWxpdHkiOjkxfSwicmVzaXplIjp7IndpZHRoIjo1NTAsImhlaWdodCI6NTUwLCJmaXQiOiJjb3ZlciJ9fSwidiI6IjAwOGRmM2ZkNzAxYTVjYzljNmNkYzBlNWYyNjQxZThmIn0=",default:s,price:"333,95"},{name:"Givi T449",img:"https://io.convertiez.com.br/m/sbsmotos/shop/products/images/2927301/large/bolsa-givi-alforge-lateral-2835-litros-t449_5865.jpg",default:s,price:"88,00"},{name:"Alpinestars Supertech-R",img:"https://cdn.shopify.com/s/files/1/0998/1534/products/alpinestars_supertech_r_boots_black_white_fluo_yellow_compact.jpg?v=1571940502",default:s,price:"341,95"},{name:"AGV Horizon",img:"https://http2.mlstatic.com/agv-horizon-casco-para-motocicleta-dot-de-vidrio-de-carbono-D_NQ_NP_908504-MLM31993491771_082019-F.jpg",default:s,price:"269,95"},{name:"Alpinestarts 365 Gore-Tex",img:"https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/4EC3/AC78/268B/3D4D/BB1B/3E70/5055/3967/Held-Cold-Champ-Motorradhandschuhe-front_ml.jpg",default:s,price:"139,46"},{name:"Alpinestarts S-MX Air Flo",img:"https://www.moto-opinie.info/miniaturki/124.jpg",default:s,price:"479,96"},{name:"Alpinestarts Carver Prof",img:"http://ropasdemoto.weebly.com/uploads/1/9/9/7/19978829/5172282.jpg?343",default:s,price:"629,95"}];var c=`\n<section class="SaleCatalog-section">\n  <div class="SaleCatalog wrapper">\n    <div class="SaleCatalog__categories">\n      <h3>Categor&iacuteas</h3>\n      <div class="SaleCatalog__categories-list">\n      ${[{name:"Botas"},{name:"Cascos"},{name:"Chaquetas"},{name:"Impermeables"},{name:"Intercomunicadores"},{name:"Monos"},{name:"Pantalones"},{name:"Protecciones"},{name:"Ropa t&eacutermica"},{name:"Maletas Blandas"},{name:"Maletas R&iacutegidas"},{name:"Antirrobos"},{name:"Estriberas"},{name:"Manillares"},{name:"Porta matr&iacuteculas"},{name:"Sistemas de escape"},{name:"Neum&aacuteticos"},{name:"Bater&iacuteas"}].map(n=>`\n          <div class="categorie">\n            <p>\n              ${n.name}\n            </p>\n          </div>\n        `).join("")}\n      </div>\n    </div>\n    <div class="SaleCatalog__products">\n      <h3>Art&iacuteculos m&aacutes vendidos</h3>\n      <div class="SaleCatalog__products-list">\n        <div class="SaleCatalog__products-list-search">\n          <p>Ordenar por:</p>\n          <input type="text">\n        </div>\n        <div class="SaleCatalog__products-list-items">\n          ${i.map(n=>`\n              <div class="productCard">\n                <p class="productCard__name">${n.name}</p>\n                <img \n                  src="${n.img||n.default}" \n                  alt="${n.name}"\n                  class="productCard__img"\n                >\n                <div class="productCard__buy">\n                  <button>Comprar</button>\n                  <p>${n.price} ₤</p>\n                </div>\n              </div>\n            `).join("")}\n        </div>\n      </div>\n      <hr />\n      <div class="SaleCatalog__products-navigation">\n          <button>1</button>\n          <button>2</button>\n          <button>3</button>\n          <button>4</button>\n          <button>5</button>\n          <button>6</button>\n          <button>...</button>\n          <button>Siguiente</button>\n      </div>\n    </div>\n  </div>\n</section>\n`;var l=()=>'\n  <section class="header">\n    <div class="header-container wrapper">\n      <div class="header__logo">\n        <h1>MOTOSHOP </h1>\n        \n<svg \n  xmlns="http://www.w3.org/2000/svg" \n  x="0px" \n  y="0px"\n  width="50" \n  height="50"\n  viewBox="0 0 172 172"\n  style=" \n  fill:#000000;">\n  <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">\n    <path d="M0,172v-172h172v172z" fill="none">\n    </path>\n    <g fill="#ffffff">\n      <path d="M106.64,27.52c0,0 -11.56969,-0.25531 -19.6725,7.8475c-1.37062,1.37063 -1.37062,3.57438 0,4.945c1.37063,1.37063 3.57438,1.37063 4.945,0c4.515,-4.515 10.03781,-5.34812 12.5775,-5.59c0.69875,1.47813 1.47813,3.1175 1.8275,4.8375c0.04031,0.25531 0.12094,0.51063 0.215,0.7525c-0.25531,1.57219 -1.04812,3.89688 -2.6875,5.805c-1.37062,1.37063 -2.71437,2.0425 -4.085,2.0425c-20.98937,0 -25.12812,9.9975 -27.1975,15.1575c-0.34937,0.68531 -0.645,1.35719 -0.645,2.0425c-11.00531,0 -19.26937,-3.09062 -20.64,-5.16c-4.81062,-8.25062 -8.62687,-8.6 -23.7575,-8.6c-23.73062,0 -27.17062,11.74438 -27.52,13.115c-0.34938,1.03469 -0.04031,1.97531 0.645,3.01c0.34938,0.34938 4.54188,4.515 12.7925,4.515h1.72c4.81063,-2.06937 9.97063,-3.44 15.48,-3.44c20.98938,0 37.84,16.85063 37.84,37.84c0,2.75469 -0.38969,5.52281 -1.075,8.2775c6.19469,1.72 13.14188,2.0425 16.2325,2.0425h0.645c6.19469,0 15.13063,-1.69312 18.92,-5.4825c1.72,-1.72 2.0425,-3.44 2.0425,-5.16c-2.99656,-20.70719 7.36375,-30.1 12.1475,-33.325c1.37063,3.13094 2.76813,6.27531 4.3,9.3525c-7.14875,5.50938 -11.61,14.39156 -11.61,23.9725c0,17.2 13.76,30.96 30.96,30.96c17.2,0 30.96,-13.76 30.96,-30.96c0,-17.2 -13.76,-30.6375 -30.96,-30.6375c-4.81062,0 -9.31219,1.04813 -13.4375,3.1175c2.06938,4.12531 4.47469,8.25063 6.88,12.04c2.06938,-0.68531 4.15219,-1.3975 6.5575,-1.3975c9.63469,0 17.2,7.56531 17.2,17.2c0,9.63469 -7.56531,17.2 -17.2,17.2c-9.63469,0 -17.2,-7.56531 -17.2,-17.2c0,-4.81062 1.74688,-8.94937 4.8375,-12.04c-2.365,-3.72219 -4.73,-7.76687 -6.7725,-12.1475c1.69313,-1.34375 3.68188,-2.64719 5.6975,-3.655c-3.09062,-6.19469 -6.20812,-12.71187 -8.2775,-19.2425c-0.12094,-0.30906 -0.24187,-0.60469 -0.43,-0.86c-2.76812,-9.07031 -5.44219,-20.27719 -5.6975,-20.5325c-0.04031,-0.18812 -0.14781,-0.36281 -0.215,-0.5375c-0.9675,-4.20594 -3.3325,-8.2775 -3.3325,-8.2775c-0.59125,-1.11531 -1.74687,-1.81406 -3.01,-1.8275zM128.6775,94.6c4.12531,6.88 8.96281,13.03438 13.4375,17.845c0.68531,0.68531 1.67969,1.075 2.365,1.075c0.68531,0 1.67969,-0.38969 2.365,-1.075c1.37063,-1.37062 1.37063,-3.35937 0,-4.73c-4.12531,-4.47469 -8.55969,-10.34687 -12.685,-16.8775c-2.06937,1.03469 -3.7625,2.0425 -5.4825,3.7625zM129.3225,41.28c-2.75469,0 -5.44219,0.38969 -7.8475,1.075c2.06938,7.56531 4.73,17.45531 6.45,21.93c0,0.34938 0.43,0.72563 0.43,1.075h0.9675c4.47469,0 7.28313,-1.075 9.3525,-2.795c2.40531,-2.40531 2.365,-5.84531 2.365,-8.6v-1.29c0,-2.75469 0.04031,-6.19469 -2.365,-8.6c-2.06937,-1.72 -4.87781,-2.795 -9.3525,-2.795zM30.96,75.68c-17.2,0 -30.96,13.76 -30.96,30.96c0,17.2 13.76,30.96 30.96,30.96c15.82938,0 28.9175,-12.04 30.6375,-27.52h-13.76c-1.72,7.91469 -8.62687,13.76 -16.8775,13.76c-9.63469,0 -17.2,-7.56531 -17.2,-17.2c0,-9.63469 7.56531,-17.2 17.2,-17.2c8.25063,0 15.1575,5.84531 16.8775,13.76h13.76c-1.72,-15.48 -14.80812,-27.52 -30.6375,-27.52zM47.8375,103.2h-7.095c-1.37062,-4.07156 -5.14656,-6.88 -9.7825,-6.88c-5.84531,0 -10.32,4.47469 -10.32,10.32c0,5.84531 4.47469,10.32 10.32,10.32c4.63594,0 8.41188,-2.80844 9.7825,-6.88h7.095c0.34938,-1.03469 0.3225,-2.40531 0.3225,-3.44c0,-1.03469 0.02688,-2.40531 -0.3225,-3.44z">\n      </path>\n    </g>\n  </g>\n</svg>\n\n      </div>\n      <nav class="header__nav">\n        <a href="#" class="header__nav-option">Ayuda</a>\n        <a href="#" class="header__nav-option">Nuestras tiendas</a>\n        <a href="#" class="header__nav-option">Contacto</a>\n        <a href="#" class="header__nav-menu">Menu</a>\n        <div class="header__nav-submenu">\n          <a href="#">Ayuda</a>\n          <a href="#">Tiendas</a>\n          <a href="#">Contacto</a>\n        </div>\n      </nav>\n    </div>\n  </section>\n  \n<section class="slider__container">\n  <div class="wrapper">\n    <div class="slider">\n      <img src="https://github.com/Gaybre/Frontend-exercise_Motoshop/blob/master/src/assets/images/slider-1.png?raw=true" alt="not-found">\n    </div>\n  </div>\n</section>\n\n<section class="shopMenu-container">\n  <div class="wrapper">\n    <div class="shopMenu__nav">\n      <a href="#" class="shopMenu__nav-1">Inicio</a>\n      <a href="#" class="shopMenu__nav-1">Carretera</a>\n      <a href="#" class="shopMenu__nav-1">Ciudad</a>\n      <a href="#" class="shopMenu__nav-2">Off Road</a>\n      <a href="#" class="shopMenu__nav-2">Trail</a>\n      <a href="#" class="shopMenu__nav-2">Trial</a>\n      <a href="#" class="shopMenu__nav-2">Casual</a>\n      <a href="#" class="shopMenu__nav-2">Accesorios</a>\n      <div class="shopMenu__subnav">\n        <a href="#" class="shopMenu__subnav-menu">Ver m&aacutes</a>\n        <div class="shopMenu__subnav-menu-1">\n          <a href="#">Off Road</a>\n          <a href="#">Trail</a>\n          <a href="#">Trial</a>\n          <a href="#">Casual</a>\n          <a href="#">Accesorios</a>\n        </div>\n        <div class="shopMenu__subnav-menu-2">\n          <a href="#">Inicio</a>\n          <a href="#">Carretera</a>\n          <a href="#">Ciudad</a>\n          <a href="#">Off Road</a>\n          <a href="#">Trail</a>\n          <a href="#">Trial</a>\n          <a href="#">Casual</a>\n          <a href="#">Accesorios</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'+o+c+'\n<section class="footer-container">\n  <div class="footer wrapper">\n    <div class="footer__moreInfo">\n      <a href="#">Av&iacuteso legal</a>\n      <a href="#">Polit&iacuteca de privacidad</a>\n      <a href="#">Gastos de env&iacuteo</a>\n      <a href="#">Sistemas de pago</a>\n      <a href="#">Plazos de entrega</a>\n      <a href="#">Devoluciones</a>\n    </div>\n    <div class="footer__socialMedia">\n      <a href="#"><span>\n<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\nwidth="24" height="24"\nviewBox="0 0 172 172"\nstyle=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M171.04387,36.8756c-6.22776,2.76503 -12.92067,4.6256 -19.94952,5.47837c7.15805,-4.31551 12.6881,-11.11178 15.27224,-19.22596c-6.71875,3.97956 -14.16106,6.87379 -22.06851,8.42428c-6.33113,-6.74459 -15.34976,-10.95673 -25.35036,-10.95673c-19.17428,0 -34.73077,15.55649 -34.73077,34.73077c0,2.71335 0.3101,5.375 0.90445,7.90746c-28.86479,-1.44712 -54.44772,-15.29808 -71.58053,-36.30709c-2.9976,5.14242 -4.70312,11.11178 -4.70312,17.49459c0,12.04206 6.1244,22.66286 15.45312,28.89062c-5.71094,-0.18088 -11.0601,-1.73137 -15.73738,-4.34135c0,0.15505 0,0.28426 0,0.43931c0,16.82271 11.96454,30.85456 27.85697,34.05889c-2.92007,0.80108 -5.96935,1.21454 -9.14783,1.21454c-2.2482,0 -4.41887,-0.20673 -6.53786,-0.62019c4.41887,13.77344 17.23617,23.85156 32.43088,24.10997c-11.86117,9.32872 -26.84915,14.85878 -43.12921,14.85878c-2.81671,0 -5.55589,-0.15505 -8.26923,-0.46515c15.34976,9.84556 33.61959,15.58233 53.23317,15.58233c63.87981,0 98.81731,-52.92308 98.81731,-98.79147c0,-1.52463 -0.02584,-3.02344 -0.10337,-4.52223c6.79628,-4.85817 12.6881,-10.98258 17.33954,-17.95974"></path></g></g></svg>\n</span></a>\n      <a href="#"><span>\n<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\nwidth="24" height="24"\nviewBox="0 0 172 172"\nstyle=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M117.55483,64.5h-17.2215v-14.33333c0,-7.396 0.602,-12.05433 11.2015,-12.05433h6.22067c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-8.987c0,-3.74817 -2.87383,-6.95167 -6.61483,-7.2025c-4.32867,-0.29383 -8.6645,-0.43 -13.0075,-0.42283c-19.44317,0 -33.63317,11.87517 -33.63317,33.67617v16.4905h-14.33333c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v14.33333c0,3.956 3.21067,7.16667 7.16667,7.16667l14.33333,-0.00717v57.3405c0,3.956 3.21067,7.16667 7.16667,7.16667h14.33333c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-57.35483l15.58033,-0.00717c3.64067,0 6.70083,-2.7305 7.1165,-6.34967l1.64117,-14.30467c0.4945,-4.24983 -2.83083,-7.98367 -7.1165,-7.98367z"></path></g></g></svg>\n</span></a>\n      <a href="#"><span>\n<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\nwidth="24" height="24"\nviewBox="0 0 172 172"\nstyle=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M26.875,26.875v21.5c53.37375,0 96.75,43.37625 96.75,96.75h21.5c0,-65.30625 -52.94375,-118.25 -118.25,-118.25zM26.875,64.5v21.5c32.62625,0 59.125,26.49875 59.125,59.125h21.5c0,-44.505 -36.12,-80.625 -80.625,-80.625zM43,112.875c-8.90559,0 -16.125,7.21941 -16.125,16.125c0,8.90559 7.21941,16.125 16.125,16.125c8.90559,0 16.125,-7.21941 16.125,-16.125c0,-8.90559 -7.21941,-16.125 -16.125,-16.125z"></path></g></g></svg>\n</span></a>\n    </div>\n  </div>\n</section>\n';e(8);window.addEventListener("load",async()=>{document.getElementById("main").innerHTML=await l()})}]);