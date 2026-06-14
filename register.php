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

// This checks if the form data is received and cleans up user inputs
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['username'] ?? ''); 
    $pass = $_POST['password'] ?? '';
    $confirm_pass = $_POST['confirm_password'] ?? '';

    // An error will occur if any field is left empty
    if (empty($user) || empty($pass) || empty($confirm_pass)) {
        echo "All fields are required.";
        exit();
    }
    // An error will also occur if the passwords do not match
    if ($pass !== $confirm_pass) {
        echo "Passwords do not match.";
        exit();
    }

    // This checks if a username already exists, if so then an error will occur
    $stmt_check = $conn->prepare("SELECT username FROM `login` WHERE username = ?");
    if ($stmt_check === false) {
        die('Prepare check failed: ' . htmlspecialchars($conn->error));
    }
    $stmt_check->bind_param("s", $user);
    $stmt_check->execute();
    $stmt_check->store_result();

    if ($stmt_check->num_rows > 0) {
        echo "Username already exists. Please choose a different username.";
        $stmt_check->close();
        exit();
    }
    $stmt_check->close();

    // Then a new user will be entered into the database if no errors occur so far
    $stmt_insert = $conn->prepare("INSERT INTO `login` (username, password) VALUES (?, ?)");
    if ($stmt_insert === false) {
        die('Prepare insert failed: ' . htmlspecialchars($conn->error));
    }
    $stmt_insert->bind_param("ss", $user, $pass);

    if ($stmt_insert->execute()) {
        // At this point registration is successful and users will be directed to the login page
        header("Location: loginpage.html");
        exit();
    } else {
        echo "Error: Could not register user. " . htmlspecialchars($stmt_insert->error);
    }

    $stmt_insert->close();
}


