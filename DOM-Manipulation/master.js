/* HOW TO USE jQuery TO ADD CSS STYLING AND HTML TEXT */

$(document).ready(function(){

// $('p.para1').css('color', 'red'); BASIC COLOR CHANGE
//$('p.para1').css({color: 'red', background:'#ccc', });
// $('p.para2').addClass('myClass');
// $('p.para2').removeClass('myClass');

/* $('#btn1').click(function(){
$('p.para2').toggleClass('myClass');
}); */

// $('#myDiv').text('Hello World');

// .html ALLOWS YOU TO WRITE htmL IN jQuery
// $('#myDiv').html('<h3>Hello World</h3>');

/* THIS CREATES AN ALERT THAT SAYS 'Hello World' BEFORE PAGE LOADS
alert($('#myDiv').text()); */

/*
$('ul').append('<li>Append List Item</li>'); // ADDS ITEM TO END OF LIST
$('ul').prepend('<li>Prepend List Item</li>'); // ADDS ITEM TO FRONT OF LIST

$('.para1').appendTo('.para2'); // PUTS .para1 AFTER .para2
$('.para1').prependTo('.para2'); // PUTS .para1 BACK BEORE .para2 AGAIN

$('ul').before('<h4>Hello</h4>'); // ADDS 'Hello' BEFORE THE <ul>
$('ul').after('<h4>World</h4>'); // ADDS 'World' AFTER THE <ul>

$('ul').empty(); // TAKES ALL THE INNER ELEMENTS OF THE <ul> OUT
$('ul').detach(); // DETACHES THE <ul> FROM THE DOM

$('a').attr('target', '_blank'); // OPENS UP NEW TAB WHEN 'Google' IS CLICKED
alert($('a').attr('href')); // ALERT WITH ATTRIBUTE 'href' OF ELEMENT 'a'

$('a').removeAttr('target');
*/

// $('p').wrap('<h1>'); // ALL THE PARAGRAPHS ARE WRAPPED IN AN h1
// $('p').wrapAll('<h1>');



// BE ABLE TO HIT ENTER AND ADD ITEM TO LIST THROUGH INPUT BOX
$('#newItem').keyup(function(e){
var code = e.which;
if(code == 13){ // code == 13 means 'hit enter'
e.preventDefault();
$('ul').append('<li>'+e.target.value+'</li>');
}
});



/*
var myArr = ['Dan', 'Karen', 'Charlie', 'Mollie'];

$.each(myArr, function(i, val){
$('#users').append('<li>'+val+'</li>');
});
*/


var newArr = $('ul#list li').toArray();
// console.log(newArr);
$.each(newArr, function(i, val){
console.log(val.innerHTML);
});

});
