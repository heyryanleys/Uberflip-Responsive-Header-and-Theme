/* Shows email opt-in for Canada */
function emailOptIn(){
  function firstLoop(){
    if($('.hidden-cta-fields').css('top') == '25px'){
      $.get("http://ipinfo.io", function(response) {
          console.log(response.ip, response.country);
          if (response.country != 'US') {
              $('[data-form-field-id="305859"]').attr("style", "display: block !important");
              $('[data-mapping="ryan_test"]').attr("style", "display: block !important");
              clearInterval(first);
            }
          else {
            $('[data-form-field-id="305859"]').attr("style", "display: none !important");
            $('[data-mapping="ryan_test"]').attr("style", "display: none !important");
            clearInterval(first);
          }
        }, "jsonp");
      }
    }
    var first = window.setInterval(firstLoop, 200);
  }

/* Adds Arrow CTA */
function nextArrow() {
  /* Hides Arrow on Page Load*/
  document.getElementById("arrow").style.display = 'none';
  /* Hides Arrow on Pages Without Next Content */
  if ($(".no-more:contains('No More')").length) {
    $('.arrow').hide();
  } else if ($("h6").text().indexOf('Next') !== -1 && window.location.href.indexOf("vip=yes") <= -1) {
    /* Shows Arrow on Pages With Next Content*/
    $(function() {
      $(".nextup").delay(10000).fadeIn();
    });
    /* Adds X to Arrow */
    document.getElementById('closeButton').addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.style.display = 'none';
    }, false);
  } else {
    /* Hides Arrow on Everything Else */
    document.getElementById("arrow").style.display = 'none';
  }
}

/* Adds Header Navigation on Homepage Only */
function imageMapping() {
  var thisURL = window.location.href
  if (window.location.href.indexOf("toolbox.igus.com/?") > -1 || thisURL == "http://toolbox.igus.com/") {
    document.getElementById("large-top-nav").style.display = 'block';
    document.getElementById("medium-top-nav").style.display = 'block';

  } else {
    document.getElementById("large-top-nav").style.display = 'none';
    document.getElementById("medium-top-nav").style.display = 'none';
  }
}

/* Hides "Next Flipbook" on VIP Pages */
function hideSlideIn() {
  if (window.location.href.indexOf("vip=yes") > -1) {
    document.getElementsByClassName("item-next-prev")[0].style.display = 'none';
  }
}

/* Removes AddThis from Homepage, Removes Bottom Icons & Change Icon Colors */
function changeAddthis() {
  var thisURL = window.location.href
  if (thisURL == "http://toolbox.igus.com/") {
    $('.addthis-smartlayers').css('display', 'none');
  } else if (window.location.href.indexOf("toolbox.igus.com/?") > -1) {
    $('.addthis-smartlayers').css('display', 'none');
  } else if (thisURL !== "http://toolbox.igus.com/") {
    /* Changes Colors of AddThis */
    $(window).load(function addthisChange() {
      document.getElementsByClassName("at-floatingbar-inner")[0].style.display="none";
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
    $(window).load(function() {
      document.getElementById("at4-share").style.visibility = "visible";
    });
    /* Remove Bottom Icons */
    $(window).load(function() {
      $(".addthis_toolbox").remove();
    })
    /* Shows AddThis */
    $('.addthis-smartlayers').css('display', 'block');
  }
  setTimeout(function() {
    changeAddthis()
  }, 3);
}

/* Modern Day Rick Roll (Will Delete Shortly) */
function easterEgg() {
  if (window.location.href.indexOf("fancy=yes") > -1) {
    window.location.replace("https://www.youtube.com/watch?v=-BE476MvO_g");
  }
}

/* Run Fuctions On Page Load */
Hubs.onLoad = function() {
  emailOptIn();
  /* CTA Arrow for Next Content Slidein */
  nextArrow();
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
  /* $("p,h1,h2,h3,h4,li,a").each(function() {
    $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
  }); */
  /* Continuning VIP Paramater Across Links */
  $('a, area').each(function() {
    var href = this.href;
    if (window.location.href.indexOf("vip=yes") > -1) {
      href = href + '?vip=yes';
    } else {
      href = href + '';
    }
    $(this).attr('href', href);
  });
  /* Hiding "Next Flipbook" On VIP Pages */
  hideSlideIn();
  /* Modern Day Rick Roll */
  easterEgg();

}

/* Runs Functions When Page Changes*/
Hubs.onPageChange = function() {
  emailOptIn();
  /* CTA Arrow for Next Content Slidein */
  nextArrow();
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
  /* $("p,h1,h2,h3,h4,li,a").each(function() {
    $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
  }); */
  /* Continuning VIP Paramater Across Links */
  $('a, area').each(function() {
    var href = this.href;
    if (window.location.href.indexOf("vip=yes") > -1) {
      href = href + '?vip=yes';
    } else {
      href = href + '';
    }
    $(this).attr('href', href);
  });
  /* Hiding "Next Flipbook" On VIP Pages */
  hideSlideIn();
  /* Modern Day Rick Roll */
  easterEgg();
}

/* Runs Functions When Items Load */
Hubs.onItemsLoaded = function() {
  emailOptIn();
  /* CTA Arrow for Next Content Slidein */
  nextArrow();
  /* Removing AddThis on Homepage and Changes Icon Colors*/
  changeAddthis();
  /* Adding Header Navigation */
  imageMapping();
  /* Superscripting Trademarks */
  /* $("p,h1,h2,h3,h4,li,a").each(function() {
    $(this).html($(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;   </sup>'));
  }); */
  /* Continuning VIP Paramater Across Links */
  $('a, area').each(function() {
    var href = this.href;
    if (window.location.href.indexOf("vip=yes") > -1) {
      href = href + '?vip=yes';
    } else {
      href = href + '';
    }
    $(this).attr('href', href);
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
$.each(params, function(idx, val) {
  if (idx == hideWithThisParam) {
    $('.blocking-cta').removeClass('blocking-cta');
    $('.block-cta').remove();
    $('.possible-block').removeClass('possible-block');
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
$.each(params, function(idx, val) {
  if (idx == hideWithThisParam) {
    $('.blocking-cta').removeClass('blocking-cta');
    $('.block-cta').remove();
    $('.possible-block').removeClass('possible-block');
  }
});

/* Creating Backup Param */
var hideWithThisParam = 'igushcta';
var params = {};
$.each(location.search.substr(1).split('&'), $.proxy(function(idx, pair) {
  if (pair === 'si') return;

  var parts = pair.split('=');
  this[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, ' '));
}, params));
$.each(params, function(idx, val) {
  if (idx == hideWithThisParam) {
    $('.blocking-cta').removeClass('blocking-cta');
    $('.block-cta').remove();
    $('.possible-block').removeClass('possible-block');
  }
});
