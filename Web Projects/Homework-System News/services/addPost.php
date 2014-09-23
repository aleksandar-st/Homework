<?php
    require 'dbConfig.php';
	$time=time();
    $title=htmlspecialchars($_POST['title']);
    $content=strip_tags($_POST['content']);
    $author=$_POST['author'];
    $q="INSERT INTO posts (title, content, author, added) VALUES ('$title','$content','$author','$time')";
    mysql_query($q) or die(mysql_error());
?>