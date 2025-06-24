$(document).ready(function () {
    var methods = {
        aCategory: [],
        aSubCategory: {},

        get: function () {
            $.ajax({
                url: '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function (aData) {
                    if (!aData) return;

                    // 데이터 매핑
                    for (var i = 0; i < aData.length; i++) {
                        var sParentCateNo = aData[i].parent_cate_no;

                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }
                        methods.aSubCategory[sParentCateNo].push(aData[i]);
                    }

                    // 모든 소메뉴 생성
                    methods.createSubMenus();
                },
            });
        },

        createSubMenus: function () {
            // 대메뉴 DOM에서 각 소메뉴 컨테이너에 삽입
            $('#header .xans-layout-category li').each(function () {
                var $this = $(this);
                var iCateNo = Number(methods.getParam($this.find('a').attr('href'), 'cate_no'));

                if (!iCateNo) {
                    iCateNo = Number(methods.getParamSeo($this.find('a').attr('href')));
                }

                if (iCateNo && methods.aSubCategory[iCateNo]) {
                    var $subMenu = $('<ul>').addClass('sub-category d_gnb');
                    methods.aSubCategory[iCateNo].forEach(function (item) {
                        var $subLi = $('<li>').addClass('sub-item');
                        var $subLink = $('<a>')
                            .attr('href', `/${item.design_page_url}${item.param}`)
                            .text(item.name);
                        $subLi.append($subLink);
                        $subMenu.append($subLi);
                    });

                    $this.append($subMenu);
                }
            });
        },

        getParam: function (sUrl, sKey) {
            var aUrl = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam = {};

            if (sQueryString) {
                var aFields = sQueryString.split('&');
                var aField = [];
                for (var i = 0; i < aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },

        getParamSeo: function (sUrl) {
            var aUrl = EC_ROUTE.getCleanUrl(sUrl).split('/');
            return aUrl[3] ? aUrl[3] : null;
        },
    };

    // 소메뉴 데이터 로드 및 초기화
    methods.get();

    $('.top_category').on('mouseenter', function () {
        $('body').addClass('pcnavihover');
    }).on('mouseleave', function () {
        $('body').removeClass('pcnavihover');
    });

    setTimeout(function(){
        document.querySelectorAll('a[data-cateno]').forEach(anchor => {
            // data-cateno 속성 값 가져오기
            const cateNo = anchor.getAttribute('data-cateno');
            
            // 현재 href 값에서 cate_no 파라미터 추가
            const currentHref = anchor.getAttribute('href');
            const url = new URL(currentHref, window.location.origin);
            url.searchParams.set('cate_no', cateNo); // cate_no 파라미터 추가
            
            // 새 URL을 href 속성에 적용
            anchor.setAttribute('href', url.toString());
          });
    },700 )


    
});
