<meta charset="utf-8">
    <?php
    $host = 'MySQL-8.0';
    $user = 'root';
    $pass = '';
    $name = 'users';
    $link = mysqli_connect($host, $user, $pass, $name);
    mysqli_query($link, "SET NAMES 'utf8'");
?>