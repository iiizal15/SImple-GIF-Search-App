/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/api.js":
/*!************************!*\
  !*** ./src/app/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _gif_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif.js */ "./src/app/gif.js");

class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  search(q, gifCount, callback) {
    let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
    fetch(finalURL).then(resp => resp.json()).then(info => {
      let gifsData = info.data;
      let gifs = gifsData.map(gif => new _gif_js__WEBPACK_IMPORTED_MODULE_0__.Gif(gif)); // create new instances of Gif class
      callback(gifs);
    });
  }
}

/***/ }),

/***/ "./src/app/gif.js":
/*!************************!*\
  !*** ./src/app/gif.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gif": () => (/* binding */ Gif)
/* harmony export */ });
class Gif {
  constructor(gif) {
    this.gif = gif;
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.iframe = document.createElement('img');
    // this.iframe.setAttribute('src', gif.images.downsized_medium.url);
    this.iframe.setAttribute('src', gif.images.downsized_medium.url);
    this.iframe.setAttribute('alt', gif.title);
  }
  load(callback) {
    this.iframe.onload = () => {
      if (callback) callback();
    };
    this.container.append(this.iframe);
    let copyBtn = document.createElement('button');
    copyBtn.innerText = 'Copy Link';
    copyBtn.onclick = () => {
      let copyLink = `https://media4.giphy.com/media/${this.gif.id}/giphy.mp4`;
      navigator.clipboard.writeText(copyLink).then(() => {
        alert('GIF copied to clipboard');
      }).catch(() => {
        alert('GIF copied to clipboard');
        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'text');
        document.body.appendChild(hiddenInput);
        hiddenInput.value = copyLink;
        hiddenInput.select();
        document.execCommand('copy');
        document.body.removeChild(hiddenInput);
      });
    };
    this.container.append(copyBtn);
  }
}

// export class Gif {
//   constructor(gif) {
//     this.gif = gif;
//     this.container = document.createElement('div');
//     this.container.classList.add('container');
//     this.iframe = document.createElement('img');
//     // this.iframe.setAttribute('src', gif.images.downsized_medium.url);
//     this.iframe.setAttribute('src', gif.images.downsized_medium.url);
//     this.iframe.setAttribute('alt', gif.title);
//     this.gifCount = 15;
//   }

//   load(callback) {
//     this.iframe.onload = () => {
//       this.gifCount--;
//       if (this.gifCount == 0) {
//         callback();
//       }
//     };
//     this.container.append(this.iframe);
//     let copyBtn = document.createElement('button');
//     copyBtn.innerText = 'Copy Link';
//     copyBtn.onclick = () => {
//       let copyLink = `https://media4.giphy.com/media/${this.gif.id}/giphy.mp4`;
//       navigator.clipboard
//         .writeText(copyLink)
//         .then(() => {
//           alert('GIF copied to clipboard');
//         })
//         .catch(() => {
//           alert('GIF copied to clipboard');
//           let hiddenInput = document.createElement('input');
//           hiddenInput.setAttribute('type', 'text');
//           document.body.appendChild(hiddenInput);
//           hiddenInput.value = copyLink;
//           hiddenInput.select();
//           document.execCommand('copy');
//           document.body.removeChild(hiddenInput);
//         });
//     };
//     this.container.append(copyBtn);
//   }
// }

/***/ }),

/***/ "./src/app/loader.js":
/*!***************************!*\
  !*** ./src/app/loader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
class Loader {
  constructor() {
    this.loader = document.querySelector('.loader');
    this.wrapper = document.querySelector('.wrapper');
    if (!this.loader) {
      throw new Error('Unable to find element with class "loader"');
    }
    if (!this.wrapper) {
      throw new Error('Unable to find element with class "wrapper"');
    }
  }
  show() {
    try {
      this.loader.style.display = 'block';
      this.wrapper.style.display = 'none';
    } catch (err) {
      console.error('Error showing loader:', err);
    }
  }
  hide() {
    try {
      this.loader.style.display = 'none';
      this.wrapper.style.display = 'grid';
    } catch (err) {
      console.error('Error hiding loader:', err);
    }
  }
}

// module.exports = class Loader {
//   constructor() {
//     this.loader = document.querySelector('.loader');
//     this.wrapper = document.querySelector('.wrapper');
//   }

//   show() {
//     this.loader.style.display = 'block';
//     this.wrapper.style.display = 'none';
//   }

//   hide() {
//     this.loader.style.display = 'none';
//     this.wrapper.style.display = 'grid';
//   }
// };

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGif": () => (/* binding */ generateGif),
/* harmony export */   "submitBtn": () => (/* binding */ submitBtn)
/* harmony export */ });
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _app_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/loader.js */ "./src/app/loader.js");
/* harmony import */ var _app_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api.js */ "./src/app/api.js");




// Initialize the loader and API with your API key
const loader = new _app_loader_js__WEBPACK_IMPORTED_MODULE_1__.Loader();
const api = new _app_api_js__WEBPACK_IMPORTED_MODULE_2__.Api('a1YuL59U8546gFwn16tK2y0E5FzRh5LD');

// Define a function to generate GIFs and display them on the page
const generateGif = () => {
  // Show the loader while the GIFs are being loaded
  loader.show();

  // Get the search query from the input field or use a default query
  const q = document.getElementById('search-box').value || 'happy';

  // Set the number of GIFs to generate
  const gifCount = 15;

  // Use the API to search for GIFs and pass a callback function to display them on the page
  api.search(q, gifCount, gifs => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    gifs.forEach(gif => {
      // Load each GIF and hide the loader when all GIFs have loaded
      gif.load(() => {
        loader.hide();
      });
      wrapper.append(gif.container);
    });
  });
};

// Add an event listener to the submit button to generate GIFs on click
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', generateGif);

// Generate GIFs when the page loads
window.addEventListener('load', generateGif);

})();

/******/ })()
;