<!DOCTYPE html>
<html class="no-js" lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BirthdayQuest</title>
<link rel="stylesheet" href="BirthdayQuest.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</head>
<body>
<div class="container">
    <div id="instruction">
        <h2>はじめに</h2>
        <p>①問題は全部で3つあるよ</p>
        <p>②答えは全て駅構内にあるよ</p>
        <p>③スタート地点は"いつものところ"だよ</p>
        <h4>準備ができたらスタートボタンを押してね！</h4>
    </div>

    <div id="s-btn">
        <h3 id="start">Start</h3>
    </div>

    <h2 id="dot">・</h2>

    <div id="first">
        <h2>第1問</h2>
        <h4>記念日の”西暦”番を"月日"で開けて<br>中にある答えを入力してね</h4>
        <form action="<?= $_SERVER['SCRIPT_NAME']; ?>" method="POST">
            <input type="text" name="ans-one">
            <input type="hidden" name="scroll_top" value="" class="st">
            <input type="submit">
        </form>
    </div>


    <?php
        if(isset($_POST['ans-one'])){
            if($_POST['ans-one'] === "***"){
                echo "<p id='correct'>正解！スクロールして次の問題に進んでね</p>";
            }else{
                echo "漢字3文字で正しく入力してね";
            }
        }
    ?>

    <h2 id="dot">・</h2>

    <div id="second">
        <h2>第2問</h2>
        <h4>これらの共通点は？</h4>
        <p>17'19</p>
        <p>20・21・12・12・25'19</p>
        <p>4・15・21・20・15・18</p>
        <p>19・20・1・18・2・21・3・11・19</p>

    <form action="<?= $_SERVER['SCRIPT_NAME']; ?>" method="POST">
        <input type="text" name="ans-two">
        <input type="hidden" name="scroll_top" value="" class="st">
        <input type="submit">
    </form>

    <?php
        if(isset($_POST['ans-two'])){
            if($_POST['ans-two'] === "カフェ"){
                echo "<p id='correct'>正解！スクロールして最終問題に進んでね</p>";
            }else{
                echo "カタカナ3文字で正しく入力してね";
            }
        }
    ?>
    </div>

    <h2 id="dot">・</h2>

    <div id="third">
        <h2>第3問</h2>
        <h4>"目"があるビルの名前は？</h4>

    <form action="<?= $_SERVER['SCRIPT_NAME']; ?>" method="POST">
        <input type="text" name="ans-three">
        <input type="hidden" name="scroll_top" value="" class="st">
        <input type="submit">
    </form>

    <?php
        if(isset($_POST['ans-three'])){
            if($_POST['ans-three'] === "*****"){
                echo <<<EOF
                    <script>
                        location.href='/finish.php';
                    </script>
                EOF;
            }else{
                echo "カタカナ5文字で正しく入力してね";
            }
        }
    ?>
    </div>
    <br>
</div>

    <script type="text/javascript" src="BirthdayQuest.js"></script>
    <script>
        $('form').submit(function(){
            var scroll_top = $(window).scrollTop(); //送信時の位置情報を取得
            $('input.st',this).prop('value',scroll_top); //隠しフィールドに位置情報を設定
        });

        window.onload = function(){
        //ロード時に隠しフィールドから取得した値で位置をスクロール
            $(window).scrollTop(<?php echo @$_REQUEST['scroll_top']; ?>);
        }
    </script>
</body>

<footer>(c)2021 k.nangu All Rights Reserved.</footer>
</html>