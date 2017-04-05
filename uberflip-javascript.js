<script>
/* Adds Header Navigation on Homepage Only */
/* Adds Header Navigation on Homepage Only */
function imageMapping(){
    var thisURL = window.location.href
    if (window.location.href.indexOf("toolbox.igus.com/?vip=yes") > -1 || thisURL == "http://toolbox.igus.com/" ){
         document.getElementById("large-top-nav").style.display = 'block';
         document.getElementById("medium-top-nav").style.display = 'block';
      }
    else {
        document.getElementById("large-top-nav").style.display = 'none';
        document.getElementById("medium-top-nav").style.display = 'none';
      }
}

/* Hides "Next Flipbook" on VIP Pages */
function hideSlideIn(){
    if (window.location.href.indexOf("vip=yes") > -1){
             document.getElementsByClassName("item-next-prev")[0].style.display = 'none';
    }
}

/* Removes AddThis from Homepage, Removes Bottom Icons & Change Icon Colors */
function changeAddthis(){
    var thisURL = window.location.href
    if (thisURL == "http://toolbox.igus.com/"){
         $('.addthis-smartlayers').css('display','none');
      }
    else if (window.location.href.indexOf("toolbox.igus.com/?vip=yes") > -1){
        $('.addthis-smartlayers').css('display','none');
      }
    else if (thisURL !== "http://toolbox.igus.com/"){
        /* Changes Colors of AddThis */
            $(window).load(function addthisChange(){
                document.getElementsByClassName("at-icon-wrapper")[0].style.backgroundColor = "#f58220";
                document.getElementsByClassName("at-icon-wrapper")[1].style.backgroundColor = "#f49849";
                document.getElementsByClassName("at-icon-wrapper")[2].style.backgroundColor = "#fcb476";
                document.getElementsByClassName("at-icon-wrapper")[3].style.backgroundColor = "#ffcca0";
                document.getElementsByClassName("at-icon-wrapper")[4].style.backgroundColor = "#f58220";
                document.getElementsByClassName("at-icon-wrapper")[5].style.backgroundColor = "#f49849";
                document.getElementsByClassName("at-icon-wrapper")[6].style.backgroundColor = "#fcb476";
                document.getElementsByClassName("at-icon-wrapper")[7].style.backgroundColor = "#ffcca0";
            });
        /* Makes AddThis Div Visiable After Color Change */
            $(window).load(function(){
             document.getElementById("at4-share").style.visibility = "visible";
            });
        /* Remove Bottom Icons */
            $(window).load(function(){
            $( ".addthis_toolbox" ).remove();
            })
        /* Shows AddThis */
         $('.addthis-smartlayers').css('display','block');
      }
    setTimeout(function() { changeAddthis() },3);
}

/* Modern Day Rick Roll (Will Delete Shortly) */
function easterEgg(){
    if (window.location.href.indexOf("fancy=yes") > -1){
        window.location.replace("https://www.youtube.com/watch?v=-BE476MvO_g");
    }
}

/* Run Fuctions On Page Load */
Hubs.onLoad = function() {
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
    $("p,h1,h2,h3,h4,li,a").each(function(){
      $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
    });
  /* Continuning VIP Paramater Across Links */
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  jQuery(document).ready(function ($) {
    var persistedQueryParam = getParameterByName('vip');
      if (persistedQueryParam && persistedQueryParam.length > 0) {
        $('[href]').each(function () {
        var elem = $(this);
        var href = elem.attr('href');
        elem.attr('href', href + (href.indexOf('?') != -1 ? '&' : '?') + 'vip=' + persistedQueryParam);
        });
    }
  });
  /* Hiding "Next Flipbook" On VIP Pages */
    hideSlideIn();
  /* Modern Day Rick Roll */
    easterEgg();
}

/* Runs Functions When Page Changes*/
Hubs.onPageChange = function() {
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
    $("p,h1,h2,h3,h4,li,a").each(function(){
      $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
    });
  /* Continuning VIP Paramater Across Links */
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  jQuery(document).ready(function ($) {
    var persistedQueryParam = getParameterByName('vip');
      if (persistedQueryParam && persistedQueryParam.length > 0) {
        $('[href]').each(function () {
        var elem = $(this);
        var href = elem.attr('href');
        elem.attr('href', href + (href.indexOf('?') != -1 ? '&' : '?') + 'vip=' + persistedQueryParam);
        });
    }
  });
  /* Hiding "Next Flipbook" On VIP Pages */
    hideSlideIn();
  /* Modern Day Rick Roll */
    easterEgg();
    }

/* Runs Functions When Items Load */
Hubs.onItemsLoaded = function() {
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
    $("p,h1,h2,h3,h4,li,a").each(function(){
      $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
    });
  /* Continuning VIP Paramater Across Links */
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  jQuery(document).ready(function ($) {
    var persistedQueryParam = getParameterByName('vip');
      if (persistedQueryParam && persistedQueryParam.length > 0) {
        $('[href]').each(function () {
        var elem = $(this);
        var href = elem.attr('href');
        elem.attr('href', href + (href.indexOf('?') != -1 ? '&' : '?') + 'vip=' + persistedQueryParam);
        });
    }
  });
  /* Hiding "Next Flipbook" On VIP Pages */
    hideSlideIn();
  /* Modern Day Rick Roll */
    easterEgg();
    }

/* Creating VIP Param */
 var hideWithThisParam = 'vip';
 var params = {};
    $.each(location.search.substr(1).split('&'), $.proxy(function(idx, pair) {
    if (pair === 'yes') return;

var parts = pair.split('=');
    this[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
    }, params));
    $.each(params, function(idx, val){
    if(idx == hideWithThisParam) {
    $('.blocking-cta').removeClass('blocking-cta');
    $('.block-cta').remove();
    $('.possible-block').removeClass('possible-block');
    Hubs.CTAs.expandAfterCta();
}
});

/* Creating Referral Param */
var hideWithThisParam = 'referral';
var params = {};
   $.each(location.search.substr(1).split('&'), $.proxy(function(idx, pair) {
   if (pair === 'yes') return;

var parts = pair.split('=');
   this[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
   }, params));
   $.each(params, function(idx, val){
   if(idx == hideWithThisParam) {
   $('.blocking-cta').removeClass('blocking-cta');
   $('.block-cta').remove();
   $('.possible-block').removeClass('possible-block');
   Hubs.CTAs.expandAfterCta();
}
});
</script>
