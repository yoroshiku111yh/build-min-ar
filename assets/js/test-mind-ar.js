(self.webpackChunkwebpack_twig=self.webpackChunkwebpack_twig||[]).push([[450],{238:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(a)?a:String(a)),i)}var o,a}n.d(t,{Z:function(){return o}});var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isMobile=navigator.userAgent.mobile,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:{min:1280},height:{min:960}}});var e=document.querySelector("a-scene");this.testglsl(),e.addEventListener("arReady",(function(e){var t=document.querySelector("video"),n=document.querySelector("a-scene");t.style.transform="scaleX(-1)",n.style.transform="scaleX(-1)"}))}},{key:"testglsl",value:function(){var e=document.querySelector("#test-vertex").innerHTML,t=document.querySelector("#test-fragment").innerHTML;AFRAME.registerShader("grid-glitch",{schema:{timeMsec:{type:"time",is:"uniform"},timeHold:{type:"float",is:"uniform"},bg1:{type:"map",is:"uniform"},bg2:{type:"map",is:"uniform"}},vertexShader:e,fragmentShader:t})}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},206:function(e,t,n){document.addEventListener("DOMContentLoaded",(function(e){new(n(238).Z)}))}},function(e){var t;t=206,e(e.s=t)}]);