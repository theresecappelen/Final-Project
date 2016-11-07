$(document).ready(function(){

  var $mediaContainer = $('.js-media-container');
  var $title = $('.js-title');
  var $canvas = $('.js-canvas');
  var wait = false;

  // $canvas.on('mousemove',  changeImage );
  $canvas.on('mousemove',  _.throttle(changeImage, 500 ) );
  // $canvas.on('mouseenter',  changeImage );
  // $canvas.on('mouseleave',  changeImage );
  $canvas.on('mousemove', displayTitle);

  function changeImage(e) {

    var max = $mediaContainer.length;
    var random = Math.floor(Math.random() * max);
    var randomMedia = $mediaContainer[random];

    $mediaContainer.removeClass('is-active');
    $(randomMedia).addClass('is-active');
  }


  function displayTitle(e) {
    var $this = $(this);
    var $activeMediaContainer = $this.children('.js-media-container.is-active');

    var title = $activeMediaContainer.data('title');
    $title.text(title);
    // $title.on('hover', displayTitle);

    // var image = $activeMediaContainer.data('is-active') 
    // When class of js media container is active then display data title of that class
  }

}); // end of document
