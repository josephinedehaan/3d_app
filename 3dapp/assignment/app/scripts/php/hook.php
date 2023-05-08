<?php  
// Specify path to the thumbnail images
$directory = '../../assets/images/gallery_images';
// Only load files with the following extensions
$allowed_extensions = array('jpg', 'jpeg', 'gif', 'png');
// An awway used to separate the extension from each file
$file_parts = array();
// Response message
$response = "";
// Opens the directory to parse the images
$dir_handle = opendir($directory);

// Iterate thru all the files
while ($file= readdir($dir_handle)) {
    // First check for hidden files
    if (substr($file, 0, 1) != '.') {
        // Split each file name to extract the file extension
        $file_components = explode('.', $file);
        // Grab the extesion token
        $extension = strtolower(array_pop($file_components));
        // Is this file a valid image - if so, add it to the response
        if (in_array($extension, $allowed_extensions))
        {
            // Build a response string using the ~ symbol as a string separator
            //$response .= $directory.'/'.$file.'~';
            $response .= $file.'~';

        }
    }
}

closedir($dir_handle);
// Return response while removing the last ~ separator
echo substr_replace($response,"",-1);

?>