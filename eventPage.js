window.onload = function(){
	document.getElementById("enter").onclick = setChoice;
}

function setChoice() {
	var dropdown = document.getElementById("dropdown").value;

	if (dropdown == "dogs") {
		chrome.storage.sync.set({"choice": "dogs"}, function() {
	});
	} else if (dropdown == "cats") {
		chrome.storage.sync.set({"choice": "cats"}, function() {
	});
	} else if (dropdown == "other") {
		chrome.storage.sync.set({"choice": "other"}, function() {
	});
	} else if (dropdown == "all") {
		chrome.storage.sync.set({"choice": "all"}, function() {
	});
	}
}

