window.addEventListener("DOMContentLoaded",()=>{
    const faq = [
        {
            dt : "이전 전공과 다르게 프론트앤드 훈련을 받으셨는데...",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "협업을 위해 가장 필요한 것은 무엇인가요?",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "제품을 옷에 붙인 채 세탁했을 경우에는 어떻게 해야 하나요?",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        },
        {
            dt : "제품을 옷에 붙인 채 세탁했을 경우에는 어떻게 해야 하나요?",
            dd : "제품의 부직포는 물에 녹지 않는 재질이지만 만일 찢어지거나 가루가 빠져나올 경우에는 | 의류에 철이나 녹 얼룩이 생길 수 있습니다. | 철 또는 녹 얼룩은 일반 세탁으로는 제거하기가 쉽지 않으므로 | 표백제를 사용하여 제거하시기 바랍니다. 또한 세탁기에 가루가 남아있을 경우, 세탁기가 마른 후 진공청소기로 깨끗하게 청소하시기 바랍니다."        
        }
    ]


    let faqtag = ""

    // for(let i = 0; i < faq.length; i++){

    // };

    //for(i in faq){

    //};

    for(i of faq){
        faqtag += `<dt><strong>${i["dt"]}</strong></dt>
        <dd>${i.dd}</dd>`
    };
    const faqdom = document.querySelector("#faq dl");
    faqdom.innerHTML = faqtag;

    const faqLi = document.querySelectorAll("#faq dt");
    let count = 0;

    setInterval(()=>{
        count++;
        count %= faq.length;
        
        faqLi.forEach(e =>{e.classList.remove("active")});
        faqLi[count].classList.add("active")
    
    }, 3000) 
    
    faqLi.forEach(x => {
        x.addEventListener("click", function(){
            faqLi.forEach(e =>{e.classList.remove("active")});
            x.classList.toggle("active");
        })
    })
    

    

})

