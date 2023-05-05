$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

// JavaScript Gallery Generator

$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    var htmlCode = "";
    var response;
    var send = "scripts/php/hook.php"
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            // Rensponse handler code
            // alert('Testing');
            // Tokenise the response
            response = xmlHttp.responseText.split("~");
            // Look round the response array of tokens, which are the image names ...
            for (var i=0; i<response.length; i++) {
                // and continue to builde the html code for the gallery
                // alert(response[i])
                htmlCode += '<a href="assets/images/gallery_images/' + '' + response[i] +'" data-fancybox="gallery">';
                htmlCode += '<img class="card-img-top gallery img-thumbnail" src="assets/images/gallery_images/' + response[i] + '"/>';
                htmlCode += '</a>';
                
            }
            // Write the HTML code into the gallery
            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_sprite').innerHTML = htmlCode;
            document.getElementById('gallery_pepper').innerHTML = htmlCode;



        }
    }

});


Fancybox.bind("[data-fancybox]", {});

  
  