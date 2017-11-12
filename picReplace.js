window.onload = main();

function main() {
	alert("Script Running");
	// chrome.runtime.onMessage.addListener(
	//   function(request, sender, sendResponse) {
	//   	alert("got message");
	//     console.log(sender.tab ?
	//                 "from a content script:" + sender.tab.url :
	//                 "from the extension");
	//     if (request.greeting) {
	//       sendResponse({farewell: "goodbye"});
	//       alert(request.greeting);
	//     }
	//   });
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		
	var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    replacePics();
    console.log(mutations, observer);
    // ...
});

	observer.observe(document, {
		subtree: true,
		attributes: true
	});

	//window.setInterval(replacePics, 100);
	//replacePics();

}

//Choose random dog pic
function dogPic() {
	var dogArray = ["https://i.imgur.com/SBBdO8b.jpg", "https://i.imgur.com/B7UJFRn.jpg", "https://i.imgur.com/gIunJ2r.jpg", "https://i.imgur.com/5O5LdRB.jpg", "https://i.imgur.com/sNhzxmR.jpg", "https://68.media.tumblr.com/10776e624890ff1b69653e6a0b649b1e/tumblr_inline_ortrrhjE1f1qzf6t4_540.png", "https://i.imgur.com/aBZ2pmU.png"];

	var dog = dogArray[Math.floor(Math.random() * dogArray.length)];

	return dog;
}





function replacePics() {
	var dogArray = ["https://i.imgur.com/SBBdO8b.jpg", "https://i.imgur.com/B7UJFRn.jpg", "https://i.imgur.com/gIunJ2r.jpg", "https://i.imgur.com/5O5LdRB.jpg", "https://i.imgur.com/sNhzxmR.jpg", "https://68.media.tumblr.com/10776e624890ff1b69653e6a0b649b1e/tumblr_inline_ortrrhjE1f1qzf6t4_540.png", "https://i.imgur.com/aBZ2pmU.png"];

	//Replaces profile picture icon of a post
	var postPic = document.getElementsByClassName("_s0 _4ooo _5xib _5sq7 _44ma _rw img");

	for (var i = 0; i < postPic.length; i++) {
		if (!dogArray.includes(postPic[i].src)){
			postPic[i].src = dogPic();
		}
		
		
	}

	//Replaces profile picture icons of commentors
	var commentPic = document.getElementsByClassName("img UFIActorImage _54ru img");
	for (var i = 0; i < commentPic.length; i++) {
		if (!dogArray.includes(commentPic[i].src)){
			commentPic[i].src = dogPic();
		}
		
	}

	//Replaces profile picture when hovering over user
	var hoverProfPic = document.getElementsByClassName("_s0 _4ooo _1ve7 _7lw _rv img");
	for (var i = 0; i < hoverProfPic.length; i++) {
		if (!dogArray.includes(hoverProfPic[i].src)){
			hoverProfPic[i].src = dogPic();
		}
		
	}

}