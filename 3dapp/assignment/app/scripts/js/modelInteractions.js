var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__Timer').getAttribute('enabled')!= 'true')
        document.getElementById('model__Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__Timer').setAttribute('enabled', 'false');
}

var currentmode = 0;

// Toggles points to display polygon view
function poly() {
    var e = document.getElementById('x3d_viewer');

    if (currentmode == 0) { }
    else if (currentmode == 1) { //each toggles 4 times
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 2) { //each toggles 2 times
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        }
    }
    currentmode = 0;
}

// Toggles points to display wireframe view

function wireframe() {
    var e = document.getElementById('x3d_viewer');

    if (currentmode == 1) { }
    else if (currentmode == 2) { //each toggles 4 times
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 0) { //each toggles 2 times
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        }
    }
    currentmode = 1;
}

// Toggles points to display vertex view
function vertex() {
    var e = document.getElementById('x3d_viewer');

    if (currentmode == 2) { }
    else if (currentmode == 0) { 
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 1) { 
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        }
    }
    currentmode = 2;
}

// 
function cameraFront()
{
	document.getElementById('model__View_cam_01').setAttribute('bind', 'true');
}
function cameraTop()
{
	document.getElementById('model__View_cam_02').setAttribute('bind', 'true');
}
function cameraBottom()
{
	document.getElementById('model__View_cam_03').setAttribute('bind', 'true');
}
function cameraBack()
{
	document.getElementById('model__View_cam_04').setAttribute('bind', 'true');
}
