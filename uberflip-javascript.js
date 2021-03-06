<script>
(function($, Hubs, undefined) {
/* Adds Header Navigation on Homepage Only */
function imageOverlay() {
  var thisURL = window.location.href
    if (window.location.href.indexOf("toolbox.igus.com/?") > -1 || thisURL == "https://toolbox.igus.com/") {
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
  var oldSrc = 'https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fcontent.cdntwrk.com%2Ffiles%2FaHViPTY2Mzg0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVhOGIxZmE3MmM2OWYuanBnJnZlcnNpb249MDAwMCZzaWc9ZWRiOThmNTZlMDI3N2I1ODAzNzc4NmE2MDE2NDE3YmI%25253D&size=1&version=1519067047&sig=814b390454840374fcba95b5bca8bd0f&default=hubs%2Ftilebg-videos.jpg';
  var newSrc = 'https://content.cdntwrk.com/files/aHViPTY2Mzg0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVhZDUwNDY5ZjMwNjYucG5nJnZlcnNpb249MDAwMCZzaWc9ZmU5OWU0NTNkMDEzYWY5M2RkZjI2NDhmOTZhYmMzNjg%253D';
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

/* Creating the ability for you to include '?vip=yes' or '?referral=yes' to the end of a URL to get past the gate on that page without having to fill out your information */
function bypassGate(){
  var vipParam = 'vip';
  var refParam = 'referral';
  var params = {};
  $.each(location.search.substr(1).split('&'), $.proxy(function(idx, pair) {
    if (pair === 'yes') return;

    var parts = pair.split('=');
    this[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
  }, params));
  $.each(params, function(idx, val) {
    if (idx == vipParam || idx == refParam) {
      $('.blocking-cta').removeClass('blocking-cta');
      $('.block-cta').remove();
      $('.possible-block').removeClass('possible-block');
      $('.hide-embed').removeClass('hide-embed');
    }
  });
}

/* Makes it so if you are on a page that has 'vip=yes' in it, the paramater '?vip=yes' will get past to the next page you visit.  This is so anyone who bypasses the gates with the VIP paramater doesn't have to do that for every piece of content */
function vipYesPasser(){
  $('a, area').each(function() {
    var href = this.href;
    if (window.location.href.indexOf("vip=yes") > -1) {
      href = href + '?vip=yes';
    } else {
      href = href + '';
    }
    $(this).attr('href', href);
  });
}

/* This function hides the email opt in form field when the visitor is coming from the US */
function canadaOptIn(){
  if($('.cta.setValues > .fields-revealed').css('top') == '25px'){
      console.log('hey');
  $.get("http://ipinfo.io", function(response) {
      console.log(response.ip, response.country);
      if (response.country == 'US') {
        	$('.cta-field-section.one-line.opt-in-section').hide();
          $('.opt-in').prop('checked', true);
          clearInterval(waitingforCTA);
      }
   }, "jsonp")
 }
   else{
     setTimeout(canadaOptIn, 200);
   }
  }

/* Removes AddThis from Homepage, Removes Bottom Icons & Change Icon Colors */
function changeAddthis() {
  var thisURL = window.location.href
  if (thisURL == "https://toolbox.igus.com/" || thisURL.indexOf("toolbox.igus.com/?") > -1) {
    $('.addthis-smartlayers').css('display', 'none');
  }
}

/* Adds Google Analytics Tracking for CTAs */
function toolboxCTAWrapper(){
  function toolboxCTA(){
    if($('.cta.setValues > .fields-revealed').css('top') == '25px'){
      $('.cta-button').attr({
        onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Service', 'eventAction' : 'Download', 'eventLabel' : 'Toolbox CTA Submit' })",
      });
      clearInterval(toolboxCTATimer)
    }
  }
    var toolboxCTATimer = window.setInterval(toolboxCTA, 2000);
}

/* Adds Google Analytics Tracking for Download Link */
function toolboxDownload(){
  $('.download-pdf').attr({
    onclick: "dataLayer.push({ 'event' :  'trackEvent', 'eventCategory' : 'Service', 'eventAction' : 'Download', 'eventLabel' : 'Toolbox PDF Download' })",
  });
}

/* Runs functions when page loads */
Hubs.onLoad = function() {
  imageOverlay();
  swapVideoThumbnail();
  secondSearchBar();
  hideSearchBar();
  footerPlacement();
  moveMenuItems();
  bypassGate();
  vipYesPasser();
  canadaOptIn();
  changeAddthis();
  toolboxCTAWrapper();
  toolboxDownload();
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
  bypassGate()
  vipYesPasser();
  canadaOptIn();
  changeAddthis();
  toolboxCTAWrapper();
  toolboxDownload();
}

/* Runs functions when items load */
Hubs.onItemsLoaded = function() {
  imageOverlay();
  swapVideoThumbnail();
  secondSearchBar();
  hideSearchBar();
  footerPlacement();
  moveMenuItems();
  bypassGate();
  vipYesPasser();
  canadaOptIn();
  changeAddthis();
  toolboxCTAWrapper();
  toolboxDownload();
}

}(window.jQuery, window.Hubs));
</script>
