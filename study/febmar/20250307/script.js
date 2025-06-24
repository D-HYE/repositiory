window.addEventListener("DOMContentLoaded",()=>{
    const navidata = {
        gnb : [
            {
                atext : "회사소개",
                href : "#none",
                target : "",
                d1 : [
                    {
                        atext : "회사소개",
                        href : "/company/introduce.php",
                        target : "", 
                    },
                    {
                        atext : "조직도",
                        href : "/company/organ.php",
                        target : "", 
                    },
                    {
                        atext : "오시는길",
                        href : "/company/way.php",
                        target : "", 
                    }
                ]                
            },
            {
                atext : "제품안내",
                href : "#none",
                target : "",
                d1 : [
                    {
                        atext : "브랜드",
                        href : "/product/brand.php",
                        target : "", 
                    },
                    {
                        atext : "OEM",
                        href : "/product/oem.php",
                        target : "", 
                    }
                ]
                
            },
            {
                atext : "제품안내",
                href : "#none",
                target : "",
                d1 : [
                    {
                        atext : "브랜드",
                        href : "/product/brand.php",
                        target : "", 
                    },
                    {
                        atext : "OEM",
                        href : "/product/oem.php",
                        target : "", 
                    }
                ]
                
            },            
            {
                atext : "제품안내",
                href : "#none",
                target : "",
                d1 : [
                    {
                        atext : "브랜드",
                        href : "/product/brand.php",
                        target : "", 
                    },
                    {
                        atext : "OEM",
                        href : "/product/oem.php",
                        target : "", 
                    }
                ]
                
            }
        ],
        util : [
            {
                atext : "유투브",
                href : "//youtube.com/",
                cls : "youtube"
            },
            {
                atext : "인스타",
                href : "//instargram.com/",
                cls : "instar"
            }
        ]        
    } // 추후 json 별도관리
    const idgnb = document.getElementById("gnb");   


    let navicont = "";

    for(i in navidata.gnb){
        navicont +=`<li class="position-relative">
                            <a href="${navidata.gnb[i].href}">${navidata.gnb[i].atext}</a><ul class="position-absolute">`
                for( x in navidata.gnb[i].d1 ){
                navicont +=`<ul>                        
                            <li>
                                <a href="${navidata.gnb[i].d1[x].href}">${navidata.gnb[i].d1[x].atext}</a>
                            </li>
                            </ul>`
                }
        navicont +=`</ul></li>`
    }
    //유틸 누적
    for( j in navidata.util){
        navicont +=`<li class="${navidata.util[j].cls}">
                        <a href="${navidata.util[j].href}">${navidata.util[j].atext}</a>
                    </li>`  
    } 


    idgnb.innerHTML = navicont;
})