let mobileMode;
let player;
let playerState;

$(document).ready(() => {
	mobileMode = isMobile();
	init();
});
$(window).resize(() => {
	console.log('resize');
})

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

function setMarquee(state) {
	let marquees = document.querySelectorAll('.marquee');
  let style;
  for(let i = 0; i < marquees.length; i++) {
    style = marquees[i].style;
    if(state == 1) style.webkitAnimationPlayState = 'running';
    else style.webkitAnimationPlayState = 'paused';
    // if(style.webkitAnimationPlayState === 'running') {
    //   style.webkitAnimationPlayState = 'paused';
    // } else {
    //   style.webkitAnimationPlayState = 'running';
    // }
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
  // toggleMarquee();
	console.log(playerState);
  if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
    setMarquee(0);
  } else {
    setMarquee(1);
  }
}
