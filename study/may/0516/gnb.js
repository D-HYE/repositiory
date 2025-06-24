"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navi_1 = require("./navi");
//console.log(gnb, typeof gnb);
// const navinm = Object.keys(gnb);
// //Object.keys(gnb); 키값을 받아오는 것
// console.log(navinm, "배열이야?" + Array.isArray(navinm));
// // isArray(navinm) 배열인지 묻는 건가 보군
// const navivalue = Object.values(gnb);
// const foundValue = navivalue.find((value) => value === "/");
// console.log(foundValue);
var navinm = []; // 값을 문자열만 받겠다.
var navivl = []; // 값을 아무거나 받겠다.\
for (var key in navi_1.default) {
    // index를 받는다.
    if (Object.prototype.hasOwnProperty.call(navi_1.default, key)) {
        navinm.push(key);
        navivl.push(navi_1.default[key]);
    }
}
//console.log(navinm, "배열이야? " + Array.isArray(navinm));
var foundValue = null;
for (var _i = 0, navivl_1 = navivl; _i < navivl_1.length; _i++) {
    var value = navivl_1[_i];
    // value를 받는다.
    if (value === "/") {
        foundValue = navinm[navivl.indexOf(value)];
        break;
    }
}
console.log(foundValue);
//챗의 답변
var foundKey = null;
for (var key in navi_1.default) {
    if (Object.prototype.hasOwnProperty.call(navi_1.default, key)) {
        if (navi_1.default[key] === "/") {
            foundKey = key;
            break;
        }
    }
}
//console.log(foundKey);
