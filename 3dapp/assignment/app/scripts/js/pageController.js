// Global variables to hold json data
let modelViews = {};
let currentModelView = '';
let cardData = {};
let slideData = {};

// Function to grab model view
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

// Function to grab home page cards data 
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

// Function to grab carousel slide text data 
function grabCarouselSlideData() {
	return fetch('scripts/php/carousel_json.php')
		.then(response => response.json())
		.then(data => {
			data.forEach(slide => {
				slideData[slide.slide_name] = {
					title: slide.title,
					subtitle: slide.subtitle,
				};
			});
			return slideData;
		})
		.catch(error => console.error(error));
}

// Hides and shows relevant content for home page
function showHome() {
	$('#modelDiv').hide();
	$('#home').show();
	$('#interaction').hide();
	$('#aboutPage').hide();
}

// Hides and shows relevant content for about page
function showAbout() {
	$('#modelDiv').hide();
	$('#home').hide();
	$('#interaction').hide();
	$('#aboutPage').show();
}

// Load the Markdown file using fetch()
function populateAboutPage() {
	fetch('assets/markdown/about.md')
	.then(response => response.text())
	.then(markdown => {
		// Convert the Markdown to HTML using Showdown
		const converter = new showdown.Converter();
		const html = converter.makeHtml(markdown);

		// Display the HTML on the page
		document.getElementById('markdown-content').innerHTML = html;
	})
	.catch(error => console.error(error));
}

// Populate carousel
function populateCarousel() {
	// Slide 1
	document.getElementById('slideOneTitle').innerHTML = slideData['slide_one'].title;
	document.getElementById('slideOneSubtitle').innerHTML = slideData['slide_one'].subtitle;
	// Slide 2
	document.getElementById('slideTwoTitle').innerHTML = slideData['slide_two'].title;
	document.getElementById('slideTwoSubtitle').innerHTML = slideData['slide_two'].subtitle;
}


// Populate cards               ****(TO DO: FIX THE TAGS SO THAT THEY're IN THE HTML)******
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

// Function to swap between the three image galleries
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

// Function to change button colour on each model page
function switchBtnColor(bgColor) {
	const style = document.createElement('style');
	style.innerHTML = '.btn-outline-primary:hover { color: white; background-color: '+ bgColor + '; border-color:'+bgColor+'}';
	document.head.appendChild(style);
}

// Function to add/remove attributes to allow dropdown menu to autocollapse in mobile view
function toggleNavbarCollapse() {
	var screenWidth = window.innerWidth;
	var navbarElements = document.querySelectorAll('.collapsible_nav_item');
  
	if (screenWidth < 576) {
	  navbarElements.forEach(function(element) {
		element.setAttribute('data-toggle', 'collapse');
		element.setAttribute('data-target', '.navbar-collapse');
	  });
	} else {
	  navbarElements.forEach(function(element) {
		element.removeAttribute('data-toggle');
		element.removeAttribute('data-target');
	  });
	}
  }

// init code 
function spaInit() {

	// Autocolllapse navbar on mobile view 
	window.addEventListener('resize', toggleNavbarCollapse);
	toggleNavbarCollapse()

	// Bind contact popover
	$('[data-toggle="popover"]').popover();

	// Bind lightbox gallery
	Fancybox.bind("[data-fancybox]", {});

	// Grab JSON for model views 
	grabModelViews();

	// Grab and populate card data from JSON
	grabCardData().then(() => {
		populateCards();
	});

	// Grab and populate carousel from JSON
	grabCarouselSlideData().then(() => {
		populateCarousel();
	});

	// Populate about page
	populateAboutPage();

}

// Run init once body is ready 
$(document).ready(function () {
	spaInit();
});


