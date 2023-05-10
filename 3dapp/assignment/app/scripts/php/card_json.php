<?php

// Establish a database connection
$pdo = new PDO('sqlite:database.sqlite');

// Check if the "home_cards" table exists, and create it if not
$tableExists = $pdo->query("SELECT name FROM sqlite_master WHERE type='table' AND name='home_cards'")->fetch();

if (!$tableExists) {
    $query = '
    CREATE TABLE "home_cards" (
        "card_name"	TEXT,
        "title"	TEXT,
        "description"	TEXT,
        "image"	INTEGER,
        "model_view"	INTEGER,
        PRIMARY KEY("card_name")
    )
    ';
    $pdo->exec($query);
}

// Define the query
$query = "SELECT * FROM home_cards";

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
