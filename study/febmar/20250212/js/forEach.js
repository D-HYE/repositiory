const nav = [
    "회사소개",
    "제품소개",
    "뭐시기"
]
const navObj = [
    {
        nm: "회사소개",
        idx: 0
    },
    {
        nm: "제품소개",
        idx: 1
    },
]
//key에 접근하는 아이

//console.log(navObj[0].nm);

const myData = {
    nm: "다혜",
    action: function(){
        console.log('js는 너무 어려워~');
    }
}

//myData.action();

nav.forEach((v, i)=>{
    console.log(`${i+1}의 자리에는 ${v}가 저장되어 있습니다`);
})