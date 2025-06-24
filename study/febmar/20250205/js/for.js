let gugu = 2;

for(x=2;x<10;x++){
    //console.log(`${x}단 시작`);
    for(i=2;i<10;i++){
        //console.log(`${gugu} X ${i} = ${gugu*i}`);
    }
}


window.addEventListener("DOMContentLoaded", function(){
    const mynavi = [
        {
            d1text : "예약하기",
            d1href : "reservation.html",
            d1cls : "res",
            d2navi: []
                
        },
        {
            d1text : "오직여기 뭐?",
            d1href : "promotion.html",
            d1cls : "only",
            d2navi: [
                {
                    d2text: "후냐냥",
                    d2href: "abceimjl.html",
                    d2cls: "adafdhdk",
                }
            ]
        },
        {
            d1text : "프로모션",
            d1href : "project.html",
            d1cls : "",
            d2navi: []
        },
        {
            d1text : "브랜드",
            d1href : "brand.html",
            d1cls : "",
            d2navi: [
                {
                    d2text: "후냐냥",
                    d2href: "abceimjl.html",
                    d2cls: "adafdhdk",
                },
                {
                    d2text: "후냐냐냥",
                    d2href: "abceimjl.html",
                    d2cls: "adafdhdk",
                },
                {
                    d2text: "후냐ㄹㅇㄹㄹ냥",
                    d2href: "abceimjl.html",
                    d2cls: "adafdhdk",
                }
            ]
        },
        {
            d1text : "고객센터",
            d1href : "brand.html",
            d1cls : "",
            d2navi: [
                {
                    d2text: "후냐냥",
                    d2href: "abceimjl.html",
                    d2cls: "adafdhdk",
                }
            ]
        }
    
    ]
    
    const targetul = document.querySelector("#gnb");
    let ullist = "";
    
    for(x of mynavi){
        ullist += `
            <li><a href="${x.d1href}">${x.d1text}</a>
        `
        if(x.d2navi.length > 0){
            ullist += `<ul>`
            for (i of x.d2navi){
                ullist += `<li><a href="${i.d2href}">${i.d2text}</a></li>`
            }
            ullist += `</ul>`
        }
        ullist += `</li>`
    }
    
    targetul.innerHTML = ullist

})

