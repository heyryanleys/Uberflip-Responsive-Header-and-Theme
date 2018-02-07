/* Adds Header Navigation on Homepage Only */
function imageMapping() {
  var thisURL = window.location.href
  if (window.location.href.indexOf("igus.uberflip.com/?") > -1 || thisURL == "igus.uberflip.com") {
    document.getElementById("large-top-nav").style.display = 'block';
    document.getElementById("medium-top-nav").style.display = 'block';

  } else {
    document.getElementById("large-top-nav").style.display = 'block';
    document.getElementById("medium-top-nav").style.display = 'block';
  }
}

/* Run Fuctions On Page Load */
Hubs.onLoad = function() {
  imageMapping();
}

/* Runs Functions When Page Changes*/
Hubs.onPageChange = function() {
  imageMapping();
}

/* Runs Functions When Items Load */
Hubs.onItemsLoaded = function() {
  imageMapping();
}

$(document).ready(function() {
  $(".large-overlay").css({
    'width': ($(".page-aligner").width() + 'px')
  });
});
