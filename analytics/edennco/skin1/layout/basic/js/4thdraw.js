// var checkInterval = setInterval(function () {

//   if (typeof jQuery !== 'undefined') {
   
//       $(function () {
          
//           const htop = $("#header").outerHeight(); // 패딩 및 테두리를 포함한 높이 계산
//           const $mainVideo = $(".main_video");

//           if ($mainVideo.length > 0) {
          
//               $mainVideo.css("marginTop", htop);

//               // Interval 중지
//               clearInterval(checkInterval);
//           }
//       });
//   } else {
//       console.log("jQuery가 아직 로드되지 않았습니다.");
//   }
// }, 100);

var checkInterval = setInterval(function () {
  if (document.readyState === "complete") {
      var header = document.getElementById("header");
      var mainVideo = document.querySelector(".main_video");
      var webpublic = document.querySelector(".webpublic-banner-area");

      if (header ) {
          // #header 높이 계산 (테두리 및 패딩 포함)
          var htop = header.offsetHeight;

          if(mainVideo){
          // .main_video의 margin-top 설정
            mainVideo.style.marginTop = "-" + ( htop + 1 ) + "px";
            // body 태그에 mainpage 클래스 추가
            document.body.classList.add("h_transmode");
          }
          if(webpublic){
            webpublic.style.marginTop = "-" + ( htop + 1 ) + "px";
            

            // body 태그에 mainpage 클래스 추가
            document.body.classList.add("h_transmode");
          }

          

          // Interval 중지
          clearInterval(checkInterval);
      }
  } else {
      console.log("DOM이 아직 준비되지 않았습니다.");
  }
}, 100);



