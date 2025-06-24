window.addEventListener('DOMContentLoaded', () => {


    // const clickmsg = (c) => {
    //     document.querySelector('#content').innerHTML += `<p>${c}</p>`;
    //     //body 태그에 넣으면 1번 씩 밖에 안 넣어줌
    // };

    // document.querySelector(".btn").addEventListener('click', ()=>{
    //         for(x = 0; x < 10; x++){
    //             clickmsg(`밥밥히어로는 대체 어디에 있는 거야 ${x}`);
    //         }
    // });

    const galleryPosts = [ 

        { 
            title: "아름다운 해변",
        
            imageUrl: "https://example.com/images/beach.jpg", 
            
            author: "홍길동", 
            
            date: "2025-03-10" }, 
            
        { 
        
            title: "도시 야경", 
            
            imageUrl: "https://example.com/images/city-night.jpg", 
            
            author: "김철수", 
            
            date: "2025-03-09" }, 
        
        {
            
            title: "산속의 오두막",
            
            imageUrl: "https://example.com/images/cabin.jpg",
            
            author: "이영희", 
            
            date: "2025-03-08"
        }
    ]

    const ulBox = document.querySelector("#content");
    let list = "";

    galleryPosts.forEach((v, i) => {
        list += `
            <li>
                <h3>${i}</h3>
                <h2 class="title">${v.title}</h2>
                <img src=${v.imageUrl}>
                <p>${v.author}</p>
                <p>${v.date}</p>
            </li>
        `;
    });

    ulBox.innerHTML += list 
});
