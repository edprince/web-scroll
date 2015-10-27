$(document).ready(function(){
  main();
});

function main(){

  //Any even ws id should be light (dark foreground)
  //Any odd ws id should be dark (light foreground)
  
  //Auto gen all div id's
  //Retrieve the number of ws divs and assign id's
  //Initialize variables
  var id = $('.ws').id;
  var evenDivs, oddDivs, length = $('body div:nth-child(even)');
  var oddDivs = $('body div:nth-child(odd)');
  var length = $('body div').length

  for (x = 1; x <= length; x ++) {
    var el = $('body div:nth-child(' + x + ')');
    el.attr('id', 'ws-' + x);
    if (x % 2 === 0) {
      //Even div, assign class
      el.addClass('even');
      console.log("Added even");
    } else {
      el.addClass('odd');
      console.log("Added odd");
    }
    el.append('<a></a>');
    $('body div:nth-child(' + x + ') a')
      .attr('href', '#ws-' + (x + 1));
      .append('<i></i>');
    $('body div:nth-child(' + x + ') a i').addClass('ion-chevron-down');

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



