<?php

// Establish a database connection
$pdo = new PDO('sqlite:database.sqlite');

// Check if the "model_page" table exists, and create it if not
$tableExists = $pdo->query("SELECT name FROM sqlite_master WHERE type='table' AND name='model_page'")->fetch();

if (!$tableExists) {
    $query = "
        CREATE TABLE model_page (
            page_name TEXT,
            title TEXT,
            description TEXT,
            model_one_url TEXT,
            model_two_url TEXT,
            model_one_label TEXT,
            model_two_label TEXT,
            gallery_dir TEXT,
            PRIMARY KEY(page_name)
        )
    ";
    $pdo->exec($query);
}

// Define the query
$query = "SELECT * FROM model_page";

// Execute the query
$result = $pdo->query($query);

// Fetch the results as an associative array
$rows = $result->fetchAll(PDO::FETCH_ASSOC);

// Encode the results as JSON
$json = json_encode($rows);

// Set the content type to JSON
header('Content-Type: application/json');

// Output the JSON data
echo $json;

?>
