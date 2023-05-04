
counter = 0;

function swapTitle(title, subtitle) {
	    $('#title_3d_coke').html(title)
		$('#subtitle_3d_coke').html('<p>'+ subtitle +'</p>')


}

function swapModel(modelFile){
	 document.getElementById('modelViewer').innerHTML= '<inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/3d_models/'+modelFile+'"></inline>'
	/*var x3dElement = document.getElementById("modelViewer");
	x3dElement.getElementsByTagName("inline")[0].setAttribute("url", "assets/3d_models/" + modelFile);*/
}


$(document).ready(function() {
	
	selectPage();

	function showHome(){
		$('#home').show();
		// $('modelDiv').hide(); Not working
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 

	}

	function showCoke(){
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('coke_can.x3d')
		swapTitle('Coca-Cola Classic', 'Model created in Cinema4D, exported to VRDOM via view3dscene')
		$('#interaction').show();
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
		$('#bottle').click(() => {swapModel('coke_bottle.x3d')});
		$('#can').click(() => {swapModel('coke_can.x3d')});	 
	}

	function showSprite(){
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('sprite_can.x3d')
		swapTitle('Sprite', 'Model created in Cinema4D, exported to VRDOM via view3dscene')
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').show(); 
		$('#pepperDescription').hide();
		$('#bottle').click(() => {swapModel('sprite_bottle.x3d')});
		$('#can').click(() => {swapModel('sprite_can.x3d')});




	}

	function showPepper(){
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('pepper_can.x3d')
		swapTitle('Dr Pepper', 'Model created in Cinema4D, exported to VRDOM via view3dscene')		
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').show();
		$('#bottle').click(() => {swapModel('dr_pepper.x3d')});
		$('#can').click(() => {swapModel('pepper_can.x3d')});	  	

	}


	function selectPage() {
		$('#home').show();
		$('#cokeModel').hide();
		$('#spriteModel').hide();
		$('#pepperModel').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 

		// Navigate to HOME page through various locations
		$('#navHome').click(showHome);
		$('#navHomeRight').click(showHome);

		// Navigate to COKE page through various locations
		$('#navCoke').click(showCoke);
		$('#navCokeButton').click(showCoke);

		// Navitage to SPRITE page through various locations
		$('#navSprite').click(showSprite);
		$('#navSpriteButton').click(showSprite);

		// Navigate to DR PEPPER page through various locations
		$('#navPepper').click(showPepper);
		$('#navPepperButton').click(showPepper);



		// THIS IS STILL NOT BEING USED - FIGURE IT OUT
		// $('#navModels').click(function(){
		// 	$('#home').hide();
		// 	$('#about').hide();
		// 	$('#models').show();
		// 	$('#interaction').show(); 
		// 	$('#cokeDescription').show();
		// 	$('#spriteDescription').hide(); 
		// 	$('#pepperDescription').hide(); 
		// });
	}

});


// Change navbar color - use this for dark mode eventaully
function changeLook() {
    counter += 1;
    switch (counter) {
        case 1:
        document.getElementById('navbar_coca_cola').style.backgroundColor = 'lightblue';
        break;

        case 2:
        document.getElementById('navbar_coca_cola').style.backgroundColor = 'pink';
        break;

        case 3:
        document.getElementById('navbar_coca_cola').style.backgroundColor = 'purple';
        break;
        case 4:
        counter = 0;
        document.getElementById('navbar_coca_cola').style.backgroundColor = 'black';
        break;



        }

    }

// Not implented yet
function changeBack() {
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('header').style.backgroundColor = '#000000';
    document.getElementById('footer').style.backgroundColor = '#000000';
}
