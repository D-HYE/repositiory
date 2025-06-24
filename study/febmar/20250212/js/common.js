window.addEventListener("DOMContentLoaded", function(){
    // const hambuger = this.document.getElementById("allMenu");
    // hambuger.addEventListener("click", function(){
    //     alert("반품할까");
    // });

    // const btn = document.querySelectorAll('#btn button');
    // const content = document.getElementsByClassName('content');
    // 배열형 데이터! 배열형 데이터 !== 배열 데이터
    // const point = ['30cm 정도', '원목일 것', '너무 비싸지 않을 것'];

    // btn.forEach(function(item, idx){

    //     item.addEventListener('click', function(){
    //         content[idx].innerHTML += point[idx];
    //     });

    // });

    // document.getElementById('target').innerHTML = document.getElementById('btn').innerHTML

    const nav = this.document.getElementById("nav");
    //const targetLi = this.document.querySelector(".d1li1");
    const navLi = this.document.querySelectorAll(".d1li");

    //targetLi.classList.add('yes')
    //targetLi.classList.remove('d1li1')
    //targetLi.classList = ('d1li yes');
    //targetLi.classList += (' ohyeah'); //+=로 넣을 때는 띄어쓰기 할 것
    const navA = navLi[0].querySelector('a')

    navLi.forEach((item, idx)=>{
        item.classList.add(`d1li${idx}`);
        if (idx == 0){
            item.querySelector('a').classList = "num1" // 어떠한 분기점 내 기준으로 판단 가능, 하위 태그 가능
            // item.getElementsByTagName('a').classList = "num1" // 기준이 뭐랑 붙든 document라서 안 됨!
        }
    })
    navA.classList += " num2"
});