
counter = 0;

// Content swapper for SPA
function swap(selected) {   
    // first dont display all div id contentes 
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('pepper').style.display = 'none';

    // Then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}

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
