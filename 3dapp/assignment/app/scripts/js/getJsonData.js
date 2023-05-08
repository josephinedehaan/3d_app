// You will need to add more code to completely remove all data embedded in the front-end 
// view so that it is served up asynchronously from the back-end.
$(document).ready(function(){
    $.getJSON("model/data.json", function(jsonObj) {
        home = jsonObj.pageTextData[0]
        home_2 = jsonObj.pageTextData[1]
        coke_card = jsonObj.pageTextData[2]
        sprite_card = jsonObj.pageTextData[3]
        pepper_card = jsonObj.pageTextData[4]

        // Carousel Slide 1
        $('#title_home').html('<h1>' + home.title + '</h1>')
        $('#subtitle_home').html('<h3>' + home.subTitle + '</h3>')

        // Carousel Slide 2
        $('#title_2_home').html('<h1>' + home_2.title + '</h1>')
        $('#subtitle_2_home').html('<h3>' + home_2.subTitle + '</h3>')

        // Coke card
        $('#title_cokecard').html('<h3>' + coke_card.title + '</h3>')
        $('#description_cokecard').html('<p>' + coke_card.description + '</p>')

        // Sprite card
        $('#title_spritecard').html('<h3>' + sprite_card.title + '</h3>')
        $('#description_spritecard').html('<p>' + sprite_card.description + '</p>')

        // Dr Pepper card
        $('#title_peppercard').html('<h3>' + pepper_card.title + '</h3>')
        $('#description_peppercard').html('<p>' + pepper_card.description + '</p>')
    })

})

