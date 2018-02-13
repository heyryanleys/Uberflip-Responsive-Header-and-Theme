/* Adds Header Navigation on Homepage Only */
function imageOverlay() {
  var thisURL = window.location.href
    if (window.location.href.indexOf("igus.uberflip.com/?") > -1 || thisURL == "https://igus.uberflip.com/") {
    document.getElementById('custom-hero').style.display = 'block';
  } else {
    document.getElementById('custom-hero').style.display = 'none';
    document.getElementsByClassName('page-aligner')[1].style.marginTop = "-25px";
    document.getElementsByClassName('page-aligner')[1].style.paddingTop = "33px";
  }
}

/* Solves a problem where the footer was showing up in the wrong place on content pages.  This function changes the location of the footer on any pages that look like toolbox.com/something/something, which only happens on content level pages */
function footerPlacement(){
  var thisURL = window.location.href
  var split_url = thisURL.split('/');
  if (split_url.length > 4) {
    document.querySelector('footer').style.marginTop = '0px'
  } else {
    document.querySelector('footer').style.marginTop = '-25px'
  }
}

/* Changes the thumbnail out on the homepage for the correct thumbnail-- I'd rather do this in a different way */
function swapVideoThumbnail(){
  var oldSrc = 'https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fcontent.cdntwrk.com%2Ffiles%2FaHViPTc1MTM4JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVhN2RkMGQyMDI0NTQucG5nJnZlcnNpb249MDAwMCZzaWc9NjkzYmM2NzM0ZDhmYzJjZTNmMjE3MWQ1MGY2YTUwZTk%25253D&size=1&version=1518196380&sig=b4581426b165fbc49d0c25bbf06eddb4&default=hubs%2Ftilebg-videos.jpg';
  var newSrc = 'https://s14.postimg.org/u5gai92z5/diforange.png';
  if ($(window).width() > 860) {
    $('img[src="' + oldSrc + '"]').attr('src', newSrc);
  }
}

/* Uses the search bar function in the top right hand corner with the search bar on the hero */
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

/* The search results werent dissapearing after the user clicked outside of the search results.  This function solves that by hiding the search results whenenver something besides "See more" is clicked */
function hideSearchBar(){
  $(document).click(function(e) {
  if(e.target.class != '.see-more') {
    $(".search-results-overlay").attr("style", "display:none");
    $(".search-results-backdrop").attr("style", "display:none");
    $("#loading-overlay").attr("style","display:none");
  }
});
}

/* This solves another problem with the search bar, this function runs when the page changes to make sure the search results dissapear after they click on a result */
function hideSearchBarOnPageChange(){
  $(".search-results-overlay").attr("style", "display:none");
  $(".search-results-backdrop").attr("style", "display:none");
  $("#loading-overlay").attr("style","display:none");
}

/* Adjust the layout of the menu on content pages (pages that look like toolbox.igus.com/something/something AND don't have a CTA to the side */
function moveMenuItems(){
  var thisURL = window.location.href
  var split_url = thisURL.split('/');
  if (split_url.length > 4) {
    document.getElementsByClassName('right-side-btns')[0].style.paddingRight = '20px'
  } else {
    document.getElementsByClassName('right-side-btns')[0].style.paddingRight = '0px'
  }
}

/* Runs functions when page loads */
Hubs.onLoad = function() {
  imageOverlay();
  swapVideoThumbnail();
  secondSearchBar();
  hideSearchBar();
  footerPlacement();
  moveMenuItems();
}

/* Runs functions when page changes*/
Hubs.onPageChange = function() {
  imageOverlay();
  swapVideoThumbnail();
  secondSearchBar();
  hideSearchBar();
  hideSearchBarOnPageChange();
  footerPlacement();
  moveMenuItems();
}

/* Runs functions when items load */
Hubs.onItemsLoaded = function() {
  imageOverlay();
  swapVideoThumbnail();
  secondSearchBar();
  hideSearchBar();
  footerPlacement();
  moveMenuItems();
}
