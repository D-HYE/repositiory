window.addEventListener("DOMContentLoaded", () => {
    // 호출한 존재가 중요하면 function 중요하지 않으면 arrow

    const dan = document?.querySelector("#dan");
    const danLi = document?.querySelector("#danlist");
    const ggdResult = document?.querySelector("#result");
    const ggdBtn = document?.querySelector("#gugudan button");
    // ?의 의미: document가 있으면 셀렉해~ 


    function getVal (input){
        return parseInt(input.value) || 0;
    };

    function handleBtnClick(){
        const danVal = getVal(dan);
        const danLiVal = getVal(danLi);
        alert(danVal*danLiVal)

    }

    // 함수는 실행하는 함수와 실행 결과를 내보내기 위한 함수로 나뉨
    // 실행 했을 때 값 발생시 내가 원하는 변수명 혹은 여러 개의 변수에 저장할 수 있음.

    // dan.addEventListener("change", () => alert(getVal(dan)));
    // danLi.addEventListener("change", () => alert(getVal(dan)));
    ggdBtn.addEventListener("click", handleBtnClick);
    // 괄호가 없는 건 참조용 handleBtnClick 안에 return이 없으므로 아무런 값도 나올 수 없다.
});