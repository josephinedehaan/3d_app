var spinning = false;
var currentmode = 0;

// Sets the active cameras for the model view
function cameraFront()
{
	document.getElementById('model__View_cam_04').setAttribute('bind', 'true');
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
	document.getElementById('model__View_cam_01').setAttribute('bind', 'true');
}


// Starts rotation animation
function spin()
{
	spinning = !spinning;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}


// Stops rotation animation
function stopRotation()
{
	spinning = false;
	document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}


// Detects whether model is spinning and stops/starts it accordingly
function animateModel()
{
    if(document.getElementById('model__Timer').getAttribute('enabled')!= 'true')
        document.getElementById('model__Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__Timer').setAttribute('enabled', 'false');
}


// 0 - poly
// 1 - vertex
// 2 - wire 
function setRenderView(mode) {
  while(document.getElementById('x3d_viewer').runtime.togglePoints(true) != mode) {}
}