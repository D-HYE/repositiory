let count = 0;

// setInterval(()=>{
//     console.log("1 초마다 증가 할 거지롱", ++count); // 전치연산을 해야 1부터 시작함
// }, 1000);

// setInterval(()=>{
    
//     console.log("0.5초마다 증가 할 거지롱", count); 
//     count += 3 // 후치연산

// }, 5000);

setInterval(()=>{
    
    console.log("5초마다 3씩 증가 할 거지롱", count);

    if(count < 15 ){
        count += 3;
    }else{
        count = 0;
    };

}, 500);