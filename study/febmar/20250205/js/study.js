const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html",
        d1cls : "res"
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html",
        d1cls : "only"
    },
    {
        d1text : "프로모션",
        d1href : "project.html",
        d1cls : ""
    },
    {
        d1text : "브랜드",
        d1href : "brand.html",
        d1cls : ""
    },
    {
        d1text : "고객센터",
        d1href : "brand.html",
        d1cls : ""
    }

]

//document.body.innerHTML = "";
//document.querySelectorAll("a")[0] // 이것도 순서를 선택할 수 있는 거였군, 얘는 못 읽을 때가 있어
//document.querySelectorAll("a").item(0) // 이건 봤어, 얘가 더 무겁

// const targetul = document.querySelector("#gnb");
// let ullinst = "";
// for(x = 0; x < mynavi.length; x++){
//     ullinst += `<li class="${mynavi[x].d1cls}"><a href="${mynavi[x].d1href}">${mynavi[x].d1text}</a></li>`
// }
// targetul.innerHTML = ullinst


// const targetsect = document.querySelectorAll("section");

// targetsect.forEach((sect, i) => {
//     sect.innerHTML = `<h2>${mynavi[i].d1text}</h2>`
// });
//document<< 얘는 html에서 쓰이는 애를 부른다고 지랄해서 터미널에서는 에러 뜨는 듯


const id = "nunui636"
let pw = "ekgp5928"
//console.log(`아이디: ${id} 이고 비밀번호: ${pw}입니다.`);

const 개븐틴 = {
    개븐틴95: ['승철', '정한', '지수'],
    개븐틴96: ['준휘', '순영', '원우', '지훈'],
    개븐틴97: ['명호', '민규', '석민'],
    개븐틴98: ['승관', '한솔'],
    개븐틴99: ['찬']
}

for( x in 개븐틴["개븐틴98"]){ //index 줌
    console.log(`forin문은 index에 접근한다. ${x} 출력`); 
}
for( x of 개븐틴["개븐틴98"]){ //value 줌
    console.log(`forof문은 value에 접근한다. ${x} 출력`)
}

let count = 2;

setInterval(function(){
    count++;
    console.log(count);
}, 1000)

window.addEventListener("DOMContentLoaded", function(){
    document.body.innerHTML = `
    <h2> 1초마다 숫자가 바뀌게 해줘</h>
    `;
    document.body.innerHTML += `
    <div>${count}</div>
    `
    document.body.classList += `dim${count}`
})
