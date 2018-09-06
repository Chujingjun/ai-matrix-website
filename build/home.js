!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=55)}([function(e,t,n){"use strict";function r(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n,r,o){var a={};return Object.keys(r).forEach(function(e){a[e]=r[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){if(!e||!e.hasOwnProperty)return!1;for(var t=["value","initializer","get","set"],n=0,r=t.length;n<r;n++)if(e.hasOwnProperty(t[n]))return!0;return!1}function l(e,t){return u(t[t.length-1])?e.apply(void 0,i(t).concat([[]])):function(){return e.apply(void 0,i(Array.prototype.slice.call(arguments)).concat([t]))}}function c(e){return!1===e.hasOwnProperty(P)&&_(e,P,{value:new j}),e[P]}function s(e){var t={};return S(e).forEach(function(n){return t[n]=k(e,n)}),t}function f(e){return function(t){return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function p(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}}function d(e){!0!==A[e]&&(A[e]=!0,T("DEPRECATION: "+e))}t.d=l,t.c=c,n.d(t,"g",function(){return S}),t.f=s,t.e=f,t.a=p,n.d(t,"b",function(){return T}),t.h=d;var y,m,h,g,v,b,w=n(8),O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=Object.defineProperty,k=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,j=(y=function e(){o(this,e),r(this,"debounceTimeoutIds",m,this),r(this,"throttleTimeoutIds",h,this),r(this,"throttlePreviousTimestamps",g,this),r(this,"throttleTrailingArgs",v,this),r(this,"profileLastRan",b,this)},m=a(y.prototype,"debounceTimeoutIds",[w.a],{enumerable:!0,initializer:function(){return{}}}),h=a(y.prototype,"throttleTimeoutIds",[w.a],{enumerable:!0,initializer:function(){return{}}}),g=a(y.prototype,"throttlePreviousTimestamps",[w.a],{enumerable:!0,initializer:function(){return{}}}),v=a(y.prototype,"throttleTrailingArgs",[w.a],{enumerable:!0,initializer:function(){return null}}),b=a(y.prototype,"profileLastRan",[w.a],{enumerable:!0,initializer:function(){return null}}),y),P="function"==typeof Symbol?Symbol("__core_decorators__"):"__core_decorators__",S=x?function(e){return E(e).concat(x(e))}:E,T=function(){return"object"===("undefined"==typeof console?"undefined":O(console))&&console&&"function"==typeof console.warn?p(console.warn,console):function(){}}(),A={}},function(e,t){e.exports=React},function(e,t,n){e.exports=n(34)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.throttle=function(e,t){var n=null;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,o)},t)}},t.getScrollTop=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.getLink=function(e){return(""+e).length>1&&/^\/[^\/]/.test(""+e)?""+window.rootPath+e:e}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultLanguage:"en-us",rootPath:"",port:8090,"en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/goals.html"}],disclaimer:{title:"Disclaimer",content:"the disclaimer content"},documentation:{title:"Documentation",list:[{text:"Goals",link:"/en-us/docs/goals.html"},{text:"Contents",link:"/en-us/docs/contents.html"},{text:"Metrics",link:"/en-us/docs/metrics.html"}]},resources:{title:"Resources",list:[{text:"Blog",link:"/en-us/blog/index.html"},{text:"Community",link:"/en-us/community/index.html"}]},copyright:"Copyright © 2018 Alibaba    Contact:aimatrix@list.alibaba-inc.com"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/goals.html"}],disclaimer:{title:"免责声明",content:"免责声明的具体内容"},documentation:{title:"文档",list:[{text:"目标",link:"/zh-cn/docs/goals.html"},{text:"内容",link:"/zh-cn/docs/contents.html"},{text:"标准",link:"/zh-cn/docs/metrics.html"}]},resources:{title:"资源",list:[{text:"博客",link:"/zh-cn/blog/index.html"},{text:"社区",link:"/zh-cn/community/index.html"}]},copyright:"Copyright © 2018 Alibaba    Contact:aimatrix@list.alibaba-inc.com"}}},function(e,t,n){var r,o;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)a.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25);n.d(t,"override",function(){return r.a});var o=n(18);n.d(t,"deprecate",function(){return o.a}),n.d(t,"deprecated",function(){return o.a});var a=n(28);n.d(t,"suppressWarnings",function(){return a.a});var i=n(21);n.d(t,"memoize",function(){return i.a});var u=n(15);n.d(t,"autobind",function(){return u.a});var l=n(27);n.d(t,"readonly",function(){return l.a});var c=n(19);n.d(t,"enumerable",function(){return c.a});var s=n(24);n.d(t,"nonenumerable",function(){return s.a});var f=n(23);n.d(t,"nonconfigurable",function(){return f.a});var p=n(16);n.d(t,"debounce",function(){return p.a});var d=n(29);n.d(t,"throttle",function(){return d.a});var y=n(17);n.d(t,"decorate",function(){return y.a});var m=n(22);n.d(t,"mixin",function(){return m.a}),n.d(t,"mixins",function(){return m.a});var h=n(8);n.d(t,"lazyInitialize",function(){return h.a});var g=n(30);n.d(t,"time",function(){return g.a});var v=n(20);n.d(t,"extendDescriptor",function(){return v.a});var b=n(26);n.d(t,"profile",function(){return b.a});var w=n(14);n.d(t,"applyDecorators",function(){return w.a})},function(e,t,n){"use strict";function r(e,t,r){var o=r.configurable,u=r.enumerable,l=r.initializer,c=r.value;return{configurable:o,enumerable:u,get:function(){if(this!==e){var n=l?l.call(this):c;return i(this,t,{configurable:o,enumerable:u,writable:!0,value:n}),n}},set:n.i(a.e)(t)}}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.defineProperty},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),i=n(2),u=r(i),l=n(5),c=r(l),s=n(3);n(31);var f={logo:u.default.string,language:u.default.oneOf(["zh-cn","en-us"])},p=function(e){var t=e.language,n=c.default[t];return a.default.createElement("footer",{className:"footer-container"},a.default.createElement("div",{className:"footer-body"},e.logo?a.default.createElement("img",{src:(0,s.getLink)(e.logo)}):null,a.default.createElement("div",{className:"cols-container"},a.default.createElement("div",{className:"col col-12"},a.default.createElement("h3",null,n.disclaimer.title),a.default.createElement("p",null,n.disclaimer.content)),a.default.createElement("div",{className:"col col-6"},a.default.createElement("dl",null,a.default.createElement("dt",null,n.documentation.title),n.documentation.list.map(function(e,t){return a.default.createElement("dd",{key:t},a.default.createElement("a",{href:e.link,target:e.target||"_self"},e.text))}))),a.default.createElement("div",{className:"col col-6"},a.default.createElement("dl",null,a.default.createElement("dt",null,n.resources.title),n.resources.list.map(function(e,t){return a.default.createElement("dd",{key:t},a.default.createElement("a",{href:e.link,target:e.target||"_self"},e.text))})))),a.default.createElement("div",{className:"copyright"},a.default.createElement("span",null,n.copyright))))};p.propTypes=f,t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),p=n(2),d=r(p),y=n(6),m=r(y),h=n(7),g=n(5),v=r(g),b=n(3);n(32);var w=[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}],O=function(){},_={logo:d.default.string.isRequired,type:d.default.oneOf(["primary","normal"]),language:d.default.oneOf(["en-us","zh-cn"]),onLanguageChange:d.default.func},k={type:"primary",language:"en-us",onLanguageChange:O},E=(0,h.autobind)(l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={menuBodyVisible:!1,language:e.language},n}return u(t,e),c(t,[{key:"toggleMenu",value:function(){this.setState({menuBodyVisible:!this.state.menuBodyVisible})}},{key:"switchLang",value:function(){var e=void 0;e="zh-cn"===this.state.language?"en-us":"zh-cn",this.setState({language:e}),this.props.onLanguageChange(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.logo,r=e.onLanguageChange,a=e.currentKey,i=this.state,u=i.menuBodyVisible,l=i.language;return f.default.createElement("header",{className:(0,m.default)(o({"header-container":!0},"header-container-"+t,!0))},f.default.createElement("div",{className:"header-body"},f.default.createElement("a",{href:(0,b.getLink)("/"+l+"/index.html")},f.default.createElement("img",{className:"logo",src:(0,b.getLink)(n)})),r!==O?f.default.createElement("span",{className:(0,m.default)(o({"language-switch":!0},"language-switch-"+t,!0)),onClick:this.switchLang},w.find(function(e){return e.value===l}).text):null,f.default.createElement("div",{className:(0,m.default)({"header-menu":!0,"header-menu-open":u})},f.default.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?(0,b.getLink)("/img/system/menu_white.png"):(0,b.getLink)("/img/system/menu_gray.png")}),f.default.createElement("ul",null,v.default[l].pageMenu.map(function(e,n){var r;return f.default.createElement("li",{key:n,className:(0,m.default)((r={"menu-item":!0},o(r,"menu-item-"+t,!0),o(r,"menu-item-"+t+"-active",a===e.key),r))},f.default.createElement("a",{href:(0,b.getLink)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(f.default.Component))||l;E.propTypes=_,E.defaultProps=k,t.default=E},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(7),p=n(33),d=r(p),y=n(5),m=r(y),h=(0,f.autobind)(u=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"onLanguageChange",value:function(e){var t=window.location.pathname,n=void 0;n="zh-cn"===e?"en-us":"zh-cn";var r=t.replace(window.rootPath+"/"+n,window.rootPath+"/"+e);d.default.set("docsite_language",e,{expires:365,path:""}),window.location=r}},{key:"getLanguage",value:function(){var e=void 0;e=window.rootPath?window.location.pathname.split("/")[2]:window.location.pathname.split("/")[1];var t=this.props.lang||e||d.default.get("docsite_language")||m.default.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=m.default.defaultLanguage),t!==d.default.get("docsite_language")&&d.default.set("docsite_language",t,{expires:365,path:""}),t}}]),t}(s.default.Component))||u;t.default=h},,function(e,t,n){"use strict";function r(e,t){var n=e.prototype;for(var r in t)for(var i=t[r],u=0,l=i.length;u<l;u++){var c=i[u];o(n,r,c(n,r,a(n,r)))}return e}t.a=r;var o=Object.defineProperty,a=Object.getOwnPropertyDescriptor},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if("undefined"==typeof WeakMap)throw new Error("Using @autobind on "+t.name+"() requires WeakMap support due to its use of super."+t.name+"()\n      See https://github.com/jayphelps/core-decorators.js/issues/20");p||(p=new WeakMap),!1===p.has(e)&&p.set(e,new WeakMap);var r=p.get(e);return!1===r.has(t)&&r.set(t,n.i(c.a)(t,e)),r.get(t)}function a(e){for(var t=n.i(c.f)(e.prototype),r=n.i(c.g)(t),o=0,a=r.length;o<a;o++){var u=r[o],l=t[u];"function"==typeof l.value&&"constructor"!==u&&s(e.prototype,u,i(e.prototype,u,l))}}function i(e,t,r){var a=r.value,i=r.configurable,u=r.enumerable;if("function"!=typeof a)throw new SyntaxError("@autobind can only be used on functions, not: "+a);var l=e.constructor;return{configurable:i,enumerable:u,get:function(){if(this===e)return a;if(this.constructor!==l&&f(this).constructor===l)return a;if(this.constructor!==l&&t in this.constructor.prototype)return o(this,a);var r=n.i(c.a)(a,this);return s(this,t,{configurable:!0,writable:!0,enumerable:!1,value:r}),r},set:n.i(c.e)(t)}}function u(e){return 1===e.length?a.apply(void 0,r(e)):i.apply(void 0,r(e))}function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(){return u(arguments)}:u(t)}t.a=l;var c=n(0),s=Object.defineProperty,f=Object.getPrototypeOf,p=void 0},function(e,t,n){"use strict";function r(e,t,r,o){var c=u(o,2),s=c[0],f=void 0===s?l:s,p=c[1],d=void 0!==p&&p,y=r.value;if("function"!=typeof y)throw new SyntaxError("Only functions can be debounced");return i({},r,{value:function(){var e=this,r=n.i(a.c)(this),o=r.debounceTimeoutIds,i=o[t],u=d&&!i,l=arguments;clearTimeout(i),o[t]=setTimeout(function(){delete o[t],d||y.apply(e,l)},f),u&&y.apply(this,l)}})}function o(){n.i(a.h)("@debounce is deprecated and will be removed shortly. Use @debounce from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators");for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=300},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return Array.isArray(e)?e:Array.from(e)}function a(e,t,a,i){var c=o(i),s=c[0],f=c.slice(1),p=a.configurable,d=a.enumerable,y=a.writable,m=a.get,h=a.set,g=a.value,v=!!m;return{configurable:p,enumerable:d,get:function(){var e=v?m.call(this):g,n=s.call.apply(s,[this,e].concat(r(f)));if(v)return n;var o={configurable:p,enumerable:d};return o.value=n,o.writable=y,l(this,t,o),n},set:v?h:n.i(u.e)()}}function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.i(u.d)(a,t)}t.a=i;var u=n(0),l=Object.defineProperty},function(e,t,n){"use strict";function r(e,t,r,o){var c=u(o,2),s=c[0],f=void 0===s?l:s,p=c[1],d=void 0===p?{}:p;if("function"!=typeof r.value)throw new SyntaxError("Only functions can be marked as deprecated");var y=e.constructor.name+"#"+t;return d.url&&(f+="\n\n    See "+d.url+" for more details.\n\n"),i({},r,{value:function(){return n.i(a.b)("DEPRECATION "+y+": "+f),r.value.apply(this,arguments)}})}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l="This function will be removed in future versions."},function(e,t,n){"use strict";function r(e,t,n){return n.enumerable=!0,n}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0)},function(e,t,n){"use strict";function r(e,t,n){var r=u(e),o=l(r,t);return i({},o,{value:n.value,initializer:n.initializer,get:n.get||o.get,set:n.set||o.set})}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=Object.getPrototypeOf,l=Object.getOwnPropertyDescriptor},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t===Object(t)?t:e[t]||(e[t]={})}function a(e,t,n,r,o){var a=t.apply(e,n);return r[o]=a,a}function i(e){var t=void 0,n=void 0;return e.value?(t=e.value,n="value"):e.get?(t=e.get,n="get"):e.set&&(t=e.set,n="set"),{fn:t,wrapKey:n}}function u(e,t,n){var u=i(n),l=u.fn,c=u.wrapKey,f=new WeakMap,p=Object.create(null),d=Object.create(null),y=0;return s({},n,r({},c,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="0",i=0,u=t.length;i<u;i++){var c=t[i],s=o(d,c),m=f.get(s);void 0===m&&(m=++y,f.set(s,m)),r+=m}return p[r]||a(this,l,arguments,p,r)}))}function l(){n.i(c.h)("@memoize is deprecated and will be removed shortly. Use @memoize from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators");for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.i(c.d)(u,t)}t.a=l;var c=n(0),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";function r(e){return"[object Symbol]"===Object.prototype.toString.call(e)&&"object"===(void 0===e?"undefined":l(e))}function o(e,t){if(r(e)){do{if(t===Object.prototype)return void 0!==t[e];if(t.hasOwnProperty(e))return!0}while(t=s(t));return!1}return e in t}function a(e,t){if(!t.length)throw new SyntaxError("@mixin() class "+e.name+" requires at least one mixin as an argument");for(var r=0,a=t.length;r<a;r++)for(var i=n.i(u.f)(t[r]),l=n.i(u.g)(i),s=0,f=l.length;s<f;s++){var p=l[s];o(p,e.prototype)||c(e.prototype,p,i[p])}}function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.i(u.h)("@mixin is deprecated and will be removed shortly. Use @mixin from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators"),"function"==typeof t[0]?a(t[0],[]):function(e){return a(e,t)}}t.a=i;var u=n(0),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=Object.defineProperty,s=Object.getPrototypeOf},function(e,t,n){"use strict";function r(e,t,n){return n.configurable=!1,n}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0)},function(e,t,n){"use strict";function r(e,t,n){return n.enumerable=!1,n}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){return e.hasOwnProperty("value")?"data":e.hasOwnProperty("get")||e.hasOwnProperty("set")?"accessor":"data"}function a(e,t,n){n.assert(e.length===t.length)}function i(e,t,n){var r=d(e.value),o=d(t.value);if("undefined"===r&&"undefined"===o&&n.error("descriptor values are both undefined. (class properties are are not currently supported)'"),r!==o){("function"===o&&void 0===r||void 0!==r)&&n.error('value types do not match. {parent} is "'+r+'", {child} is "'+o+'"')}switch(o){case"function":a(e.value,t.value,n);break;default:n.error('Unexpected error. Please file a bug with: {parent} is "'+r+'", {child} is "'+o+'"')}}function u(e,t,n){var r="function"==typeof e.get,o="function"==typeof t.get,i="function"==typeof e.set,u="function"==typeof t.set;(r||o)&&(!r&&i&&n.error("{parent} is setter but {child} is getter"),!o&&u&&n.error("{parent} is getter but {child} is setter"),a(e.get,t.get,n)),(i||u)&&(!i&&r&&n.error("{parent} is getter but {child} is setter"),!u&&o&&n.error("{parent} is setter but {child} is getter"),a(e.set,t.set,n))}function l(e,t,n){var r=o(e),a=o(t);switch(r!==a&&n.error('descriptor types do not match. {parent} is "'+r+'", {child} is "'+a+'"'),a){case"data":i(e,t,n);break;case"accessor":u(e,t,n)}}function c(e,t){for(var n=0,r=g.length;n<r;n++){var o=g[n],a=o(t);if(a in e)return a}return null}function s(e,t,n){n.key=t;var r=Object.getPrototypeOf(e),o=Object.getOwnPropertyDescriptor(r,t),a=new h(r,e,o,n);if(void 0===o){var i=c(r,t),u=i?'\n\n  Did you mean "'+i+'"?':"";a.error("No descriptor matching {child} was found on the prototype chain."+u)}return l(o,n,a),n}function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.i(p.d)(s,t)}t.a=f;var p=n(0),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=/^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/,h=function(){function e(t,n,o,a){r(this,e),this.parentKlass=t,this.childKlass=n,this.parentDescriptor=o,this.childDescriptor=a}return y(e,[{key:"_getTopic",value:function(e){return void 0===e?null:"value"in e?e.value:"get"in e?e.get:"set"in e?e.set:void 0}},{key:"_extractTopicSignature",value:function(e){switch(void 0===e?"undefined":d(e)){case"function":return this._extractFunctionSignature(e);default:return this.key}}},{key:"_extractFunctionSignature",value:function(e){var t=this;return e.toString().replace(m,function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.key)+arguments[2]})}},{key:"key",get:function(){return this.childDescriptor.key}},{key:"parentNotation",get:function(){return this.parentKlass.constructor.name+"#"+this.parentPropertySignature}},{key:"childNotation",get:function(){return this.childKlass.constructor.name+"#"+this.childPropertySignature}},{key:"parentTopic",get:function(){return this._getTopic(this.parentDescriptor)}},{key:"childTopic",get:function(){return this._getTopic(this.childDescriptor)}},{key:"parentPropertySignature",get:function(){return this._extractTopicSignature(this.parentTopic)}},{key:"childPropertySignature",get:function(){return this._extractTopicSignature(this.childTopic)}}]),y(e,[{key:"assert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!0!==e&&this.error("{child} does not properly override {parent}"+t)}},{key:"error",value:function(e){var t=this;throw e=e.replace("{parent}",function(e){return t.parentNotation}).replace("{child}",function(e){return t.childNotation}),new SyntaxError(e)}}]),e}(),g=[function(e){return e.toLowerCase()},function(e){return e.toUpperCase()},function(e){return e+"s"},function(e){return e.slice(0,-1)},function(e){return e.slice(1,e.length)}]},function(e,t,n){"use strict";function r(e,t,r,c){var s=u(c,3),f=s[0],p=void 0===f?null:f,d=s[1],y=void 0!==d&&d,m=s[2],h=void 0===m?l:m;if(!o.__enabled)return o.__warned||(h.warn("console.profile is not supported. All @profile decorators are disabled."),o.__warned=!0),r;var g=r.value;if(null===p&&(p=e.constructor.name+"."+t),"function"!=typeof g)throw new SyntaxError("@profile can only be used on functions, not: "+g);return i({},r,{value:function(){var e=Date.now(),t=n.i(a.c)(this);(!0===y&&!t.profileLastRan||!1===y||"number"==typeof y&&e-t.profileLastRan>y||"function"==typeof y&&y.apply(this,arguments))&&(h.profile(p),t.profileLastRan=e);try{return g.apply(this,arguments)}finally{h.profileEnd(p)}}})}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=(console,{profile:console.profile?n.i(a.a)(console.profile,console):function(){},profileEnd:console.profileEnd?n.i(a.a)(console.profileEnd,console):function(){},warn:a.b});o.__enabled=!!console.profile,o.__warned=!1},function(e,t,n){"use strict";function r(e,t,n){return n.writable=!1,n}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0)},function(e,t,n){"use strict";function r(){}function o(e,t,n){if("object"===("undefined"==typeof console?"undefined":c(console))){var o=console.warn;console.warn=r;var a=t.apply(e,n);return console.warn=o,a}return t.apply(e,n)}function a(e,t,n){return l({},n,{value:function(){return o(this,n.value,arguments)}})}function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.i(u.d)(a,t)}t.a=i;var u=n(0),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},function(e,t,n){"use strict";function r(e,t,r,o){var c=u(o,2),s=c[0],f=void 0===s?l:s,p=c[1],d=void 0===p?{}:p,y=r.value;if("function"!=typeof y)throw new SyntaxError("Only functions can be throttled");return!1!==d.leading&&(d.leading=!0),!1!==d.trailing&&(d.trailing=!0),i({},r,{value:function(){var e=this,r=n.i(a.c)(this),o=r.throttleTimeoutIds,i=r.throttlePreviousTimestamps,u=o[t],l=i[t]||0,c=Date.now();d.trailing&&(r.throttleTrailingArgs=arguments),l||!1!==d.leading||(l=c);var s=f-(c-l);s<=0?(clearTimeout(u),delete o[t],i[t]=c,y.apply(this,arguments)):!u&&d.trailing&&(o[t]=setTimeout(function(){i[t]=!1===d.leading?0:Date.now(),delete o[t],y.apply(e,r.throttleTrailingArgs),r.throttleTrailingArgs=null},s))}})}function o(){n.i(a.h)("@throttle is deprecated and will be removed shortly. Use @throttle from lodash-decorators.\n\n  https://www.npmjs.com/package/lodash-decorators");for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=300},function(e,t,n){"use strict";function r(e,t,n,r){var o=u(r,2),a=o[0],l=void 0===a?null:a,f=o[1],p=void 0===f?c:f,d=n.value;if(null===l&&(l=e.constructor.name+"."+t),"function"!=typeof d)throw new SyntaxError("@time can only be used on functions, not: "+d);return i({},n,{value:function(){var e=l+"-"+s;s++,p.time(e);try{return d.apply(this,arguments)}finally{p.timeEnd(e)}}})}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(a.d)(r,t)}t.a=o;var a=n(0),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l={},c={time:console.time?console.time.bind(console):function(e){l[e]=new Date},timeEnd:console.timeEnd?console.timeEnd.bind(console):function(e){var t=new Date,n=t-l[e];delete l[e],console.log(e+": "+n+"ms")}},s=0},function(e,t){},function(e,t){},function(e,t,n){var r,o;!function(a){var i=!1;if(r=a,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o),i=!0,e.exports=a(),i=!0,!i){var u=window.Cookies,l=window.Cookies=a();l.noConflict=function(){return window.Cookies=u,l}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,o,a){var i;if("undefined"!=typeof document){if(arguments.length>1){if(a=e({path:"/"},r.defaults,a),"number"==typeof a.expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*a.expires),a.expires=u}a.expires=a.expires?a.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var l="";for(var c in a)a[c]&&(l+="; "+c,!0!==a[c]&&(l+="="+a[c]));return document.cookie=t+"="+o+l}t||(i={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var d=s[p].split("="),y=d.slice(1).join("=");this.json||'"'!==y.charAt(0)||(y=y.slice(1,-1));try{var m=d[0].replace(f,decodeURIComponent);if(y=n.read?n.read(y,m):n(y,m)||y.replace(f,decodeURIComponent),this.json)try{y=JSON.parse(y)}catch(e){}if(t===m){i=y;break}t||(i[m]=y)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t,n){"use strict";function r(){}var o=n(35);e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"zh-cn":{brand:{brandImg:"/img/ai_big_green.png",briefIntroduction:"让天下没有难测的AI加速器",buttons:[{text:"前往 Github",link:"https://github.com/alibaba/ai-matrix",type:"primary"},{text:"目标",link:"/zh-cn/docs/goals.html",type:"normal"},{text:"测评结果",link:"https://github.com/alibaba/ai-matrix/tree/master/results",type:"normal"},{text:"技术博客",link:"/zh-cn/blog/blog1.html",type:"normal"}]},users:{title:"参与组织",list:["/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png"]}},"en-us":{brand:{brandImg:"/img/ai_big_green.png",briefIntroduction:"To make it easy to benchmark AI accelerators",buttons:[{text:"Github",link:"https://github.com/alibaba/ai-matrix",type:"primary"},{text:"Goals",link:"/en-us/docs/goals.html",type:"normal"},{text:"Evaluation",link:"https://github.com/alibaba/ai-matrix/tree/master/results",type:"normal"},{text:"Blog",link:"/en-us/blog/blog1.html",type:"normal"}]},users:{title:"Supporting Organizations",list:["/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png","/img/alibaba-color2.png"]}}}},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=r(a),u=n(6),l=r(u),c=n(3);n(57);var s=function(e){return i.default.createElement("a",{className:(0,l.default)(o({button:!0},"button-"+e.type,!0)),target:e.target||"_self",href:(0,c.getLink)(e.link)},e.children)};t.default=s},,,function(e,t){},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=n(4),f=r(s),p=n(3),d=n(11),y=r(d),m=n(46),h=r(m),g=n(10),v=r(g),b=n(12),w=r(b),O=n(44),_=r(O);n(49);var k=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headerType:"primary"},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){(0,p.getScrollTop)()>66?e.setState({headerType:"normal"}):e.setState({headerType:"primary"})};t(),window.addEventListener("scroll",t)}},{key:"render",value:function(){var e=this.getLanguage(),t=_.default[e],n=this.state.headerType,r="primary"===n?(0,p.getLink)("/img/ai_small_white.png"):(0,p.getLink)("/img/ai_small_green.png");return c.default.createElement("div",{className:"home-page"},c.default.createElement("section",{className:"top-section"},c.default.createElement(y.default,{currentKey:"home",type:n,logo:r,language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement("div",{className:"animation animation1"}),c.default.createElement("div",{className:"animation animation2"}),c.default.createElement("div",{className:"animation animation3"}),c.default.createElement("div",{className:"animation animation4"}),c.default.createElement("div",{className:"animation animation5"}),c.default.createElement("div",{className:"animation animation6"}),c.default.createElement("div",{className:"vertical-middle"},c.default.createElement("div",{className:"product-logo"},c.default.createElement("img",{src:(0,p.getLink)(t.brand.brandImg)})),c.default.createElement("p",{className:"product-desc"},t.brand.briefIntroduction),c.default.createElement("div",{className:"button-area"},t.brand.buttons.map(function(e,t){return c.default.createElement(h.default,{key:t,type:e.type,link:e.link,target:e.target},e.text)})))),c.default.createElement("section",{className:"users-section"},c.default.createElement("h3",null,t.users.title),c.default.createElement("div",{className:"users"},t.users.list.map(function(e,t){return c.default.createElement("img",{src:(0,p.getLink)(e),key:t})}))),c.default.createElement(v.default,{language:e}))}}]),t}(w.default);document.getElementById("root")&&f.default.render(c.default.createElement(k,null),document.getElementById("root")),t.default=k},,function(e,t){}]);