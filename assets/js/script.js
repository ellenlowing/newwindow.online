let mobileMode;
let player;
let playerState;

$(document).ready(() => {
	mobileMode = isMobile();
	init();
});

function init() {
	// Load Youtube API
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if(mobileMode) {
    // $('iframe').css({
    //   'transform': 'rotate(-90deg) translateX(+50vw) translateX(-50vh) translateY(-50vh) translateY(50vw)',
		// 	'-webkit-transform': 'rotate(-90deg) translateX(+50vw) translateX(-50vh) translateY(-50vh) translateY(50vw)',
		// 	'width': '100vh',
		// 	'height': '100vw'
    // })
  }
}

function isMobile() {
  var md = new MobileDetect(window.navigator.userAgent);
  if(md.mobile()){
    return true;
  } else {
    return false;
  }
}

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video', {
	    events: {
	      'onStateChange': onPlayerStateChange
	    }
	});
}

function onPlayerStateChange(event) {
	playerState = event.data;
	console.log(playerState);
  // if (event.data == YT.PlayerState.PLAYING) {
	//
  // }
}
