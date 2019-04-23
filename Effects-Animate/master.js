$(document).ready(function(){
                                /* EFFECTS  */
  /* FADE IN/OUT/TOGGLE */

  $('#btnFadeOut').click(function(){
    // $('#box').fadeOut();
    // $('#box').fadeOut('fast');
    // $('#box').fadeOut('slow');
    $('#box').fadeOut(3000);
      $('#btnFadeOut').text('Its Gone');
  });

  $('#btnFadeIn').click(function(){
    $('#box').fadeIn(3000);
  });

  $('#btnFadeTog').click(function(){
    $('#box').fadeToggle('fast');
  });


  /* SLIDE UP/DOWN/TOGGLE */

  $('#btnSlideUp').click(function(){
    $('#box').slideUp(2500);
  });

  $('#btnSlideDown').click(function(){
    $('#box').slideDown('slow');
  });

  $('#btnSlideTog').click(function(){
    $('#box').slideToggle('fast');
  });

  /* HOW TO MAKE EFFECTS STOP */
  $('#btnStop').click(function(){
    $('#box').stop();
  });

                              /* ANIMATE */
/*

  $('#moveRight').click(function(){
      $('#box2').animate({
          left:500
      });
  });

  $('#moveLeft').click(function(){
      $('#box2').animate({
          left:0
      });
  });

*/

    $('#moveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left:0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });

    $('#moveAround').click(function(){
        var box = $('#box2');

        box.animate({
            left: 480
        });
        box.animate({
            top: 100
        });
        box.animate({
            left: 0,
            top: 100
        });
        box.animate({
            left: 0,
            top:0
        });
    });

});
