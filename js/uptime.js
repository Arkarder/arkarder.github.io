// import ["jquery", "bootstrap"]

$(function () {
  var $video = $('video')[0];
  var $highlights = $('ul.highlights li');
  var times = [3, 22, 66, 87, 109, 129];
  
  var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
  if (iOS) {
    $video.controls = true;
  }
  if (!iOS || navigator.platform === 'iPad') {
    if (!iOS) {
      $highlights.css('cursor', 'pointer');
      $highlights.mouseover(function (ev) {
        $(this).addClass('hovering');
      });
      $highlights.mouseout(function (ev) {
        $(this).removeClass('hovering');
      });
    }
    
    $highlights.click(function () {
      var i = $highlights.index(this);
      $video.currentTime = times[i];
      $video.play();
    });
    
    setInterval(function () {
      var t = $video.currentTime;
      var i = -1;
      for (; i < (times.length - 1); i++) {
        if (times[i+1] > t) break;
      }
      $highlights.removeClass('selected');
      $($highlights[i]).addClass('selected');
    }, 0.3);
  }
})