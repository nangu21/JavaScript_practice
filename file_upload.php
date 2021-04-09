<!DOCTYPE html>
<html class="no-js" lang="ja">
<head>
<meta charset="utf-8">
<title>file_upload</title>
<link rel="stylesheet" href="">
<style>
    #form-main {
        text-align: center;
    }
    #form-img {
        display: table;
        width: 500px;
        height: 300px;
        border: 1px dotted;
        margin: 0 auto;
    }
    #form-img p {
        margin: 0;
        position: relative;
        top: 50%;
    }
    .preview {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    .preview img{
        width: 200px;
        max-width: 100%;
        max-height: 100%;
    }
    .container {
        padding: 20px;
    }
    .draggable {
        padding: 20px;
        margin-top: 20px;
        background-color: white;
        border: 1px solid black;
    }
</style>
</head>
<body>

<div id="form-main">
<div id="form-img">
<?php 
    if(is_uploaded_file($_FILES['userfile']['tmp_name'])){
        if(move_uploaded_file($_FILES['userfile']['tmp_name'], "files/".$_FILES['userfile']['name'])){
            chmod("files/".$_FILES['userfile']['name'], 0644); //権限の付与
            //echo "<p>". $_FILES['userfile']['name']. "をアップロードしました。". "</p>";

            //画像のプレビュー
            echo "<div class='preview'><img class='draggable' draggable='true' src='files/". $_FILES['userfile']['name'] ."'></div>";
        }else {
            echo "<p>ファイルをアップロードできません。</p>";
        }
    }else{
            echo "<p>ファイルが選択されていません</p>";
    }
?>
</div>

<form enctype="multipart/form-data" action="" method="POST">
    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
    <input type="file" name="userfile" /><br>
    <input type="submit" value="送信" name="submit" />
</form>
</div>

<div class="container">
<p class="draggable" draggable='true'>あ</p>
<p class="draggable" draggable='true'>い</p>
<p class="draggable" draggable='true'>う</p>
</div>

<script type="text/javascript" src="practice3_dragAndDrop1.js"></script>
</body>
</html>