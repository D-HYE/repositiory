<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/group.php');
    return;
}

if(!$is_admin && $group['gr_device'] == 'mobile')
    alert($group['gr_subject'].' 그룹은 모바일에서만 접근할 수 있습니다.');

$g5['title'] = $group['gr_subject'];
include_once(G5_THEME_PATH.'/head.php');
include_once(G5_LIB_PATH.'/latest.lib.php');

?>
<link rel="stylesheet" href="<?php echo G5_THEME_URL; ?>/skin/latest/basic_artist/style.css">
<div class="artistArtlist row">
  <script>
   $(function(){

    $('body').on('click','.artFix .closeBtn',function(){

            $('.artFix').remove();
             $('body').removeClass('ofh');

    });


     $(".artistinfo .list").click(function(){
       $('body').addClass('ofh');
       var _thisArtinfo = $(this).find('.slideFadeWrapper').html();
       var _thisArtcarrier = $(this).parents('.artistinfo').find('.exhibitions').html();

             $('body').append("<div class='artFix'><div class='slideFadeWrapperup row align-items-center justify-content-center'><div class='col-md-7 p-md-0'></div><dl  class='col-md-5  text-white  '></dl><button class='closeBtn'></button></div></div>");
             $('.artFix .slideFadeWrapperup > div').html(_thisArtinfo);
             $('.artFix .slideFadeWrapperup > dl').html(_thisArtcarrier);
             clickArt('.artFix .slideFadeWrapperup > div');

     });
     function clickArt(artistGalleryObj){

    var artistSwiper = new Swiper(artistGalleryObj, {
        loop: true,
        speed: 1000,
        autoplay: false,
        spaceBetween: 20,
        // effect : 'fade',
        // slidesPerView: 1,

        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
  }

   });
   </script>

<!-- 메인화면 최신글 시작 //////-->
<?php
//  최신글
$sql = " select bo_table, bo_subject
            from {$g5['board_table']}
            where gr_id = '{$gr_id}'
              and bo_list_level <= '{$member['mb_level']}'
              and bo_device <> 'mobile' ";
if(!$is_admin)
    $sql .= " and bo_use_cert = '' ";
$sql .= " order by bo_subject ";
$result = sql_query($sql);
for ($i=0; $row=sql_fetch_array($result); $i++) {

?>
<!--    <div  class='col col-3 flex-container item-center wow wow-newsEvent-customFadeInUp animated animated'>-->
	<div  class='col-md-6 col-xl-4  flex-container  align-items-center '>
    <?php
    // 이 함수가 바로 최신글을 추출하는 역할을 합니다.
    // 사용방법 : latest(스킨, 게시판아이디, 출력라인, 글자수);
//if($row['bo_table'] == 'art41')
	echo latest('theme/basic_artist', $row['bo_table'], 1, 150);
    ?>
    </div>
<?php
}
?>
<!-- 메인화면 최신글 끝 -->
</div>
<?php
include_once(G5_THEME_PATH.'/tail.php');
?>
