<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');



if($bo_table) {
	$E_bo = sql_fetch("SELECT * FROM newData_board where bo_table ='$bo_table'");
}
if(!defined('_INDEX_')){

$h_Page = $_GET['active'];
$hh_Page = $_GET['subActive'];

}

?>

<!-------------------------- 네비게이션 -------------------------->


<header id="header" class="">
			<div class="headWrap">
				<h1 class="logo">
					<a href="/new2021/" class="siteLg">
						<img src="/img/logo1.png" alt="<?php echo $config['cf_title']; ?>">
					</a>
				</h1>
				<div class="btnMoGnb">
					<button type="button">
						<span>전체메뉴</span>
					</button>
				</div>
				<div class="btnMoSearch">
					<button type="button">
						<span>검색</span>
					</button>
				</div>
				<!-- gnb -->
				<div class="gnbWrap">
					<nav class="gnb">
						<div class="moTopArea">
							<h2 class="lgArea"><img src="/img/logo1.png" alt="전시안내"></h2>
							<ul class="mobildHeadUtil">
                <?php if ($is_member) {  ?>
                <li><a href="<?php echo G5_BBS_URL ?>/logout.php">로그아웃</a></li>
                <li><a href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a></li>
                <?php if ($is_admin) {  ?>
                <li class="tnb_admin"><a href="<?php echo correct_goto_url(G5_ADMIN_URL); ?>">관리자</a></li>
                <?php }  ?>
                <?php } else {  ?>
                <li><a href="<?php echo G5_BBS_URL ?>/login.php">로그인</a></li>
                <li><a href="<?php echo G5_BBS_URL ?>/register.php">회원가입</a></li>
                <?php }  ?>



																<!-- <li><a href="/eng/" class="langLk">Eng<i></i></a></li> -->
							</ul>
						</div>


						<ul class="gnbList">

              <?php
      $menu_datas = get_menu_db(0, true);
      $gnb_zindex = 999; // gnb_1dli z-index 값 설정용
              $i = 0;
              foreach( $menu_datas as $row ){
                  if( empty($row) ) continue;
                //  if(defined('_INDEX_')) $subNum = 9; else $subNum = 13;

                //  $row['me_link'] =  substr($row['me_link'], $subNum);
                if($i == $h_Page) {
                  $activeli = "active";
                  $subHistory = "<a href=\"".$row['me_link']."&active=\"".$i."\" >".$row['me_name']."</a>";
                }else{
                  $activeli = "";
               }

              ?>
																		<li class="opNav  <?php  echo $activeli; ?> "><a href="<?php echo $row['me_link']."&active=".$i; ?>" target="_<?php echo $row['me_target']; ?>" title="하위메뉴 보기"><span><?php echo $row['me_name'] ?></span></a>

                                      <?php
                                      $k = 0;
                                      foreach( (array) $row['sub'] as $row2 ){

                                          if( empty($row2) ) continue;

                                          if($k == 0)
                                              echo '<div class="gnb_cont" ><ul>'.PHP_EOL;

                                              $row2['me_link'] =  substr($row2['me_link'], $subNum);
                                      ?>
                                          <li ><a href="<?php echo $row2['me_link']."&active=".$i."&subActive=".$k; ?>" target="_<?php echo $row2['me_target']; ?>" ><span><?php echo $row2['me_name'] ?></span></a></li>
                                      <?php
                                      $k++;
                                      }   //end foreach $row2

                                      if($k > 0)
                                          echo '</ul></div>'.PHP_EOL;
                                      ?>







											</li>
                      <?php
                      $i++;
                      }   //end foreach $row

                      if ($i == 0) {  ?>
                          <li class="opNav">메뉴 준비 중입니다.<?php if ($is_admin) { ?> <a href="<?php echo G5_ADMIN_URL; ?>/menu_list.php">관리자모드 &gt; 환경설정 &gt; 메뉴설정</a>에서 설정하실 수 있습니다.<?php } ?></li>
                      <?php } ?>
													</ul>
					</nav>

					<div class="gnbRight gnb_cont" >


					</div>
					<p class="moGnbClose"><button type="button">Close</button></p>
				</div>



				<div class="headUtil">
					<!-- <p class="family"><a href="/new2021/bbs/board.php?bo_table=exhibition" target="_blank"><span>전시안내</span></a></p> -->

          <ul >
            <?php if ($is_member) {  ?>
            <li><a href="<?php echo G5_BBS_URL ?>/logout.php">로그아웃</a></li>
            <li><a href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a></li>
            <?php if ($is_admin) {  ?>
            <li class="tnb_admin"><a href="<?php echo correct_goto_url(G5_ADMIN_URL); ?>">관리자</a></li>
            <?php }  ?>
            <?php } else {  ?>
            <li><a href="<?php echo G5_BBS_URL ?>/login.php">로그인</a></li>
            <li><a href="<?php echo G5_BBS_URL ?>/register.php">회원가입</a></li>
            <?php }  ?>
          </ul>


					<p class="search"><a href="#search">검색</a></p>

				</div>
				<p class="btnSiteMap"><a href="/new2021/bbs/content.php?co_id=sitemap" class="btnSiteMap">Sitemap</a></p>
			</div>
		</header>

    <div id="ma_search" >
			<div class="ma_Search_closed" >
        <a href="#search"><img src="/img/mb_nav_closed.png" alt="검색 닫기"></a></div>
			<div class="ma_search_in">
        <fieldset id="hd_sch">
            <legend>사이트 내 전체검색</legend>
            <form name="fsearchbox" method="get" action="<?php echo G5_BBS_URL ?>/search.php" onsubmit="return fsearchbox_submit(this);">
            <input type="hidden" name="sfl" value="wr_subject||wr_content">
            <input type="hidden" name="sop" value="and">
            <label for="sch_stx" class="sound_only">검색어 필수</label>
            <input type="text" name="stx" id="sch_stx" maxlength="20" placeholder="검색어를 입력해주세요">
            <button type="submit" id="sch_submit" value="검색"><i class="fa fa-search" aria-hidden="true"></i><span class="sound_only">검색</span></button>
            </form>

            <script>
            function fsearchbox_submit(f)
            {
                if (f.stx.value.length < 2) {
                    alert("검색어는 두글자 이상 입력하십시오.");
                    f.stx.select();
                    f.stx.focus();
                    return false;
                }

                // 검색에 많은 부하가 걸리는 경우 이 주석을 제거하세요.
                var cnt = 0;
                for (var i=0; i<f.stx.value.length; i++) {
                    if (f.stx.value.charAt(i) == ' ')
                        cnt++;
                }

                if (cnt > 1) {
                    alert("빠른 검색을 위하여 검색어에 공백은 한개만 입력할 수 있습니다.");
                    f.stx.select();
                    f.stx.focus();
                    return false;
                }

                return true;
            }
            </script>

        </fieldset>

			</div>
		</div>




<!-------------------------- /네비게이션 -------------------------->

<?php
if (!defined('_INDEX_')){
?>


    <div class="container subPage">

<?php  if($bo_table) {

  if($bo_table !='about'){

  ?>
      <h2 class="mt-4 mb-3  pageTitle">
        <?php echo $E_bo['bo_subject']?>
      </h2>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="<?php echo G5_URL?>">홈</a>
        </li>
        <li  class="breadcrumb-item submenu">

            <?php

            echo $subHistory;

            ?>
        </li>
        <li class="breadcrumb-item active">
          <?php
         echo $E_bo['bo_subject']


        ?></li>
      </ol>
      <div >

        <div class='contentInner'>
        <?php } ?>
<?php }else{  ?>

      <h2 class="mt-4 mb-3 pageTitle">
        <?php echo $g5['title']; ?>
      </h2>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="<?php echo G5_URL?>">홈</a>
        </li>
        <li class="breadcrumb-item submenu">
          <?php echo $subHistory;?>
        </li>
        </li>
        <li class="breadcrumb-item active"><?php echo $g5['title']?></li>
      </ol>
      <div >
        <div class='contentInner'>


<?php } }  ?>
