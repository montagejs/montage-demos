montageDefine("7619811","weak-map",{dependencies:[],factory:function(e,t,n){!function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,p.length)==p&&"___"===e.substr(e.length-3))}function r(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[b];if(t&&t.key===e)return t;if(l(e)){t={key:e};try{return _(e,b,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}catch(n){return}}}function o(e){return e.prototype=null,Object.freeze(e)}function a(){O||"undefined"==typeof console||(O=!0,console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))}if("undefined"==typeof ses||!ses.ok||ses.ok()){"undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e);var i=!1;if("function"==typeof WeakMap){var u=WeakMap;if("undefined"!=typeof navigator&&/Firefox/.test(navigator.userAgent));else{var f=new u,c=Object.freeze({});if(f.set(c,1),1===f.get(c))return void(n.exports=WeakMap);i=!0}}var s=(Object.prototype.hasOwnProperty,Object.getOwnPropertyNames),_=Object.defineProperty,l=Object.isExtensible,p="weakmap:",b=p+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var v=new ArrayBuffer(25),y=new Uint8Array(v);crypto.getRandomValues(y),b=p+"rand:"+Array.prototype.map.call(y,function(e){return(e%36).toString(36)}).join("")+"___"}if(_(Object,"getOwnPropertyNames",{value:function(e){return s(e).filter(t)}}),"getPropertyNames"in Object){var d=Object.getPropertyNames;_(Object,"getPropertyNames",{value:function(e){return d(e).filter(t)}})}!function(){var e=Object.freeze;_(Object,"freeze",{value:function(t){return r(t),e(t)}});var t=Object.seal;_(Object,"seal",{value:function(e){return r(e),t(e)}});var n=Object.preventExtensions;_(Object,"preventExtensions",{value:function(e){return r(e),n(e)}})}();var O=!1,g=0,h=function(){function e(e,t){var n,o=r(e);return o?c in o?o[c]:t:(n=u.indexOf(e),n>=0?f[n]:t)}function t(e){var t=r(e);return t?c in t:u.indexOf(e)>=0}function n(e,t){var n,o=r(e);return o?o[c]=t:(n=u.indexOf(e),n>=0?f[n]=t:(n=u.length,f[n]=t,u[n]=e)),this}function i(e){var t,n,o=r(e);return o?c in o&&delete o[c]:(t=u.indexOf(e),!(t<0)&&(n=u.length-1,u[t]=void 0,f[t]=f[n],u[t]=u[n],u.length=n,f.length=n,!0))}this instanceof h||a();var u=[],f=[],c=g++;return Object.create(h.prototype,{get___:{value:o(e)},has___:{value:o(t)},set___:{value:o(n)},delete___:{value:o(i)}})};h.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){return this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof u?!function(){function t(){function t(e,t){return s?c.has(e)?c.get(e):s.get___(e,t):c.get(e,t)}function n(e){return c.has(e)||!!s&&s.has___(e)}function r(e){var t=!!c["delete"](e);return s?s.delete___(e)||t:t}this instanceof h||a();var f,c=new u,s=void 0,_=!1;return f=i?function(e,t){return c.set(e,t),c.has(e)||(s||(s=new h),s.set(e,t)),this}:function(e,t){if(_)try{c.set(e,t)}catch(n){s||(s=new h),s.set___(e,t)}else c.set(e,t);return this},Object.create(h.prototype,{get___:{value:o(t)},has___:{value:o(n)},set___:{value:o(f)},delete___:{value:o(r)},permitHostObjects___:{value:o(function(t){if(t!==e)throw new Error("bogus call to permitHostObjects___");_=!0})}})}i&&"undefined"!=typeof Proxy&&(Proxy=void 0),t.prototype=h.prototype,n.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),n.exports=h)}}()}});