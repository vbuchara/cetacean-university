import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "./src/utils/isEqualSet.ts":
/*!*********************************!*\
  !*** ./src/utils/isEqualSet.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEqualSet: () => (/* binding */ isEqualSet)
/* harmony export */ });
function isEqualSet(firstSet, secondSet) {
  return firstSet.size === secondSet.size && [...firstSet].every(value => secondSet.has(value));
}

/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/blocks/interactive-quiz/view.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var _utils_isEqualSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/isEqualSet */ "./src/utils/isEqualSet.ts");
/**
 * WordPress dependencies
 */


const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('cetacean-university-interactive-quiz', {
  state: {
    quizzesCompleted: 0
  },
  actions: {
    onInputAnswerCheck: event => {
      const {
        answer
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const input = event.target;
      answer.isChecked = input.checked;
      answer.showIcon = input.checked;
    },
    onQuizSubmit: event => {
      event.preventDefault();
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const formElement = event.target;
      const formData = new FormData(formElement);
      const answersData = formData.getAll("interactive-quiz-answer");
      const checkedAnswersSet = new Set(answersData);
      const allCorrectAnswers = context.answers.filter(({
        isCorrect
      }) => isCorrect).map(({
        id
      }) => id);
      const allCorrectAnswersSet = new Set(allCorrectAnswers);
      const correctCheckedAnswers = Array.from(checkedAnswersSet).filter(id => allCorrectAnswersSet.has(id));
      const correctCheckedAnswersSet = new Set(correctCheckedAnswers);
      const wrongCheckedAnswers = Array.from(checkedAnswersSet).filter(id => !allCorrectAnswersSet.has(id));
      const wrongCheckedAnswersSet = new Set(wrongCheckedAnswers);
      if (correctCheckedAnswersSet.size === 0) {
        context.resultMessage = "Sorry, you didn't get any answers right :(";
        context.hasFailed = true;
        context.hasBeenSubmitted = true;
        state.quizzesCompleted++;
        return;
      }
      if (wrongCheckedAnswersSet.size > 0) {
        context.resultMessage = `Sorry, you got ${wrongCheckedAnswersSet.size} answer(s) wrong.`;
        context.hasFailed = true;
        context.hasBeenSubmitted = true;
        state.quizzesCompleted++;
        return;
      }
      if ((0,_utils_isEqualSet__WEBPACK_IMPORTED_MODULE_1__.isEqualSet)(correctCheckedAnswersSet, allCorrectAnswersSet) && wrongCheckedAnswersSet.size == 0) {
        context.resultMessage = "Congratulations! You got all answers right.";
        context.hasSucceeded = true;
        context.hasBeenSubmitted = true;
        state.quizzesCompleted++;
        return;
      }
      if (correctCheckedAnswersSet.size > 0) {
        context.resultMessage = `Congratulations! You got ${correctCheckedAnswersSet.size} answer(s) right!`;
        context.hasSucceeded = true;
        context.hasBeenSubmitted = true;
        state.quizzesCompleted++;
        return;
      }
    }
  },
  callbacks: {
    reactToFormSubmit: () => {
      const {
        answer,
        hasBeenSubmitted
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!hasBeenSubmitted) return;
        answer.isDisabled = true;
        answer.wasCorrect = answer.isCorrect;
        answer.wasWrong = !answer.isCorrect;
        answer.showIcon = true;
        answer.showCheckIcon = answer.wasCorrect;
      }, [hasBeenSubmitted, answer.isChecked, answer.isCorrect]);
    }
  }
});

//# sourceMappingURL=view.js.map