
counter = 0;

function swapModel(modelFile){
	document.getElementById('mytest').innerHTML= '<inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/3d_models/'+modelFile+'"></inline>'
}

$(document).ready(function() {
	
	selectPage();

	function showHome(){
		$('#home').show();
		$('#cokeModel').hide();
		$('#spriteModel').hide();
		$('#pepperModel').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 
	}

	function showCoke(){
		$('#home').hide();
		$('#cokeModel').show();
		$('#spriteModel').hide();
		$('#pepperModel').hide();
		$('#interaction').show();
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	 
	}

	function showSprite(){
		$('#home').hide();
		$('#cokeModel').show();
		swapModel('sprite_bottle.x3d')
		$('#spriteModel').hide();
		$('#pepperModel').hide();			
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').show(); 
		$('#pepperDescription').hide(); 

	}

	function showPepper(){
		$('#home').hide();
		$('#cokeModel').hide();
		$('#spriteModel').hide();
		$('#pepperModel').show();
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').show(); 	

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
