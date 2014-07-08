<?php
    header('Content-type: application/json');
    error_reporting(0); 
    include 'dbConfig.php';
    $events_id=(int)$_GET['events'];

    $result=mysql_query("SELECT events_id, title, content, author, img FROM `events` WHERE events_id ='$events_id'");
    $post=mysql_fetch_assoc($result);
    $read= array('title'=>"$post[title]", 'content'=>"$post[content]", 'src'=>"$post[img]", 'author'=>"$post[author]"); 
    $reads[]=$read; 
    echo json_encode($reads);  
?>