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


// Toggles points to display polygon view
function poly() {
  setView(0);
}
// Toggles points to display wireframe view
function wireframe() {
  setView(1);
}
// Toggles points to display vertex view
function vertex() {
  setView(2);
}


// Helper function to set the view based on the mode
function setView(mode) {
  var e = document.getElementById('x3d_viewer');
  var toggleCount;

  if (currentmode === mode) {
    return;
  }

  if ((currentmode === 0 && mode === 1) || (currentmode === 1 && mode === 0)) {
    toggleCount = 4;
  } else if ((currentmode === 0 && mode === 2) || (currentmode === 2 && mode === 0)) {
    toggleCount = 2;
  } else if ((currentmode === 1 && mode === 2) || (currentmode === 2 && mode === 1)) {
    toggleCount = 4;
  }

  for (var i = 0; i < toggleCount; i++) {
    e.runtime.togglePoints(true);
  }

  currentmode = mode;
}