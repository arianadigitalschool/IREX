<?php

$host = 'localhost';
$db = "test3";
$user = 'root';
$pass = '';

try{
    //connect to database
    $conn = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);

    //set values to be inserted
    // $username = "Ariana";
    // $password = password_hash("mypassword", PASSWORD_DEFAULT);
    // $sql = "INSERT INTO users(username, password) values ('$username', '$password')";

    //creating table
    // $sql = "CREATE TABLE users(id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    // username VARCHAR(255) NOT NULL,
    // password VARCHAR(255) NOT NULL )";

    //adding columns
    // $sql = "ALTER TABLE users ADD email varchar(255)";

    //deleting columns
    // $sql ="ALTER TABLE users DROP column email";

    //delete table
    $sql= "DROP table users";

    $conn->exec($sql);



    // $last_id = $conn->lastInsertId();
    echo "Column is deleted";
}catch(Exception $e){
    echo $e->getMessage();
}


?>
