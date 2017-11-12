window.onload = function(){
	document.getElementById("enter").onclick = setChoice;
}

function setChoice() {
	var dropdown = document.getElementById("dropdown").value;
	alert("test");
	if (dropdown == "dogs") {
		chrome.storage.sync.set({"choice": "dogs"}, function() {
		alert("option saved");
	});
	} else if (dropdown == "cats") {
		chrome.storage.sync.set({"choice": "cats"}, function() {
		alert("option saved");
	});
	} else if (dropdown == "other") {
		chrome.storage.sync.set({"choice": "other"}, function() {
		alert("option saved");
	});
	} else if (dropdown == "all") {
		chrome.storage.sync.set({"choice": "all"}, function() {
		alert("option saved");
	});
	}
}

