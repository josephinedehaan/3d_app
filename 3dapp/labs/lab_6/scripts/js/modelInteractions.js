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

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

// var lightOn = true;

// function headlight()
// {
// 	lightOn = !lightOn;
// 	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
// }

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