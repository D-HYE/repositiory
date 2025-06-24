<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}
?>


<?php if(!defined('_INDEX_')) {?>
        </div>
</div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
<?php }?>

<footer id="footer">
  <div class="inner">
      <div class="footer_contents">
          <div class="info_cont">
              <p class="footer_sns">
                  <span><a href="//www.instagram.com/" target="_blank" class="ico_instagram">instagram</a></span>
                  <span><a href="//www.youtube.com/" target="_blank" class="ico_youtube">youtube</a></span>
                  <span><a href="//blog.naver.com/" target="_blank" class="ico_blog">Blog</a></span>
              </p>
              <!-- 20210330 수정 : s -->
              <div class="footer_info">
                  <dl>
                      <dt>사단법인 한국여성사진가협회</dt>

                      <dt>
                        <a href="/new2021/bbs/content.php?co_id=privacy">개인정보취급방침</a>
                      </dt>
                      <dd>
                        <a href="/new2021/bbs/content.php?co_id=provision">이용약관</a>
                      </dd>
                      <dd class='w200'>
                        서울시 마포구 마포대로 127 풍림빌딩 827호
                        <p class=''>TEL: +82-2-717-1713</p>
                        <p>contact: kowpa@naver.com</p>
                      </dd>


                  </dl>
              </div>
              <!-- 20210330 수정 : e -->
          </div>
          <div class="info_cont footer_csCenter desk">
              <p>
                  <!-- <span>Contact info.</span>
                  <strong>+82-2-717-1713</strong> -->
              </p>
          </div>
          <div class="info_cont">
              <div class="relation_svc">
                  <strong class="tit_relation"><a href="javascript:void(0)">Family Site<span class="ico_corp ico_arr"></span></a></strong>
                  <ul class="list_relation">
                      <li><a href="//www.kawf.kr/" target="_blank" class="link_relation">한국예술인복지재단</a></li>
                      <li><a href="//www.mcst.go.kr/kor/main.jsp" target="_blank" class="link_relation">문화체육관광부</a></li>
                      <li><a href="//csv.culture.go.kr/frt/main.do" target="_blank" class="link_relation">문화품앗이</a></li>
                      <li><a href="//www.kovwa.or.kr/" target="_blank" class="link_relation">한국여성벤처협회</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <small class="txt_copyright">ⓒ 2021 Kowpa.or.kr All Rights Reserved.</small>
  </div>
</footer>



  <!-- /container -->


  <!-- Bootstrap core JavaScript -->
  <!--<script src="vendor/jquery/jquery.min.js"></script>-->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="<?php echo G5_THEME_URL?>/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="<?php echo G5_THEME_URL?>/assets/parallax/js/parallax.min.js"></script>


  <script src="/js/slick.min.js"></script>
  <script src="/js/swiper.js"></script>


  <script src="/js/ScrollMagic.min.js"></script>
  <script src="/js/TweenMax.min.js"></script>
  <script src="/js/animation.gsap.min.js"></script>


	<!-- countdown -->
	<script type="text/javascript" src="<?php echo G5_THEME_URL?>/assets/countdown/js/kinetic.js"></script>
	<script type="text/javascript" src="<?php echo G5_THEME_URL?>/assets/countdown/js/jquery.final-countdown.js"></script>
	<script type="text/javascript" src="<?php echo G5_THEME_URL?>/js/bootstrap-dropdownhover.js"></script>
	<script type="text/javascript" src="<?php echo G5_THEME_URL?>/js/custom.js"></script>
  <?php
  if(defined('_INDEX_')) {
    ?>
    	<script type="text/javascript" src="/js/main.js"></script>
    <?php
  } ?>
	<script>
		$('.parallax-window').parallax({imageSrc: '//placehold.it/1920x500'});
	</script>
	


<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");
?>
