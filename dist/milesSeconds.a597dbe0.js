parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Msh3":[function(require,module,exports) {
var n,e={hours:0,minuts:0,seconds:0,mileseconds:0},t=document.getElementById("hours"),s=document.getElementById("minuts"),i=document.getElementById("seconds"),o=document.getElementById("mileseconds"),c=document.getElementById("btn"),d=document.getElementById("btn-clean"),m=!1;function r(){var t=!1,s=!1;m||(n=setInterval(function(){99==e.mileseconds&&(59==e.seconds&&(59==e.minuts&&(e.minuts=0,e.hours++,s=!0),s||e.minuts++,s=!1,e.seconds=0,t=!0),e.mileseconds=0,t||e.seconds++,t=!1),e.mileseconds++,S()},10)),m=!m}function u(){clearTimeout(n),m=!m}function l(){c.innerText=m?"Stop":"Start"}function g(){u(),m=!1,e.hours=0,e.minuts=0,e.seconds=0,e.mileseconds=0,S()}function S(){e.hours<10?t.innerText="0"+String(e.hours):t.innerText=String(e.hours),e.minuts<10?s.innerText="0"+String(e.minuts):s.innerText=String(e.minuts),e.seconds<10?i.innerText="0"+String(e.seconds):i.innerText=String(e.seconds),e.mileseconds<10?o.innerText="0"+String(e.mileseconds):o.innerText=String(e.mileseconds)}c.addEventListener("click",function(){m?u():r(),l()}),d.addEventListener("click",function(){g()});
},{}]},{},["Msh3"], null)
//# sourceMappingURL=/milesSeconds.a597dbe0.js.map