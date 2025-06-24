// let message: string = "Hello, TypeScript!";
// console.log(message);


mySchedule1("리액트 공부", "쿠우쿠우");

function mySchedule1(today: string, tomorrow: string):void{
    console.log(`오늘은 ${today}을/를 합니다. + 내일은 ${tomorrow}을/를 갑니다.`);
}


const mySchedule2 = (today: string, tomorrow: string): void => {
    console.log(`오늘은 ${today}을/를 합니다. + 내일은 ${tomorrow}을/를 갑니다.`);
}
mySchedule2("리액트 공부", "쿠우쿠우");
// function 함수는 뭐더라 전역함수? 라서 위치 상관 없는데
// arrow 함수는 블록 스코프라서 위치 상관 있음이래 블록 스코프가 뭐지 무튼 오브젝트로도 여겨짐



// interface 사용하기
interface item {
    x: string;
    y: string;
    count?: number;
}

const result = ( {x, y, count = 0}: item): void => {
    const ifCase = count !== undefined ? count + "개" : null;
    console.log(`${x}은 ${y}를 ${ifCase} 사가야 합니다.`);
};



function gugudan (start: number, end: number): void {
    for (let i = start; i < end; i++) {
        for (let j = 2; j < 10; j++) {
            console.log(`${i} * ${j}= ${i * j}\t`);
        }
        console.log('-----------------');
    }
}

gugudan(2, 5);