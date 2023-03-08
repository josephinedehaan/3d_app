// JavaScript Gallery Generator
// Create the XMLHttpRequest Object for communicating with the web server
var xmlHttp = new XMLHttpRequest();
// Stores number of horizontalColumns gallery has, if oo large it won't fit in window
var numberOfColumns = 2;
// Stores newly generated gallery HTML code
var htmlCode = "";
// Temporarily stores server response while code is generated
var response;


$(document).ready(function() {
    var send = "scripts/php/hook.php"
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            // Rensponse handler code
            // alert('Testing');
            // Tokenise the response
            response = xmlHttp.responseText.split("~");
            // Start to write the HTML code into the htmlcode string
            htmlCode += '<tr>';
            // Look round the response array of tokens, which are the image names ...
            for (var i=0; i<response.length; i++) {
                // and continue to builde the html code for the gallery
                htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="' + 'labs/a_gallery/' + response[i] +'">';
                htmlCode += '<img src="labs/a_gallery/' + response[i] + '" class="image_thumbnail"/>';
                htmlCode += '</a>';
                htmlCode += '</td>';
                // Control the column layout for the gallery thumbnails
                if(((i+1)%numberOfColumns) == 0) {
                    htmlCode += '</tr><tr>';
                }
            }
            htmlCode += '</tr>';
            // Write the HTML code into the gallery
            document.getElementById('gallery').innerHTML = htmlCode;

        }
    }

});

