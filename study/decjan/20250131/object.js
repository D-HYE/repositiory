const mydb1 = {
    myName : "박다혜",
    myHobby : ["독서", "베이킹", "그림"]
}
const mydb2 = {
    myName : "박다혜",
    myHobby : [
        {
            취미: "독서",
            특징: "읽는 거 졸라 느림"
        },
        {
            취미: "베이킹",
            특징: "요즘 잘 안 함"
        },
        {
            취미: "그림",
            특징: "의외로 요즘 자주 함"
        },
    ]
}

console.log(mydb2.myHobby[1].취미); //베이킹