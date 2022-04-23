if (document.body.classList.contains('home')) {
  let videos = document.querySelectorAll('.video-dt');
  window.addEventListener('load', function() {
    window.requestAnimationFrame(function() {      
      videos[0].play();
      videos[1].play();
    });
  }, false);
}