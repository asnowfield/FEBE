<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "quizdb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the score and username from the AJAX request
$score = $_POST['score'];
$username = $_POST['username'];

// Escape the score and username to prevent SQL injection attacks
$score = mysqli_real_escape_string($conn, $score);
$username = mysqli_real_escape_string($conn, $username);

// Insert the score and username into the quizDB table
$sql = "INSERT INTO quizDB (score, userName) VALUES ('$score', '$username')";

if (mysqli_query($conn, $sql)) {
  echo "Score inserted successfully";
} else {
  echo "Error inserting score: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
