parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J01V":[function(require,module,exports) {
var e=document.querySelector("h2#clock");function t(){console.log("Hello")}function a(){var t=new Date,a=(new Date).getFullYear(),o=new Date(a,11,25).getTime()-t.getTime(),n=Math.floor(o/864e5),r=String(Math.floor(o%864e5/36e5)).padStart(2,"0"),c=String(Math.floor(o%36e5/6e4)).padStart(2,"0"),l=String(Math.floor(o%6e4/1e3)).padStart(2,"0");e.innerText="".concat(n,"d ").concat(r,"h ").concat(c,"m ").concat(l,"s")}a(),setInterval(a,1e3);
},{}]},{},["J01V"], null)
//# sourceMappingURL=/csb-w8gg3/clock.5aa3c13b.js.map