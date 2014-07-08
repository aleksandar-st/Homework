<?php
error_reporting(0); 
header('Content-type: application/json');
require 'dbConfig.php';

$post_id=(int)$_GET['post'];

$result=mysql_query("SELECT post_id, author FROM posts WHERE post_id='$post_id'") or die(mysql_error());
$post=mysql_fetch_assoc($result);
$result=mysql_query("DELETE FROM posts WHERE post_id='$post_id'") or die(mysql_error());
$delete= array('del'=>"Узпешно изтрита новина"); 
$deletes[]=$delete; 
echo json_encode($deletes); 
?>
