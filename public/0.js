(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chunk */ "./node_modules/chunk/src/chunk.js");
/* harmony import */ var chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chunk__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'menu_user',
  props: ['LogonUser'],
  data: function data() {
    return {};
  },
  methods: {
    getAllMenu: function getAllMenu() {
      this.$store.dispatch('functionalApp/getAllMenu');
    },
    addCart: function addCart(menu) {
      if (this.currentUser == '') {
        alert("You Have to Log on First!");
        return;
      }

      var cart = {
        'username': this.currentUser.username,
        'menu_name': menu.name,
        'amount': 1,
        'status': 'active'
      };
      this.$store.dispatch('functionalApp/addMenuToCart', cart)["catch"](function (e) {
        alert(e.response.data.message);
      });
    }
  },
  computed: {
    menus: {
      get: function get() {
        return this.$store.state.functionalApp.allMenu;
      }
    },
    chunkMenus: {
      get: function get() {
        return chunk__WEBPACK_IMPORTED_MODULE_0___default()(this.$store.state.functionalApp.allMenu, 4);
      }
    },
    currentUser: {
      get: function get() {
        return this.LogonUser;
      }
    }
  },
  created: function created() {
    this.getAllMenu();
  }
});

/***/ }),

/***/ "./node_modules/chunk/src/chunk.js":
/*!*****************************************!*\
  !*** ./node_modules/chunk/src/chunk.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  function chunk(collection, size) {
    var result = [];

    // default size to two item
    size = parseInt(size) || 2;

    // add each chunk to the result
    for (var x = 0; x < Math.ceil(collection.length / size); x++) {
      var start = x * size;
      var end = start + size;

      result.push(collection.slice(start, end));
    }

    return result;
  }

  // export in node or browser
  if (true) {
    if ( true && module.exports) {
      exports = module.exports = chunk;
    }
    exports.chunk = chunk;
  } else {}
}.call(this));


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body-menu[data-v-2c78fc95]{\n    background: antiquewhite;\n    height:100%;\n    width: 100%;\n}\n.layout-row[data-v-2c78fc95]{\n    display:flex;\n    flex-direction: row;\n    width: 100%;\n    margin: 20px;\n    box-sizing: border-box;\n}\n.menu-item[data-v-2c78fc95]{\n    flex-basis:25%;\n    overflow: hidden;\n    margin : 0 auto;\n    margin-right: 10px;\n    margin-left: 10px;\n    box-sizing: border-box;\n}\n.content[data-v-2c78fc95]{\n    width: 75%;\n    overflow:visible;\n    margin : 0 auto;\n    text-align:center;\n    display:flex;\n    flex-direction:column;\n    box-sizing: border-box;\n}\n.card-title[data-v-2c78fc95]{\n    font-weight: bold;\n    font-size: 24px;\n}\n.btn-addCart[data-v-2c78fc95]{\n    margin: 0 auto;\n}\n.card-subtitle[data-v-2c78fc95]{\n    font-size: 24px;\n    font-weight: bold;\n    color: black!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "body-menu" }, [
    _c(
      "div",
      { staticClass: "content" },
      _vm._l(_vm.chunkMenus, function(menus) {
        return _c(
          "div",
          { key: menus.index, staticClass: "layout-row" },
          _vm._l(menus, function(menu) {
            return _c(
              "v-card",
              {
                key: menu.index,
                staticClass: "menu-item",
                attrs: { "min-height": "400px" }
              },
              [
                _c("v-img", {
                  attrs: { height: "250", src: "/img/" + menu.photo }
                }),
                _vm._v(" "),
                _c("v-card-title", { staticClass: "card-title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(menu.name) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("v-card-subtitle", { staticClass: "card-subtitle" }, [
                  _vm._v(
                    "\n                    Rp " +
                      _vm._s(menu.price) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "btn-addCart mb-3",
                        attrs: { color: "success", width: "80%" },
                        on: {
                          click: function($event) {
                            return _vm.addCart(menu)
                          }
                        }
                      },
                      [_vm._v("ADD TO CART")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/user_pages/menu_user.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/user_pages/menu_user.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_user.vue?vue&type=template&id=2c78fc95&scoped=true& */ "./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true&");
/* harmony import */ var _menu_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_user.vue?vue&type=script&lang=js& */ "./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& */ "./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c78fc95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user_pages/menu_user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu_user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=style&index=0&id=2c78fc95&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_style_index_0_id_2c78fc95_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu_user.vue?vue&type=template&id=2c78fc95&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user_pages/menu_user.vue?vue&type=template&id=2c78fc95&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_user_vue_vue_type_template_id_2c78fc95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);