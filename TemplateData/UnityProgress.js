function init() {}

window.initializeConnection = function() {}

function UnityProgress (dom) {
	this.progress = 0;
	this.message = "";
	this.dom = dom;
	var parent = dom.parentNode;
	var bgBar = document.getElementById('bgBar')
	var bgBarW = bgBar.getBoundingClientRect().width
	var bar = document.getElementById('progressBar')
	var loadInfo = document.getElementById("loadingInfo")
	var smarts = [
		'Assembling membrane',
		'Detecting poisons',
		'Recruiting small molecules',
		'Determining binding locations',
		'Priming proton pumps',
		'Reading environmental variables',
		'Unpacking DNA',
		'Populating neighboring neurons',
		'Exciting electrons',
		'Disinhibiting neurotransmitters',
		'Deoxygenating RNA',
		'Staining antibodies',
		'Connecting synapses',
		'Collecting vesicles',
		'Enlarging to show texture',
		'Programming shark-borne lasers',
		'Sequencing your genome',
		'Disinfecting instruments',
		'Initiating mitosis',
		'Myelinating axons',
		'Downloading PDBs',
		'Checking neuromorpho for structures',
		'Calibrating smoke and mirrors',
		'Baking light probes',
		'Denaturing viral proteins'
	]
	
	this.SetProgress = function (progress) { 
		// progress is `int` b/w 0 and 1
		if (this.progress < progress) {
			this.progress = progress;
		}
		if (progress == 1) {
			this.SetMessage("Preparing...");
			document.getElementById("spinner").style.display = "none";
			document.getElementById("bgBar").style.display = "none";
			document.getElementById("progressBar").style.display = "none";
		} 
		this.Update();
	}
	
	this.SetMessage = function (message) { 
		this.message = message;
		this.Update();
	}
	
	this.Clear = function() {
		document.getElementById("loadingBox").style.display = "none";
	}
	
	var winQuart = window.innerWidth/4
	this.Update = function() {
		var length = bgBarW * Math.min(this.progress, 1);
		bar.style.width = length+'px'
		var message
		if (this.message.match('downloading'))
			message = 'downloading...'
		else if (this.message.match(/preparing\.{3}\(0/))
			message = 'preparing... for science!'
		else if (this.progress > 0)
			message = Math.round(this.progress*100) + '%'
		else
			message = 'loading...'
		loadInfo.innerHTML = message;
		loadInfo.style.left = winQuart+length+'px'
		// set random message
		var message = smarts[Math.round(Math.random()*(smarts.length - 1))]
		document.getElementById("loadingMsg").innerHTML = message+'...'
	}
	
	this.Update();
}