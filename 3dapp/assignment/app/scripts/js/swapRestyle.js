
counter = 0;

function swapTitle(title) {
	$('#title_3d_coke').html(title)
}

function swapModel(modelFile) {
	document.getElementById('modelViewer').innerHTML = '<inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/3d_models/' + modelFile + '"></inline>'
	/*var x3dElement = document.getElementById("modelViewer");
	x3dElement.getElementsByTagName("inline")[0].setAttribute("url", "assets/3d_models/" + modelFile);*/
}


$(document).ready(function () {

	selectPage();

	function showHome() {
		$('#modelDiv').hide();
		$('#home').show();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide();
		$('#pepperDescription').hide();
		$('#aboutPage').hide();
	}

	function showCoke() {
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('coke_can.x3d')
		swapTitle('Coca-Cola Classic', 'Model created in Cinema4D, exported to VRDOM via view3dscene')
		$('#interaction').show();
		$('#cokeDescription').show();
		$('#spriteDescription').hide();
		$('#pepperDescription').hide();
		$('#aboutPage').hide();
		$('#bottle').click(() => { swapModel('coke_bottle.x3d') });
		$('#can').click(() => { swapModel('coke_can.x3d') });
	}

	function showSprite() {
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('sprite_can.x3d')
		swapTitle('Sprite', 'Model created in Cinema4D, exported to VRDOM via view3dscene')
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').show();
		$('#pepperDescription').hide();
		$('#aboutPage').hide();
		$('#bottle').click(() => { swapModel('sprite_bottle.x3d') });
		$('#can').click(() => { swapModel('sprite_can.x3d') });
	}

	function showPepper() {
		$('#home').hide();
		$('#modelDiv').show();
		swapModel('pepper_can.x3d')
		swapTitle('Dr Pepper', 'Model created in Cinema4D, exported to VRDOM via view3dscene')
		$('#interaction').show();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide();
		$('#pepperDescription').show();
		$('#aboutPage').hide();
		$('#bottle').click(() => { swapModel('dr_pepper.x3d') });
		$('#can').click(() => { swapModel('pepper_can.x3d') });

	}

	function showAbout() {
		$('#modelDiv').hide();
		$('#home').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide();
		$('#pepperDescription').hide();
		$('#aboutPage').show();

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
		$('aboutPage').hide();

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

		// Navigate to ABOUT page
		$('#navAbout').click(showAbout);



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
	document.getElementById('body_dark').style.backgroundColor = 'rgb(43, 43, 43)';
	document.getElementById('cokeDescription').style.backgroundColor = 'rgb(43, 43, 43)';
	document.getElementById('cokeDescription').style.borderColor = 'dark gray';


}

// Not implented yet
function changeBack() {
	document.getElementById('body_dark').style.backgroundColor = 'white';

}



// GLOBAL VARIABLE TO HOLD VIEWS FOR MODEL PAGE
let modelViews = {};
let currentModelView = '';

// FUNCTION THAT GRABS MODELS VIEWS 
function grabModelViews() {
	return fetch('scripts/php/model_json.php')
		.then(response => response.json())
		.then(data => {
			data.forEach(page => {
				modelViews[page.page_name] = {
					title: page.title,
					description: page.description,
					modelOne: page.model_one_url,
					modelTwo: page.model_two_url,
					modelOneLabel: page.model_one_label,
					modelTwoLabel: page.model_two_label,
					galleryDir: page.gallery_dir,
				};
			});
			return modelViews;
		})
		.catch(error => console.error(error));
}

// SWITCH MODEL VIEW
function switchModelView(view) {
	document.getElementById('modelTitle').innerHTML = modelViews[view].title;
	document.getElementById('modelDescription').innerHTML = modelViews[view].description;
	document.getElementById('modelOneLabel').innerHTML = modelViews[view].modelOneLabel;
	document.getElementById('modelTwoLabel').innerHTML = modelViews[view].modelTwoLabel;
	switchGallery(modelViews[view].galleryDir);

	currentModelView = view;
	showModelOne();
}

grabModelViews()