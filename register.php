<?php
session_start();
include 'db.php';
if (!empty($_POST)){
$username = $_POST['txt'];
$email = $_POST['email'];
$num = $_POST['num'];
$pass = $_POST['pswd'];

$query = "SELECT * FROM users WHERE name='$username'";  
$user = mysqli_fetch_assoc(mysqli_query($link, $query)); 
	if (empty($user)){
		$query = "INSERT INTO users (name, email, telephone, pass) VALUES ('$username','$email','$num', '$pass')";
		$res = mysqli_query($link, $query);
		$_SESSION["name"] = $username;
		header("Location: index.php");
	}
	else{
		?>
		<script> 
		alert("Имя уже занято")
		window.location.href = "login.php"
		</script>  
	<?php
}
}?>