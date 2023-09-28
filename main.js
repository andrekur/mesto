(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._inputs=Array.from(e.querySelectorAll(r.inputSelector)),this._buttonSubmit=e.querySelector(r.submitButtonSelector),this._inputErrorClass=r.inputErrorClass,this._errorClass=r.errorClass,this._inactiveButtonClass=r.inactiveButtonClass}var r,n;return r=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._toggleButtonState(),this._form.addEventListener("reset",(function(){return t._disablePopupSaveButton()})),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"updateFormValid",value:function(){var t=this;this._inputs.forEach((function(e){t._isValid(e),t._toggleButtonState()}))}},{key:"_showInputError",value:function(t){t.classList.add(this._inputErrorClass);var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_isInputsValid",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_hideInputError",value:function(t){t.classList.remove(this._inputErrorClass);var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._errorClass)}},{key:"_disablePopupSaveButton",value:function(){this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.disabled=!0}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButtonState",value:function(){this._isInputsValid()?this._disablePopupSaveButton():(this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.disabled=!1)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(),n=".photos__items",o=(document.querySelector(n),document.querySelector("#editProfilePopup")),i=document.querySelector(".profile__edit-button"),u=o.querySelector("#formEditProfilePopup"),a=document.querySelector("#editAvatarPopup"),s=document.querySelector(".profile__avatar-block"),l=a.querySelector("#formEditAvatar"),c=document.querySelector("#addImagePopup"),f=document.querySelector(".profile__add-button"),p=c.querySelector("#formAddImagePopup"),y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},h={url:"https://mesto.nomoreparties.co/v1/".concat("cohort-75"),headers:{"Content-Type":"application/json",authorization:"979eeed8-c018-4b3b-9808-ccf51416ee30"}};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._openedClass="popup_opened",this._closeButtonSelector=".popup__close",this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add(this._openedClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._openedClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",(function(e){e.target.classList.contains(t._openedClass)&&t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return w(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmitForm=e.bind(w(r)),r._form=Array.from(r._popup.getElementsByTagName("form"))[0],r._inputList=Array.from(r._form.getElementsByTagName("input")),r}return e=u,(r=[{key:"getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.id]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){S(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"close",value:function(){S(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var j=function(){function t(e,r){var n=e.data,o=void 0===n?[]:n,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=o,this._renderer=i,this._container=document.querySelector(r)}var e,r;return e=t,r=[{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this._container.append(t):this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}],r&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var L=function(){function t(e,r,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._containerTemplateSelector=n,this._id=e._id,this._name=e.name,this._url=e.link,this._likes=Array.from(e.likes),this.owner_id=e.owner._id,this.canDelete=this.owner_id==r,this.wasLiked=e.likes.includes(r),this._likeButtonSelector=".photo-container__like-button",this._deleteButtonSelector=".photo-container__delete-button",this._imageItemSelector=".photo-container__image",this._imageTitleSelector=".photo-container__title",this._likeCountSelector=".photo-container__like-count",this._handleCardClick=o.bind(this),this._handleDeleteClick=i.bind(this)}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._containerTemplateSelector).content.querySelector(".photo-container").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(this._imageItemSelector),this._cardImage.src=this._url,this._cardImage.alt=this._getImageAltCaption(),this._element.querySelector(this._likeCountSelector).textContent=this._likes.length,this._setEventListeners(),this._element.querySelector(this._imageTitleSelector).textContent=this._name,this._element}},{key:"getId",value:function(){return this._id}},{key:"getImageData",value:function(){return{title:this._name,url:this._url,altCaption:this._getImageAltCaption()}}},{key:"_addHandlerLikeBitton",value:function(t){t.target.classList.toggle("photo-container__like-button_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){this._cardImage.addEventListener("click",this._handleCardClick),this._element.querySelector(this._likeButtonSelector).addEventListener("click",this._addHandlerLikeBitton),this._element.querySelector(this._deleteButtonSelector).addEventListener("click",this._handleDeleteClick)}},{key:"_getImageAltCaption",value:function(){return"Изображение: ".concat(this._name)}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},B.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(n);if(o){var r=A(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._zoomImageItem=e._popup.querySelector(".popup__image"),e._zoomImageFigcaption=e._popup.querySelector(".popup__figcaption"),e}return e=u,(r=[{key:"open",value:function(t){this._zoomImageFigcaption.textContent=t.title,this._zoomImageItem.src=t.url,this._zoomImageItem.alt=t.altCaption,B(A(u.prototype),"open",this).call(this)}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}var x=function(){function t(e,r){var n=e.userNameSelector,o=e.userDescriptionSelector,i=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(o),this._avatar=document.querySelector(i),this._getUserPofile=r.bind(this),this._getUserPofile()}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"getUserId",value:function(){return this._id}},{key:"setUserInfoFull",value:function(t){this._avatar.src=t.avatar,this._id=t.id,this.setUserInfo(t)}},{key:"setAvatar",value:function(t){this._avatar.src=t}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}function z(t,e){return new L(t,e,"#photo-container_template",(function(){Q.open(this.getImageData())}),(function(){var t=this;H.delCard(this.getId()).then((function(e){t._deleteCard()}))})).generateCard()}var H=new(function(){function t(e){var r=e.url,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"_sendRequest",value:function(t,e){return fetch(t,e).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)})).catch((function(t){console.log(t)}))}},{key:"getUserPofile",value:function(){return this._sendRequest("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"editUserProfile",value:function(t){return this._sendRequest("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}},{key:"editUserAvatar",value:function(t){return this._sendRequest("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}},{key:"getAllCards",value:function(){return this._sendRequest("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"createCard",value:function(t){return this._sendRequest("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)})}},{key:"setLike",value:function(){}},{key:"unsetLike",value:function(){}},{key:"delCard",value:function(t){return this._sendRequest("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())(h),J=new x({userNameSelector:".profile__name",userDescriptionSelector:".profile__about",userAvatarSelector:".profile__avatar-img"},(function(){var t=this;H.getUserPofile().then((function(e){return t.setUserInfoFull(e)}))})),G=new r(u,y);G.enableValidation();var M=new E("#editProfilePopup",(function(t){var e=this;t.preventDefault(),H.editUserProfile(this.getInputValues()).then((function(t){J.setUserInfo(t),e.close()}))}));M.setEventListeners(),i.addEventListener("click",(function(){M.setInputValues(J.getUserInfo()),G.updateFormValid(),M.open()})),new r(l,y).enableValidation();var Z=new E("#editAvatarPopup",(function(t){var e=this;t.preventDefault();var r={avatar:this.getInputValues().url};H.editUserAvatar(r).then((function(t){J.setAvatar(t.avatar),e.close()}))}));Z.setEventListeners(),s.addEventListener("click",(function(){Z.open()}));var K=new E("#addImagePopup",(function(t){var e=this;t.preventDefault();var r=this.getInputValues(),n={name:r.name,link:r.url};H.createCard(n).then((function(t){var r=z(t,J.getUserId());W.addItem(r),e.close()}))}));K.setEventListeners(),f.addEventListener("click",(function(){K.open()}));var Q=new U("#viewZoomImagePopup");Q.setEventListeners(),new r(p,y).enableValidation();var W=new j({renderer:function(t){var e=z({title:t.title,url:t.url,zoomImagePopup:Q});W.addItem(e,!0)}},n);H.getAllCards().then((function(t){t.forEach((function(t){var e=z(t);W.addItem(e)}))}))})();