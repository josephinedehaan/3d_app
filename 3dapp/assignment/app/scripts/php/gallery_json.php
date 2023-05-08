<?php
// Set the path to the directory containing the images
$path = '../../assets/images/' . $_GET['gallery'];

// Get a list of files in the directory
$files = scandir($path);

// Loop through the files and filter out non-image files
$imageFiles = array();
foreach ($files as $file) {
    if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $file)) {
        $imageFiles[] = $_GET['gallery'] . '/' . $file;
    }
}

// Convert the image files array to JSON format
$json = json_encode($imageFiles, JSON_UNESCAPED_SLASHES);

// Set the Content-Type header to indicate that the response is in JSON format
header('Content-Type: application/json');

// Output the JSON data
echo $json;
?>
