const mynm = "다혜";

const myfun = {
    mynm: "나는 상수변수",
    log: function(){
        alert("나는 브라우저에 이미 정의되어있는 내장객체함수예요.")
    }
}

// myfun.log();

const cat = {
    종류: ['메인쿤', '먼치킨', '노르웨이숲'],
    무늬: ['치즈', '턱시도', '고등어'],
    거주지: ['집냥이', '길냥이', '산냥이']
}

const trt = {
    member: [
        {
            nm: "신은경",
            bias: "태민",
            position: "기획팀장"
        },
        {
            nm: "김효정",
            bias: "DKZ",
            position: "서브 퍼블리셔"
        },
        {
            nm: "박다혜",
            bias: "SvT",
            position: "메인 퍼블리셔"
            
        },
        {
            nm: "정유진",
            bias: "배드바츠마루",
            position: "메인 디자이너"
        },
    ]
}

const teamproject = {
    teamnm: "trip:ter",
    member: [
        {
            nm: "신은경",
            bias: "태민",
            position: "기획팀장"
        },
        {
            nm: "김효정",
            bias: "DKZ",
            position: "서브 퍼블리셔"
        },
        {
            nm: "박다혜",
            bias: "SvT",
            position: "메인 퍼블리셔"
            
        },
        {
            nm: "정유진",
            bias: "배드바츠마루",
            position: "메인 디자이너"
        },
    ]
}

const trtnavi = [
   {
    d1txt: "계획짜기",
    d1href: "#none",
   },
   {
    d1txt: "트립톡",
    d1href: "#none",
   },
   {
    d1txt: "기획전",
    d1href: "#none",
   },
]

const mytarget = document.querySelector("#gnb");

console.log(trtnavi.length);
for(i=0;i<trtnavi.length;i++){
    
    mytarget.innerHTML += `<li><a href="${trtnavi[i].d1href}">${trtnavi[i].d1txt}</a></li>`

}
