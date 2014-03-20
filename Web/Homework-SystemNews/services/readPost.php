<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    error_reporting(0); 
    include 'dbConfig.php';
    $post_id=(int)$_GET['post'];

    $result=mysql_query("SELECT post_id, title, content, author FROM `posts` WHERE post_id ='$post_id'");
    $post=mysql_fetch_assoc($result);
    $read= array('title'=>"$post[title]", 'content'=>"$post[content]", 'author'=>"$post[author]"); 
    $reads[]=$read; 
    echo json_encode($reads);  
?>
