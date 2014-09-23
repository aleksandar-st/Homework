<?php
    header('Content-type: application/json');
    include 'dbConfig.php';
    $query=mysql_query("SELECT post_id, title FROM `posts` ORDER BY `post_id` DESC LIMIT 60");
    while($row=mysql_fetch_array($query)){   	
        $post= array('href'=>"$row[post_id]", 'text'=>"$row[title]"); 
        // $post= array('href'=>"../services/read_more.php?post=$row[post_id]", 'text'=>"$row[title]"); 
        $posts[]=$post;           
    }
    echo json_encode($posts);      
    
?>
