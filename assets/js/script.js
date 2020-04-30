let mobileMode;

$(document).ready(() => {
	mobileMode = isMobile();
});

function init() {
  if(mobileMode) {
    $('iframe').css({
      'transform': 'rotate(-90deg) translateX(+50vw) translateX(-50vh) translateY(-50vh) translateY(50vw)',
			'-webkit-transform': 'rotate(-90deg) translateX(+50vw) translateX(-50vh) translateY(-50vh) translateY(50vw)',
			'width': '100vh',
			'height': '100vw'
    })
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
