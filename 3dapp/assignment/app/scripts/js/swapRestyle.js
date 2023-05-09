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
let cardData = {};

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
					buyURL: page.buy_url,
					buttonColour: page.button_colour
				};
			});
			return modelViews;
		})
		.catch(error => console.error(error));
}

// FUNCTION THAT GRABS HOME PAGE CARDS DATA 
function grabCardData() {
	return fetch('scripts/php/card_json.php')
		.then(response => response.json())
		.then(data => {
			data.forEach(card => {
				cardData[card.card_name] = {
					title: card.title,
					description: card.description,
					image: card.image,
					link: card.model_view,					
				};
			});
			return cardData;
		})
		.catch(error => console.error(error));
}

// Populate cards
function populateCards() {
	document.getElementById('cokeCardTitle').innerHTML = '<h3>' + cardData['cola'].title + '</h3';
	document.getElementById('cokeCardDescription').innerHTML = '<p>' + cardData['cola'].description + '</p>';
	document.getElementById('cokeCardImage').src = "assets/images/cards/" + cardData['cola'].image;
	document.getElementById('cokeCardLink').href = "javascript:switchModelView('" + cardData['cola'].link + "')";
	document.getElementById('spriteCardTitle').innerHTML = '<h3>' + cardData['sprite'].title + '</h3';
	document.getElementById('spriteCardDescription').innerHTML = '<p>' + cardData['sprite'].description + '</p>';
	document.getElementById('spriteCardImage').src = "assets/images/cards/" + cardData['sprite'].image;
	document.getElementById('spriteCardLink').href = "javascript:switchModelView('" + cardData['sprite'].link + "')";
	document.getElementById('pepperCardTitle').innerHTML = '<h3>' + cardData['pepper'].title + '</h3';
	document.getElementById('pepperCardDescription').innerHTML = '<p>' + cardData['pepper'].description + '</p>';
	document.getElementById('pepperCardImage').src = "assets/images/cards/" + cardData['pepper'].image;
	document.getElementById('pepperCardLink').href = "javascript:switchModelView('" + cardData['pepper'].link + "')";
}

// Switch model page view
function switchModelView(view) {
	document.getElementById('modelTitle').innerHTML = modelViews[view].title;
	document.getElementById('modelDescription').innerHTML = modelViews[view].description;
	document.getElementById('modelOneLabel').innerHTML = modelViews[view].modelOneLabel;
	document.getElementById('modelTwoLabel').innerHTML = modelViews[view].modelTwoLabel;
	document.getElementById('buyURL').href = modelViews[view].buyURL;
	switchGallery(modelViews[view].galleryDir);
	switchBtnColor(modelViews[view].buttonColour);

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
}

// Set of functions to swap between can/bottle
function showModelOne() {
	swapModel(modelViews[currentModelView].modelOne);
}
function showModelTwo() {
	swapModel(modelViews[currentModelView].modelTwo);
}



function switchGallery(gallery) {
	const galleryDiv = document.getElementById('gallery');
	galleryDiv.innerHTML = '';
	var htmlCode = "";
	fetch('scripts/php/gallery_json.php?gallery=' + gallery)
		.then(response => response.json())
		.then(data => {
			data.forEach(image => {
				htmlCode += '<a href="assets/images/' + image +'" data-fancybox="gallery">';
                htmlCode += '<img class="card-img-top gallery img-thumbnail" src="assets/images/' + image + '"/>';
                htmlCode += '</a>';
				document.getElementById('image_gallery').innerHTML = htmlCode;
			});
		})
		.catch(error => console.error(error));
}

function switchBtnColor(bgColor) {
	const style = document.createElement('style');
	style.innerHTML = '.btn-outline-primary:hover { color: white; background-color: '+ bgColor + '; border-color:'+bgColor+'}';
	document.head.appendChild(style);
}


grabModelViews();

grabCardData().then(() => {
	populateCards();
});
