montageDefine("33facd8","lib/Stream",{dependencies:["./WritableStream.js","util","../"],factory:function(t,e,o){function i(t){r.call(this,new n(this),t)}function n(t){this.scope=t}o.exports=i;var r=t("./WritableStream.js");t("util").inherits(i,r),i.prototype.readable=!0;var s=t("../").EVENTS;Object.keys(s).forEach(function(t){if(0===s[t])n.prototype["on"+t]=function(){this.scope.emit(t)};else if(1===s[t])n.prototype["on"+t]=function(e){this.scope.emit(t,e)};else{if(2!==s[t])throw Error("wrong number of arguments!");n.prototype["on"+t]=function(e,o){this.scope.emit(t,e,o)}}})}});