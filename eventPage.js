// window.onload = main();

// function main() {
// 	document.getElementById("enter").addEventListener("click", function() {
// 		var dropdown = document.getElementById("dropdown").value;
// 		chrome.storage.sync.set({"choice": dropdown}, function() {
// 			alert("option saved");
// 		});
// 	});

// }

chrome.storage.sync.set({"choice": "other"}, function() {
	//alert("option saved");
});
