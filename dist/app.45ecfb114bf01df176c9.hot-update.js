"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable object-curly-newline */
const DrawerInitiator = {
  init({ button, drawer, content, navbarTop }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer);
    });
    navbarTop.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });
  },

  _toggleDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.toggle("active");
    drawer.classList.toggle("show");
  },
  _tooggleNavbar(navbarTop, event) {
    navbarTop.classList.toggle("active");
  },
  _closeDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.remove("active");
    drawer.classList.remove("show");
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ1ZWNmYjExNGJmMDFkZjE3NmM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTLG9DQUFvQztBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXHJcbmNvbnN0IERyYXdlckluaXRpYXRvciA9IHtcclxuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQsIG5hdmJhclRvcCB9KSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbG9zZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcbiAgICBuYXZiYXJUb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0sXHJcbiAgX3Rvb2dnbGVOYXZiYXIobmF2YmFyVG9wLCBldmVudCkge1xyXG4gICAgbmF2YmFyVG9wLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSxcclxuICBfY2xvc2VEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==