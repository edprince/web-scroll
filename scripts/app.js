//Author: Ed Prince
//Content: Web Scroll app.js
$(document).ready(function(){
  main();
});

function main(){
  var id = $('.ws').id;
  var evenDivs = $('.ws-wrapper div:nth-child(even)');
  var oddDivs = $('.ws-wrapper div:nth-child(odd)');
  var length = $('.ws-wrapper div').length;

  for (x = 1; x <= length; x ++) {
    var el = $('.ws-wrapper div:nth-child(' + x + ')');
    el.attr('id', 'ws-' + x);
    if (x % 2 === 0) {
      //Even div, assign class
      el.addClass('even');
    } else {
      el.addClass('odd');
    }
    el.append('<a></a>');
    if (x < length) {
      $('body div:nth-child(' + x + ') a')
        .attr('href', '#ws-' + (x + 1))
        .append('<i></i>');
      $('body div:nth-child(' + x + ') a i').addClass('ion-chevron-down');
    }

  }

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}



