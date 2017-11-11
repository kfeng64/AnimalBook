window.onload = main();

function main() {
	alert("Script Running");
	//replaceProfPic();
	window.setInterval(replacePics, 100);

}


function replacePics() {
	//Replaces profile picture icon of a post
	 var postPic = document.getElementsByClassName("_s0 _4ooo _5xib _5sq7 _44ma _rw img");
	 for (var i = 0; i < postPic.length; i++) {
	 	postPic[i].src = "http://i0.kym-cdn.com/entries/icons/original/000/006/622/tumblr_lzjrsoo61q1r50h4io1_400.png";
	 }

	 //Replaces profile picture icons of commentors
	 var commentPic = document.getElementsByClassName("img UFIActorImage _54ru img");
	 for (var i = 0; i < commentPic.length; i++) {
	 	commentPic[i].src = "http://i0.kym-cdn.com/entries/icons/original/000/006/622/tumblr_lzjrsoo61q1r50h4io1_400.png";
	 }

	 //Replaces profile picture when hovering over user
	 var hoverProfPic = document.getElementsByClassName("_s0 _4ooo _1ve7 _7lw _rv img");
	 for (var i = 0; i < hoverProfPic.length; i++) {
	 	hoverProfPic[i].src = "http://i0.kym-cdn.com/entries/icons/original/000/006/622/tumblr_lzjrsoo61q1r50h4io1_400.png";
	 }

}