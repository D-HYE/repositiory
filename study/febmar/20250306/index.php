<?php
    define('_ME_', '박다혜'); //상수변수라서 $를 못 붙여~
    $dahyeAge = 30;
    $studyArr = ["react", "php", "SQL", "html/scss", "JS", "jQuery"];

    function greet($name){
        return 'Hello,'.$name.'!';
    }
    // function sindorim($study, $mode, $date = null){ // 디폴트 값이 있는 매개인자는 맨 뒤에 넣어줄 것.
    //     return $date.' 이후로 '.$study.'수업을 '.$mode.'합니다.';
    // }
    function sindorim($study, $mode, $date = '1월'){
        return $date.' 이후로 '.$study.'수업을 '.$mode.'합니다.';
    }
?>

<h2><?php echo _ME_.'는';?></h2>
<p><?php echo sindorim($studyArr[0], '시작', '17일');?></p>
<p><?php echo sindorim($studyArr[1], '마무리', '오늘');?></p>
<p><?php echo sindorim($studyArr[2], '계속', '첫 날');?></p>
<p><?php echo sindorim($studyArr[5], '안 ');?></p>
    
<p>이제 9개월 지나면 <?php echo $dahyeAge + 1; ?> 살이네</p>