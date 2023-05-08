function swapTitle(title) {
	$('#title_3d_coke').html(title)
}

$(document).ready(function () {

	selectPage();

	function showHome() {
		$('#modelDiv').hide();
		$('#home').show();
		$('#interaction').hide();
		$('#aboutPage').hide();
	}

	function showAbout() {
		$('#modelDiv').hide();
		$('#home').hide();
		$('#interaction').hide();
		$('#aboutPage').show();
	}

	function selectPage() {
		$('#home').show();
		$('#interaction').hide();
		$('aboutPage').hide();

		// Navigate to HOME page
		$('#navHome').click(showHome);	// From home button
		$('#navHomeRight').click(showHome); // From header logo

		// Navigate to ABOUT page
		$('#navAbout').click(showAbout);
	}

});

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

// Switch model page view
function switchModelView(view) {
	document.getElementById('modelTitle').innerHTML = modelViews[view].title;
	document.getElementById('modelDescription').innerHTML = modelViews[view].description;
	document.getElementById('modelOneLabel').innerHTML = modelViews[view].modelOneLabel;
	document.getElementById('modelTwoLabel').innerHTML = modelViews[view].modelTwoLabel;
	//switchGallery(modelViews[view].galleryDir);

	currentModelView = view;
	showModelOne();
	$('#home').hide();
	$('#modelDiv').show();
	$('#interaction').show();
	$('#aboutPage').hide();
}

// Swaps the model url
function swapModel(modelFile) {
	document.getElementById('modelViewer').innerHTML = '<inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/3d_models/' + modelFile + '"></inline>'
	/*var x3dElement = document.getElementById("modelViewer");
	x3dElement.getElementsByTagName("inline")[0].setAttribute("url", "assets/3d_models/" + modelFile);*/
}

// Set of functions to swap between can/bottle
function showModelOne() {
	swapModel(modelViews[currentModelView].modelOne);
}
function showModelTwo() {
	swapModel(modelViews[currentModelView].modelTwo);
}

grabModelViews();
