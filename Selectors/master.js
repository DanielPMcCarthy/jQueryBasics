
/* #1 HEADING SELECTION EXAMPLES USING .hide()

    $('h3').hide();  // Hides All h3 Headers
    $('h3#heading-one').hide(); // Hides All h3 Headers With id="heading-one"

*/

// #2 PARAGRAPH AND LIST SELECTION EXAMPLES USING CSS METHODS

  // All <span></span> Inside A <p></p> Are Red
  $('p span').css('color', 'red');

  // The First <li></li> Item In A <ul></ul> Will Be Red
  $('ul#list li:first').css('color', 'red');

  // The Last <li></li> Item In A <ul></ul> Will Be Green
  $('ul#list li:last').css('color', 'green');

  // Every Even List Item Has A Background-Color Of Yellow
  $('ul#list li:even').css('background-color', 'yellow');

  // Every Odd List Item Has A Background-Color Of Grey
  $('ul#list li:odd').css('background-color', 'grey');

  // Every 3rd List Item Does Not Have A Bullet
  $('ul#list li:nth-child(3n)').css('list-style', 'none');


/* #3 INPUT SELECTION EXAMPLES USING .hide()

  // HIDE BUTTON 1
  $(':button').hide();

  // HIDE BUTTON 2 (SUBMIT)
  $(':submit').hide();

*/

  // HIDE TEXT BOX (ACTIVE)
  $(':text').hide();

// #4 LINKS & VALUES WITHIN SELECTION EXAMPLES USING CSS METHODS

  // TARGET ATTRIBUTES
  $('[href]').css('color', 'red');
  // TARGET ATTRIBUTE VALUES
  $('a[href="http://bing.com"]').css('color', 'green');


  /*
  HIDES EVERYTHING USING '*'

  $('*').hide();

  */
