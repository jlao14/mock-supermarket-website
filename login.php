<?php
// Initial database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// This creates the connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Checking if the connection is successful or not
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// if connection is successful then username and password are gathered via post
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = isset($_POST['username']) ? $_POST['username'] : '';
    $pass = isset($_POST['password']) ? $_POST['password'] : '';

    // Then a simple validation will occur where the login and username entries are checked across a database
    if (!empty($user) && !empty($pass)) {
        $stmt = $conn->prepare("SELECT * FROM `login` WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $user, $pass);
        $stmt->execute();
        $result = $stmt->get_result();
        // If credentials are correct then user will be redirected to the homepage
        if ($result->num_rows > 0) {
            header("Location: homepage.html");
            exit();
        // If wrong they will be given an error
        } else {
            echo "Invalid username or password.";
        }
        $stmt->close();
    } 
    // If username and password are blank then they will also be given an error.
    else {
        echo "Username and Password are required.";
    }
}

