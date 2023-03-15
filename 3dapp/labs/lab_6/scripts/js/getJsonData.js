// You will need to add more code to completely remove all data embedded in the front-end 
// view so that it is served up asynchronously from the back-end.

$(document).ready(function(){
    $.getJSON("model/data.json", function(jsonObj) {
        home = jsonObj.pageTextData[0]
        coke_card = jsonObj.pageTextData[1]
        sprite_card = jsonObj.pageTextData[2]
        pepper_card = jsonObj.pageTextData[3]
        coke_3d = jsonObj.pageTextData[4]
        sprite_3d = jsonObj.pageTextData[5]
        pepper_3d = jsonObj.pageTextData[6]
        gallery = jsonObj.pageTextData[7]

        // Homepage
        $('#title_home').html('<h2>' + home.title + '</h2>')
        $('#subtitle_home').html('<h3>' + home.subTitle + '</h3>')

        // Coke card
        $('#title_cokecard').html('<h3>' + coke_card.title + '</h3>')
        $('#description_cokecard').html('<p>' + coke_card.description + '</p>')

        // Sprite card
        $('#title_spritecard').html('<h3>' + sprite_card.title + '</h3>')
        $('#description_spritecard').html('<p>' + sprite_card.description + '</p>')

        // Dr Pepper card
        $('#title_peppercard').html('<h3>' + pepper_card.title + '</h3>')
        $('#description_peppercard').html('<p>' + pepper_card.description + '</p>')

        // Coke main 3D Model page
        $('#title_3d_coke').html('<h4>' + coke_3d.x3dModelTitle+'</h4>')
        $('#subtitle_3d_coke').html('<p>' + coke_3d.x3dCreationMethod+'</p>')
        $('#title_coke').html('<h3>' + coke_3d.title+'</h3>')
        $('#description_coke').html('<p>' + coke_3d.description+'</p>')

        // Sprite main 3D Model page
        $('#title_3d_sprite').html('<h4>' + sprite_3d.x3dModelTitle+'</h4>')
        $('#subtitle_3d_sprite').html('<p>' + sprite_3d.x3dCreationMethod+'</p>')
        $('#title_sprite').html('<h3>' + sprite_3d.title+'</h3>')
        $('#description_sprite').html('<p>' + sprite_3d.description+'</p>')


        // Pepper main 3D Model page
        $('#title_3d_pepper').html('<h4>' + pepper_3d.x3dModelTitle+'</h4>')
        $('#subtitle_3d_pepper').html('<p>' + pepper_3d.x3dCreationMethod+'</p>')
        $('#title_pepper').html('<h3>' + pepper_3d.title+'</h3>')
        $('#description_pepper').html('<p>' + pepper_3d.description+'</p>')


        // Gallery text
        $('#gallery_title_coke').html('<h4>' + gallery.galleryTitle + '</h4>')
        $('#gallery_title_sprite').html('<h4>' + gallery.galleryTitle + '</h4>')
        $('#gallery_title_pepper').html('<h4>' + gallery.galleryTitle + '</h4>')












    })

})