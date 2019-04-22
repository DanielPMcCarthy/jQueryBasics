// .ready() ENSURES ENTIRE PAGE IS LOADED BEFORE ANY jQuery/JS RUNS
$(document).ready(function(){

  /*                      <-- .click() & .on() EVENTS -->

  // EXAMPLE OF .click() TRIGGERING ANONYMOUS function() CONTAINING POP-UP ALERT
  $('#btn1').click(function(){
    alert('Button Clicked!')
  });

  // EXAMPLE OF .on() PERFORMING SAME FUNTIONALITY AS .click()
  $('#btn1').on('click', function(){
    alert('Button Clicked!')
  })

  .on()- THIS HIDES .para1 WHEN CLICKED
  $('#btn1').on('click', function(){
    $('.para1').hide();
  })

  // RANDOM EXAMPLE OF .on()- THIS TOGGLES .para1 WHEN CLICKED
  $('#btn1').on('click', function(){
    $('.para1').toggle();
  })

  // THIS RESTORES .para1 CLASS AFTER IT HAS BEEN HIDDEN BY ABOVE .toggle()
  $('#btn2').on('click', function(){
    $('.para1').show();
  });

  // .dblclick() WILL ONLY FUNCTION WHEN SELECTED ELEMENT IS DOUBLE-CLICKED
  $('#btn1').dblclick(function(){
    $('.para1').toggle();
  });
*/


/*                          <-- MOUSE EVENTS -->
  // .hover() WILL ONLY FUNCTION WHEN SELECTED ELEMENT IS HOVERED OVER BY MOUSE
  $('#btn1').hover(function(){
    $('.para1').toggle();
  });

  // .on() WITH AN ARGUMENT OF HOVER AND ANONYMOUS FUNCTION TO SHOW .para1
  $('#btn1').on('hover', function(){
    $('.para1').show();
  });

  // PERFORMS ONE-HALF OF ABOVE 'hover' FUNCTION
  $('#btn1').on('mouseenter', function(){
    $('.para1').toggle();
  });

  // PERFORMS ONE-HALF OF ABOVE 'hover' FUNCTION
  $('#btn1').on('mouseleave', function(){
    $('.para1').toggle();
  });


  // MAKES .para1 APPEAR/DISAPPEAR WHEN MOUSE MOVE ON/AROUND Button 1
  $('#btn1').on('mousemove', function(){
    $('.para1').toggle();
  });

  // TOGGLES .para1 ON/OFF WHEN MOUSE IS PRESSED DOWN
  $('#btn1').on('mousedown', function(){
    $('.para1').toggle();
  });

  // COMBINES WITH ABOVE TO MAKE .para1 TURN ON/OFF IN ONE DOWN/UP MOTION
  $('#btn1').on('mouseup', function(){
    $('.para1').toggle();
  });

*/


/*             <-- PASSING OPTIONAL PARAMETERS FOR AN EVENT -->

  $('#btn1').click(function(e){
    alert(e.currentTarget.id);
    alert(e.currentTarget.innerHTML);
    alert(e.currentTarget.outerHTML);
    alert(e.currentTarget.className);
  });

  // OPEN UP CHROME DEV TOOL 'CONSOLE' TO VIEW EXACT MOUSE COORDINATES
  $('#btn1').on('mousemove', function(e){
      console.log('Coords: Y: ' +e.clientY+ " X: " +e.clientX);
  });

  // OPEN UP CHROME DEV TOOL 'CONSOLE' TO VIEW EXACT PAGE COORDINATES
  $(document).on('mousemove', function(e){
      console.log('Coords: Y: ' +e.clientY+ " X: " +e.clientX);
  });

  // TAKES SAME FUNCTIONALITY AS ABOVE BUT ADDS IT TO WEBPAGE FOR YOU TO SEE
  $(document).on('mousemove', function(e){
      $('#coords').html('Coords: Y: ' +e.clientY+ " X: " +e.clientX);
  });

*/

/*                      <-- FOCUS EVENT TYPES -->

  $('input').focus(function(){
    alert('Get Focused');
  })

  // HOW TO CHANGE INPUT BACKGROUND COLOR WHEN IT IS CLICKED INTO (PERMANENT)
  $('input').focus(function(){
    // $('input#name').css('background', 'pink'); // OLD WAY
    $(this).css('background', 'pink'); // NEW WAY
  })

  // HOW TO COMBINE ABOVE SO ONCE CLICKED OUT - INPUT CHANGES BACK TO WHITE
  $('input').blur(function(){
    // $('input#name').css('background', 'pink'); // OLD WAY
    $(this).css('background', 'white'); // NEW WAY
  })

*/


/*                      <-- KEY EVENT TYPES -->

  // SHOWS YOU THE VALUES YOU ARE TYPING INTO THE INPUT BOX IN THE DEV CONSOLE
  $('input').keyup(function(e){
    console.log(e.target.value);
  });

*/


/*                      <-- SELECT MENU EVENTS -->

  // ALERTS YOU AFTER DIFFERENT GENDER HAS BEEN SELECTED VIA DROPDOWN BOX
  $('select#gender').change(function(){
    alert('Gender Changed');
  })

  // ALERTS YOU OF THE VALUE OF THE DIFFERENT GENDER SELECTED VIA DROPDOWN BOX
  $('select#gender').change(function(e){
    alert(e.target.value);
  })

*/

 // SUPPOSED TO SHOW THE VALUE USER TYPED IN THE CONSOLE- DID NOT WORK FOR ME
  $('#form').submit(function(e){
      e.preventDefault();
      var name = $('input#name').val();
      console.log(name);
  });




});
