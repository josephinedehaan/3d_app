<?php
echo "<h1>Hello world!</h1>";
echo "<h2>The time is <h2>" . date("<h2>h:i:sa</h2>");
echo "<br>";

if (isset($_GET['name'])) {
    echo "Hello " . $_GET['name']; 
}
?>

