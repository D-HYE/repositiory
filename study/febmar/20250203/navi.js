const myNavi = {
  menu: [
    {
      id: 1,
      name: "홈",
      link: "/home"
    },
    {
      id: 2,
      name: "소개",
      link: "/about"
    },
    {
      id: 3,
      name: "서비스",
      link: "/services"
    },
    {
      id: 4,
      name: "포트폴리오",
      link: "/portfolio"
    },
    {
      id: 5,
      name: "문의하기",
      link: "/contact"
    }
  ]
}

//console.log(myNavi);

const myName = "다혜";
const myPet = "돌돌이";

const myData = {
  myName: "다혜",
  myPet: "똘똘이"
}

//console.log(myPet, myData.myPet); 돌돌이와 똘똘이

//console.log(`${myNavi.menu[0].name}을 누르면 ${myNavi.menu[0].link}로 갑니다.`);
//console.log(`${myNavi.menu[1].name}를 누르면 ${myNavi.menu[1].link}로 가버리네`);


const naviSmpl = [
  {
    naviNm: "네이버",
    naviHref: "http://www.naver.com"
  },
  {
    naviNm: "다음",
    naviHref: "http://www.daum.net"
  },
  {
    naviNm: "구글",
    naviHref: "http://www.google.com"
  },
  {
    naviNm: "야후",
    naviHref: "라는 게 있었단다"
  },
  {
    naviNm: "파란",
    naviHref: "이라는 게 있었단다"
  },
]

//console.log(`<a href="${naviSmpl[0].naviHref}">${naviSmpl[0].naviNm}</a>`);

let naviTag = "";

for(i=0;i<naviSmpl.length;i++){ 
  naviTag += `<li class="test"><a href="${naviSmpl[i].naviHref}">
              ${naviSmpl[i].naviNm}
              </a></li>`;
}

document.getElementById("gnb").innerHTML = naviTag;


//let ulGnb = document.getElementById("gnb")
//let ulGnb = document.querySelector("#gnb")

//ulGnb.innerHTML = "<li class='test'>+=를 안 하면 하나만 나와</li>";
//ulGnb.innerHTML += "<li class='test'>왜?</li>";
//ulGnb.innerHTML += "<li class='test'>=는 지우고 다시 쓰니까</li>";

let naviTag2 = "<li>이렇게</li><li>한번에도 씀</li><li>차이를 느껴라</li>"

//ulGnb.innerHTML += naviTag2


let count = 0;
for(x=2; x<10; x+=2){
  //count += x; = 44
  count++ //
}
console.log(count);