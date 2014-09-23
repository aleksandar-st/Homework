<?php
   $username="root";
   $password="";
   $dbname="system-news";
   $server="localhost";
   mysql_connect($server, $username, $password) or die(mysql_error());
   mysql_select_db($dbname) or die(mysql_error());
   mysql_query('SET NAMES UTF8')
   
?>