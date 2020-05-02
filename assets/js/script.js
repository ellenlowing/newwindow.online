const stickers = ['heartglobe', 'angels', 'brokenchain', 'flower', 'pinkyswear', 'window'];
let mobileMode;
let player;
let playerState;
let zidx = 2;

$(document).ready(() => {
	mobileMode = isMobile();
	init();
});
$(window).bind('mousedown', (e) => {
  stamp(e);
});
$(window).resize(() => {});
// $(window).mousemove(function(e){
//   $('.follow').css({'top': e.clientY-100, 'left': e.clientX-100});
// });

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
  }
}

function stamp (e) {
  let label = $('main').attr('class');
  let sticker = $('#sticker-' + label);
  let clone = sticker.clone().css({
    'top': ( (e.clientY-32) / window.innerWidth * 100).toString() + 'vw',
    'left': ( (e.clientX-32) / window.innerWidth * 100).toString() + 'vw',
    'zIndex': zidx
  }).show();
  zidx += 1;
  $('.content').after(clone);
  let idx = Math.floor(Math.random() * Math.floor(stickers.length));
  // let newsticker = stickers[idx];
  $('main').removeClass(label).addClass(stickers[idx]);
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
  if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
    setMarquee(0);
  } else {
    setMarquee(1);
  }
}
