_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,c=void 0!==a&&a;return n||r&&c}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"4vit":function(e,t,n){e.exports={challengeBoxContainer:"ChallengeBox_challengeBoxContainer__53AkF",challengeNotActive:"ChallengeBox_challengeNotActive__35ixK",challengeActive:"ChallengeBox_challengeActive__3mO_D",challengeFailedButton:"ChallengeBox_challengeFailedButton__u8aFS",challengeSucceededButton:"ChallengeBox_challengeSucceededButton__18bu2",challengeImageMovement:"ChallengeBox_challengeImageMovement__3Y3lf",image:"ChallengeBox_image__2hT1K"}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0,c=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){c=!0;var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=r.props[l],f=o[l]||new Set;"name"===l&&c||!f.has(d)?(f.add(d),o[l]=f):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(c.AmpStateContext),o=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return T})),n.d(t,"default",(function(){return U}));var o=n("nKUr"),r=n("q1tI");function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=n("c5aZ"),i=n("p46w"),s=n.n(i),u=n("lFCE"),l=n.n(u);function d(){var e=Object(r.useContext)(p),t=e.level,n=e.closeLevelUpModal;return Object(o.jsx)("div",{className:l.a.overlay,children:Object(o.jsxs)("div",{className:l.a.container,children:[Object(o.jsx)("header",{children:t}),Object(o.jsx)("strong",{children:"Level Up!"}),Object(o.jsxs)("p",{children:["You are awesome! ",Object(o.jsx)("br",{}),"keep up the great work!"]}),Object(o.jsx)("button",{onClick:n,type:"button",children:Object(o.jsx)("img",{src:"/icons/close.svg",alt:"fechar modal"})})]})})}var p=Object(r.createContext)({});function f(e){var t,n,i,u=e.children,l=a(e,["children"]),f=Object(r.useState)(null!==(t=l.level)&&void 0!==t?t:1),h=f[0],b=f[1],m=Object(r.useState)(null!==(n=l.currentExperience)&&void 0!==n?n:0),v=m[0],j=m[1],x=Object(r.useState)(null!==(i=l.challengesCompleted)&&void 0!==i?i:0),g=x[0],y=x[1],O=Object(r.useState)(null),C=O[0],_=O[1],w=Object(r.useState)(!1),S=w[0],A=w[1],E=Math.pow(4*(h+1),2);function M(){b(h+1),A(!0)}return Object(r.useEffect)((function(){Notification.requestPermission()}),[]),Object(r.useEffect)((function(){s.a.set("level",String(h)),s.a.set("currentExperience",String(v)),s.a.set("challengesCompleted",String(g))}),[M,v,g]),Object(o.jsxs)(p.Provider,{value:{level:h,currentExperience:v,challengesCompleted:g,levelUp:M,startNewChallenge:function(){var e=Math.floor(Math.random()*c.length),t=c[e];_(t),new Audio("/notification.mp3").play(),"granted"===Notification.permission&&new Notification("Novo Desafio",{body:"Valendo ".concat(t.amount,"xp!")})},resetChallenge:function(){_(null)},activeChallenge:C,experienceToNextLevel:E,completeChallenge:function(){if(C){var e=C.amount,t=v+e;t>=E&&(t-=E,M()),j(t),_(null),y(g+1)}},closeLevelUpModal:function(){A(!1)}},children:[u,S&&Object(o.jsx)(d,{})]})}var h=n("guWg"),b=n.n(h);function m(){var e=Object(r.useContext)(p),t=e.currentExperience,n=e.experienceToNextLevel,a=Math.round(100*t)/n;return Object(o.jsxs)("header",{className:b.a.experienceBar,children:[Object(o.jsx)("span",{children:"0 xp"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{width:"".concat(a,"%")},children:Object(o.jsx)("img",{className:b.a.currentExperience,src:"/icons/dotGreen.png",style:{left:"".concat(a,"%")},alt:""})}),Object(o.jsxs)("span",{className:b.a.currentExperience,style:{left:"".concat(a,"%")},children:[t," xp"]})]}),Object(o.jsxs)("span",{children:[n," xp"]})]})}var v=n("g4pe"),j=n.n(v),x=n("uixA"),g=n.n(x);function y(){var e=Object(r.useContext)(p).level;return Object(o.jsxs)("div",{className:g.a.profileContainer,children:[Object(o.jsx)("img",{src:"https://github.com/roddyka.png",alt:"Rodrigo Antunes"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("strong",{children:"Rodrigo Antunes"}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("img",{src:"icons/level.svg",alt:""})," Level ",e]})]})]})}var O=n("cLnE"),C=n.n(O),_=n("ST9b"),w=n.n(_);function S(){var e=Object(r.useContext)(p).challengesCompleted;return Object(o.jsxs)("div",{className:w.a.completedChallengesCointainer,children:[Object(o.jsx)("span",{children:"Challenges Completed"}),Object(o.jsx)("span",{children:e})]})}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(s){r=!0,a=s}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M,N=Object(r.createContext)({});function k(e){var t=e.children,n=Object(r.useContext)(p).startNewChallenge,a=Object(r.useState)(6),c=a[0],i=a[1],s=Math.floor(c/60),u=c%60,l=Object(r.useState)(!1),d=l[0],f=l[1],h=Object(r.useState)(!1),b=h[0],m=h[1];return Object(r.useEffect)((function(){d&&c>0?M=setTimeout((function(){i(c-1)}),1e3):d&&0===c&&(m(!0),f(!1),n())}),[d,c]),Object(o.jsx)(N.Provider,{value:{minutes:s,seconds:u,hasFinished:b,isActive:d,startCountdown:function(){f(!0)},resetCountdown:function(){clearTimeout(M),m(!1),f(!1),i(6)}},children:t})}var B=n("p2AZ"),I=n.n(B);function P(){var e=Object(r.useContext)(N),t=e.minutes,n=e.seconds,a=e.hasFinished,c=e.isActive,i=e.startCountdown,s=e.resetCountdown,u=E(String(t).padStart(2,"0").split(""),2),l=u[0],d=u[1],p=E(String(n).padStart(2,"0").split(""),2),f=p[0],h=p[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:I.a.countdownCountainer,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:l}),Object(o.jsx)("span",{children:d})]}),Object(o.jsx)("span",{children:":"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:f}),Object(o.jsx)("span",{children:h})]})]}),Object(o.jsx)("div",{className:I.a.countdownContainerButton,children:a?Object(o.jsx)("button",{disabled:!0,className:I.a.countdownButton,children:"Tasks Closed"}):Object(o.jsx)(o.Fragment,{children:c?Object(o.jsx)("button",{onClick:s,type:"button",className:"".concat(I.a.countdownButton," ").concat(I.a.countdownButtonActive),children:"Abandon"}):Object(o.jsx)("button",{onClick:i,type:"button",className:I.a.countdownButton,children:"Start"})})})]})}var R=n("4vit"),q=n.n(R);function D(){var e=Object(r.useContext)(p),t=e.activeChallenge,n=e.resetChallenge,a=e.completeChallenge,c=Object(r.useContext)(N).resetCountdown;return Object(o.jsx)("div",{className:q.a.challengeBoxContainer,children:t?Object(o.jsxs)("div",{className:q.a.challengeActive,children:[Object(o.jsxs)("header",{children:["Win ",t.amount," xp"]}),Object(o.jsxs)("main",{children:[Object(o.jsx)("img",{className:q.a.challengeImageMovement,src:"icons/".concat(t.type,".svg"),alt:""}),Object(o.jsx)("strong",{children:"New Challenge"}),Object(o.jsx)("p",{children:t.description})]}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("button",{type:"button",onClick:function(){n(),c()},className:q.a.challengeFailedButton,children:"Failed"}),Object(o.jsx)("button",{type:"button",className:q.a.challengeSucceededButton,onClick:function(){a(),c()},children:"Completed"})]})]}):Object(o.jsxs)("div",{className:q.a.challengeNotActive,children:[Object(o.jsx)("strong",{children:"End a task to receive a challenge"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("img",{className:q.a.challengeImageMovement,src:"icons/level-up.svg",alt:"level up"}),"Level up by completing tasks"]})]})})}var T=!0;function U(e){return Object(o.jsx)(f,{level:e.level,currentExperience:e.currentExperience,challengesCompleted:e.challengesCompleted,children:Object(o.jsxs)("div",{className:C.a.container,children:[Object(o.jsx)(j.a,{children:Object(o.jsx)("title",{children:"Inicio | StepByStep"})}),Object(o.jsx)(m,{}),Object(o.jsx)(k,{children:Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:C.a.syfyContainer,children:[Object(o.jsx)(S,{}),Object(o.jsx)(P,{})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{})})]})})]})})}},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||c()}},ST9b:function(e,t,n){e.exports={completedChallengesCointainer:"CompletedChallenger_completedChallengesCointainer__2_kup"}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},c5aZ:function(e){e.exports=JSON.parse('[{"type":"body","description":"Estique um de seus bra\xe7os com a palma da m\xe3o virada para frente e puxe os dedos para cima por 10 segundos por m\xe3o.","amount":80},{"type":"body","description":"Estique seu bra\xe7o contra o peito e puxe-o utilizando o outro bra\xe7o por 10 segundos por bra\xe7o.","amount":60},{"type":"body","description":"Puxe seu pesco\xe7o com a ajuda da m\xe3o para a direita e para a esquerda, permanecendo na posi\xe7\xe3o por alguns segundos.","amount":70},{"type":"body","description":"Com as duas m\xe3os na parte de tr\xe1s da cabe\xe7a, leve-a para baixo, alongando a parte de tr\xe1s da regi\xe3o.","amount":60},{"type":"body","description":"Cruze as pernas e des\xe7a com as m\xe3os esticadas em dire\xe7\xe3o ao ch\xe3o. Repita o movimento com a outra perna na frente.","amount":100},{"type":"body","description":"Sentado, abra as pernas e tente encostar as palmas das m\xe3os no ch\xe3o, repita 3 vezes por 5 segundos.","amount":80},{"type":"body","description":"Puxe o joelho de encontro ao peito e segure, troque de perna ap\xf3s 10 segundos.","amount":50},{"type":"body","description":"Sentado, cruze uma perna e incline seu tronco \xe0 frente, troque de perna ap\xf3s 10 segundos.","amount":80},{"type":"eye","description":"Sentado, feche os olhos e cubra-os com as palmas da m\xe3o durante 2 minutos, depois abra normalmente.","amount":90},{"type":"eye","description":"Em algum ambiente aberto, olhe o mais longe que puder em quatro dire\xe7\xf5es por 3s, mexa apenas os olhos. Repita 3 vezes.","amount":140},{"type":"eye","description":"Usando os polegares, massage a \xe1rea abaixo das sobrancelhas em movimentos circulares por 15 segundos.","amount":70},{"type":"body","description":"Em p\xe9, gire a cintura o m\xe1ximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","amount":90}]')},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},cLnE:function(e,t,n){e.exports={container:"Home_container__3x6-b",syfyContainer:"Home_syfyContainer__5uNTA"}},g4pe:function(e,t,n){e.exports=n("8Kt/")},guWg:function(e,t,n){e.exports={experienceBar:"ExperienceBar_experienceBar__2JbAX",currentExperience:"ExperienceBar_currentExperience__2XATR"}},lFCE:function(e,t,n){e.exports={overlay:"LevelUpModal_overlay__1huQl",container:"LevelUpModal_container__1dM18"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},p2AZ:function(e,t,n){e.exports={countdownCountainer:"Countdown_countdownCountainer__3tSZr",countdownButton:"Countdown_countdownButton__2cSHU",countdownButtonActive:"Countdown_countdownButtonActive__37GOc",countdownContainerButton:"Countdown_countdownContainerButton__AxiEb"}},p46w:function(e,t,n){var o,r;!function(a){if(void 0===(r="function"===typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=a(),!!0){var c=window.Cookies,i=window.Cookies=a();i.noConflict=function(){return window.Cookies=c,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},r.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(u){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var s in a)a[s]&&(i+="; "+s,!0!==a[s]&&(i+="="+a[s].split(";")[0]));return document.cookie=t+"="+n+i}}function c(e,n){if("undefined"!==typeof document){for(var r={},a=document.cookie?document.cookie.split("; "):[],c=0;c<a.length;c++){var i=a[c].split("="),s=i.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(i[0]);if(s=(o.read||o)(s,u)||t(s),n)try{s=JSON.parse(s)}catch(l){}if(r[u]=s,e===u)break}catch(l){}}return e?r[e]:r}}return r.set=a,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(t,n){a(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},uixA:function(e,t,n){e.exports={profileContainer:"Profile_profileContainer__3iYlY"}}},[["/EDR",0,1]]]);