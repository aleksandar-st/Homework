<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
include 'dbConfig.php';
$userName = trim($_POST['userName']);
$pass = trim($_POST['pass']);
if(mb_strlen($userName, "UTF-8") > 3 && mb_strlen($userName, "UTF-8") < 30 &&
        mb_strlen($pass, "UTF-8") > 3 && mb_strlen($pass, "UTF-8") < 50){
    if(preg_match("/^[a-zA-Z0-9 АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯабвгдежзийклмнопрстуфхцчшщъьюя №-]+$/", $userName)){
        if(preg_match("/^[a-zA-Z0-9]+$/", $pass)){
            $userCount = mysql_query('SELECT `user-id` FROM `users` 
                WHERE `user-name` = "'.mysql_real_escape_string($userName).'"');
            $userCount = mysql_numrows($userCount);
            if($userCount == 0){
                mysql_query("INSERT INTO `users` (`user-name`, `user-pass`) 
                    VALUES('".mysql_real_escape_string($userName)."', '".md5($pass)."')");
                $sessionId = sha1($userName . time());
                $query = mysql_query('SELECT `user-id` FROM `users`
                    WHERE `user-name` = "'.mysql_real_escape_string($userName).'" LIMIT 1');
                $rs = mysql_fetch_assoc($query);
                
                mysql_query("INSERT INTO `user-sessions` (`user-id`, `session-num`, `time`) 
                    VALUES('".(int)$rs['user-id']."', '".$sessionId."', '". time() ."')");
                
                $success = array('error'=> 0, 'sessionId' => $sessionId);
                echo json_encode($success);
            }
            else
            {
                $err = array('error'=> 1, 'msg' => "Username already exist!", 'errNum' => 453);
                echo json_encode($err); 
            }
        }
        else
        {
           $err = array('error'=> 1, 'msg' => "Password is invalid!", 'errNum' => 452);
           echo json_encode($err); 
        }
    }
    else{
        $err = array('error'=> 1, 'msg' => "Username is invalid!", 'errNum' => 451);
        echo json_encode($err);
    }
}
else{
    $err = array('error'=> 1, 'msg' => "Username or password is invalid!", 'errNum' => 450);
    echo json_encode($err);
}