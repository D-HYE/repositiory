<?php
define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>



<main class='main maxWidth margin-bottom-50 pb-5'>
  <div id="container">
    <section class="sec sec_service row">
      <div class='left_wrap item col-md-3'>
          <ul class='itemUL'>
              <li>
               <?php echo latest_des("theme/basic", "notice",5, 22);  ?>
              </li>
              <li class='thisyear'>
                <!--여성사진페스티벌 //-->
            <?php echo latest('theme/pic_basic_company', 'thisyear', 1, 100); ?>
              </li>
              <li>
            <?php echo latest_des("theme/basic", "workshop",3, 25);  ?>
              </li>
          </ul>
      </div>
      <div class='center_wrap item col-md-6'>
        <!--기획전시 롤링-->
      <?php echo latest_des("theme/pic_basic", "indivisual",7, 200);  ?>
      </div>
      <div class='left_wrap item mobileContent'>
          <ul class='itemUL'>
              <li>
                <?php echo latest_des("theme/basic", "notice",5, 30);  ?>
              </li>
              <li  class='thisyear'>
                <!--이번전시 //-->
            <?php echo latest_des('theme/pic_basic_company', 'thisyear', 1, 100); ?>
              </li>
              <li>
            <?php echo latest_des("theme/basic", "workshop",3, 200);  ?>
              </li>
          </ul>
      </div>
      <div class='right_wrap item col-md-3'>
        <!--자료실과 영상노출-->
        <ul  class='itemUL '>

            <!-- <li class='multiData'>
          <?php //echo latest('theme/basic', 'comm', 5, 30); ?>
            </li> -->
            <li class='d-sm-flex  flex-wrap mx-sm-3 mx-md-0 '>
            <?php echo latest_des("theme/pic_list", "active_photo",2, 100);  ?>
            </li>
            <li>
            <?php echo latest_des("theme/pic_basic_company", "netabus",1, 100);  ?>    
            </li>
        </ul>
      </div>
    </section>

  </div>
</main>

<!-------------------------- 클라이언트 -------------------------->
<div class="inner margin-bottom-50 artists text-center d-none" >
  <h3 >회원작가들</h3>
  <p>(사)한국여성사진가협회 소속 회원작가들의 <span class='mBr'>약력 및 주요작품소개입니다.</span></p>


  <!-- 메인화면 최신글 시작 -->
  <?php
  //  최신글
  $sql = " select bo_table, bo_subject
              from {$g5['board_table']}
              where gr_id = 'artist'
                and bo_list_level <= '{$member['mb_level']}'
                and bo_device <> 'mobile' ";
  if(!$is_admin)
      $sql .= " and bo_use_cert = '' ";
  $sql .= " order by `bo_subject` ";
  $result = sql_query($sql);

  for ($i=0; $row=sql_fetch_array($result); $i++) {
      $lt_style = "";
      if ($i%2==1) $lt_style = "margin-left:2%";
      else $lt_style = "";
  ?>

      <?php
      // 이 함수가 바로 최신글을 추출하는 역할을 합니다.
      // 사용방법 : latest(스킨, 게시판아이디, 출력라인, 글자수);
      echo latest('group_basic', $row['bo_table'], 50, 25);
      ?>

  <?php
  }
  ?>
  <!-- 메인화면 최신글 끝 -->

</div>





<?php
include_once(G5_THEME_PATH.'/tail.php');
?>
