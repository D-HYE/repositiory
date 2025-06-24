import gnb from './navi';

//console.log(gnb, typeof gnb);

// const navinm = Object.keys(gnb);
// //Object.keys(gnb); 키값을 받아오는 것

// console.log(navinm, "배열이야?" + Array.isArray(navinm));
// // isArray(navinm) 배열인지 묻는 건가 보군

// const navivalue = Object.values(gnb);
// const foundValue = navivalue.find((value) => value === "/");
// console.log(foundValue);



const navinm : string[] = []; // 값을 문자열만 받겠다.
const navivl: any[] = []; // 값을 아무거나 받겠다.\

for (const key in gnb) {
    // index를 받는다.
    if (Object.prototype.hasOwnProperty.call(gnb, key)) {
        navinm.push(key);
        navivl.push(gnb[key]);
    }   
}
//console.log(navinm, "배열이야? " + Array.isArray(navinm));

let foundValue: any = null;
for (const value of navivl) {
    // value를 받는다.
    if (value === "/") {
        foundValue =  navinm[navivl.indexOf(value)];
        break;
    }
}
console.log(foundValue);



//챗의 답변
let foundKey: string | null = null;
for (const key in gnb) {
    if (Object.prototype.hasOwnProperty.call(gnb, key)) {
        if (gnb[key] === "/") {
            foundKey = key;
            break;
        }
    }
}
//console.log(foundKey);