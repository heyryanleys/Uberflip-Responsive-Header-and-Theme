/* Adds Header Navigation on Homepage Only */
/* function imageMapping() {
  var thisURL = window.location.href
  if (window.location.href.indexOf("igus.uberflip.com/?") > -1 || thisURL == "igus.uberflip.com") {
    document.getElementById("large-top-nav").style.display = 'block';
    document.getElementById("medium-top-nav").style.display = 'block';

  } else {
    document.getElementById("large-top-nav").style.display = 'block';
    document.getElementById("medium-top-nav").style.display = 'block';
  }
}

*/
function swapVideoThumbnail(){
  var oldSrc = 'https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fcontent.cdntwrk.com%2Ffiles%2FaHViPTc1MTM4JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVhN2RkMGQyMDI0NTQucG5nJnZlcnNpb249MDAwMCZzaWc9NjkzYmM2NzM0ZDhmYzJjZTNmMjE3MWQ1MGY2YTUwZTk%25253D&size=1&version=1518196380&sig=b4581426b165fbc49d0c25bbf06eddb4&default=hubs%2Ftilebg-videos.jpg';
  var newSrc = 'https://s14.postimg.org/u5gai92z5/diforange.png';
  $('img[src="' + oldSrc + '"]').attr('src', newSrc);
}

function secondSearchBar(){
  $("#hero-search-bar").keyup(function(){
      $('[name=q]').val(this.value);
  });
  // wait for input
  $("#hero-search-bar").on('keyup', function (e) {
    if (e.keyCode == 13) {
      e = jQuery.Event("keyup");
      e.which = 13 //enter key
      jQuery('[name=q]').trigger(e);
    }
  });
}

Hubs.onLoad = function() {
  swapVideoThumbnail();
  secondSearchBar();
}

/* Runs Functions When Page Changes*/
Hubs.onPageChange = function() {
  swapVideoThumbnail();
  secondSearchBar();
}

/* Runs Functions When Items Load */
Hubs.onItemsLoaded = function() {
  swapVideoThumbnail();
  secondSearchBar();
}
