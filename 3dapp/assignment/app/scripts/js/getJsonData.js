// You will need to add more code to completely remove all data embedded in the front-end 
// view so that it is served up asynchronously from the back-end.
$(document).ready(function(){
    $.getJSON("model/data.json", function(jsonObj) {
        home = jsonObj.pageTextData[0]
        home_2 = jsonObj.pageTextData[1]

        // Carousel Slide 1
        $('#title_home').html('<h1>' + home.title + '</h1>')
        $('#subtitle_home').html('<h3>' + home.subTitle + '</h3>')

        // Carousel Slide 2
        $('#title_2_home').html('<h1>' + home_2.title + '</h1>')
        $('#subtitle_2_home').html('<h3>' + home_2.subTitle + '</h3>')
    })

})

