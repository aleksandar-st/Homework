<?php
header('Content-type: application/json');
include 'dbConfig.php';
$userName = trim($_POST['userName']);
$pass = trim($_POST['pass']);
if(mb_strlen($userName, "UTF-8") > 3 && mb_strlen($userName, "UTF-8") < 30 &&
        mb_strlen($pass, "UTF-8") > 3 && mb_strlen($pass, "UTF-8") < 50){
    if(preg_match("/^[a-zA-Z0-9 АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯабвгдежзийклмнопрстуфхцчшщъьюя №-]+$/", $userName)){
        $pass = md5($pass);
        $query = mysql_query('SELECT * FROM `users` WHERE `user-name` = "'.$userName.'" and `user-pass` = "'.$pass.'"');
        $count = mysql_numrows($query);
        if($count == 1){
            $rs = mysql_fetch_assoc($query);
            mysql_query('UPDATE `user-sessions` SET `time` = 0 
                WHERE `user-id` = "'.(int)$rs['user-id'].'" and `time` != 0');
            $sessionId = sha1($userName . time());
            mysql_query("INSERT INTO `user-sessions` (`user-id`, `session-num`, `time`) 
                VALUES('".(int)$rs['user-id']."', '".$sessionId."', '". time() ."')");
            $success = array('error'=> 0, 'sessionId' => $sessionId);
            echo json_encode($success);
        }
        else
        {
            $err = array('error'=> 1, 'msg' => "Username or password is invalid!", 'errNum' => 453);
            echo json_encode($err);
        }
    }
    else{
        $err = array('error'=> 1, 'msg' => "Username is invalid!", 'errNum' => 451);
        echo json_encode($err);
    }
}
else
{
    $err = array('error'=> 1, 'msg' => "Username or password is invalid!", 'errNum' => 450);
    echo json_encode($err);
}
?>
