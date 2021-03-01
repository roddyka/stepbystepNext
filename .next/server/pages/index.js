module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "4vit":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2",
	"challengeImageMovement": "ChallengeBox_challengeImageMovement__3Y3lf",
	"image": "ChallengeBox_image__2hT1K"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./challenges.json
var challenges = __webpack_require__("c5aZ");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./src/styles/components/LevelUpModal.module.css
var LevelUpModal_module = __webpack_require__("lFCE");
var LevelUpModal_module_default = /*#__PURE__*/__webpack_require__.n(LevelUpModal_module);

// CONCATENATED MODULE: ./src/components/LevelUpModal.tsx





function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(external_react_["useContext"])(ChallengesContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: LevelUpModal_module_default.a.overlay,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: LevelUpModal_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
        children: level
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Level Up!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["You are awesome! ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "keep up the great work!"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: closeLevelUpModal,
        type: "button",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/icons/close.svg",
          alt: "fechar modal"
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/contexts/ChallengesContext.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(external_react_["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(external_react_["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(external_react_["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(external_react_["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(external_react_["useState"])(null);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = Object(external_react_["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(external_react_["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(external_react_["useEffect"])(() => {
    external_js_cookie_default.a.set('level', String(level));
    external_js_cookie_default.a.set('currentExperience', String(currentExperience));
    external_js_cookie_default.a.set('challengesCompleted', String(challengesCompleted));
  }, [levelUp, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: `Valendo ${challenge.amount}xp!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      resetChallenge,
      activeChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isModalOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LevelUpModal, {})]
  });
}
// EXTERNAL MODULE: ./src/styles/components/ExperienceBar.module.css
var ExperienceBar_module = __webpack_require__("guWg");
var ExperienceBar_module_default = /*#__PURE__*/__webpack_require__.n(ExperienceBar_module);

// CONCATENATED MODULE: ./src/components/ExperienceBar.tsx





function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(external_react_["useContext"])(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: ExperienceBar_module_default.a.experienceBar,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: "0 xp"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: ExperienceBar_module_default.a.currentExperience,
          src: "/icons/dotGreen.png",
          style: {
            left: `${percentToNextLevel}%`
          },
          alt: ""
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: ExperienceBar_module_default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: [experienceToNextLevel, " xp"]
    })]
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/styles/components/Profile.module.css
var Profile_module = __webpack_require__("uixA");
var Profile_module_default = /*#__PURE__*/__webpack_require__.n(Profile_module);

// CONCATENATED MODULE: ./src/components/Profile.tsx





function Profile() {
  const {
    level
  } = Object(external_react_["useContext"])(ChallengesContext);

  function responseGoogle(data) {
    console.log(data);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Profile_module_default.a.profileContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "https://github.com/roddyka.png",
      alt: "Rodrigo Antunes"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Rodrigo Antunes"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "icons/level.svg",
          alt: ""
        }), " Level ", level]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/styles/Pages/Home.module.css
var Home_module = __webpack_require__("cLnE");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: ./src/styles/components/CompletedChallenger.module.css
var CompletedChallenger_module = __webpack_require__("ST9b");
var CompletedChallenger_module_default = /*#__PURE__*/__webpack_require__.n(CompletedChallenger_module);

// CONCATENATED MODULE: ./src/components/CompletedChallenges.tsx





function CompletedChallenger() {
  const {
    challengesCompleted
  } = Object(external_react_["useContext"])(ChallengesContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: CompletedChallenger_module_default.a.completedChallengesCointainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: "Challenges Completed"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: challengesCompleted
    })]
  });
}
// CONCATENATED MODULE: ./src/contexts/CountdownContext.tsx



const CountdownContext = /*#__PURE__*/Object(external_react_["createContext"])({});
let countdownTimeout;
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(external_react_["useContext"])(ChallengesContext);
  const {
    0: time,
    1: setTime
  } = Object(external_react_["useState"])(0.1 * 60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const {
    0: isActive,
    1: setIsActive
  } = Object(external_react_["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(external_react_["useState"])(false);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  Object(external_react_["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  });
}
// EXTERNAL MODULE: ./src/styles/components/Countdown.module.css
var Countdown_module = __webpack_require__("p2AZ");
var Countdown_module_default = /*#__PURE__*/__webpack_require__.n(Countdown_module);

// CONCATENATED MODULE: ./src/components/Countdown.tsx






function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = Object(external_react_["useContext"])(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secoundRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Countdown_module_default.a.countdownCountainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: minuteLeft
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: minuteRight
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: ":"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: secondLeft
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: secoundRight
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Countdown_module_default.a.countdownContainerButton,
      children: hasFinished ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        disabled: true,
        className: Countdown_module_default.a.countdownButton,
        children: "Tasks Closed"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: isActive ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: resetCountdown,
          type: "button",
          className: `${Countdown_module_default.a.countdownButton} ${Countdown_module_default.a.countdownButtonActive}`,
          children: "Abandon"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: startCountdown,
          type: "button",
          className: Countdown_module_default.a.countdownButton,
          children: "Start"
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/styles/components/ChallengeBox.module.css
var ChallengeBox_module = __webpack_require__("4vit");
var ChallengeBox_module_default = /*#__PURE__*/__webpack_require__.n(ChallengeBox_module);

// CONCATENATED MODULE: ./src/components/ChallengeBox.tsx






function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(external_react_["useContext"])(ChallengesContext);
  const {
    resetCountdown
  } = Object(external_react_["useContext"])(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ChallengeBox_module_default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ChallengeBox_module_default.a.challengeActive,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        children: ["Win ", activeChallenge.amount, " xp"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: ChallengeBox_module_default.a.challengeImageMovement,
          src: `icons/${activeChallenge.type}.svg`,
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "New Challenge"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: activeChallenge.description
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          onClick: handleChallengeFailed,
          className: ChallengeBox_module_default.a.challengeFailedButton,
          children: "Failed"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "button",
          className: ChallengeBox_module_default.a.challengeSucceededButton,
          onClick: handleChallengeSucceeded,
          children: "Completed"
        })]
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ChallengeBox_module_default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "End a task to receive a challenge"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: ChallengeBox_module_default.a.challengeImageMovement,
          src: "icons/level-up.svg",
          alt: "level up"
        }), "Level up by completing tasks"]
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/pages/index.tsx











function Home(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChallengesProvider, {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Home_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Inicio | StepByStep"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExperienceBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CountdownProvider, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: Home_module_default.a.syfyContainer,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CompletedChallenger, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Countdown, {})]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChallengeBox, {})
          })]
        })
      })]
    })
  });
}
const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

/***/ }),

/***/ "ST9b":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesCointainer": "CompletedChallenger_completedChallengesCointainer__2_kup"
};


/***/ }),

/***/ "c5aZ":
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cLnE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__3x6-b",
	"syfyContainer": "Home_syfyContainer__5uNTA"
};


/***/ }),

/***/ "guWg":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "lFCE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "p2AZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownCountainer": "Countdown_countdownCountainer__3tSZr",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc",
	"countdownContainerButton": "Countdown_countdownContainerButton__AxiEb"
};


/***/ }),

/***/ "uixA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });