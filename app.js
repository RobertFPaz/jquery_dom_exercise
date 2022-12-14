$(document).ready(function (){
    console.log("Let's get ready to pary with jQuery");
})
$('img').addClass('image-center');
$('p').last().remove();
$('#title').css('font-size', (Math.floor(Math.random() * 101)).toString());
$('ol').append('<li>List item added</li>')
$('aside').empty().append('<p>Sorry for the list existence</p>')
$('input').change(function(){
    $('body').css('background-color', `rgb(${$('input').eq(0).val()}, ${$('input').eq(1).val()}, ${$('input').eq(2).val()})`);
})
$('img').on('click', function(){
    $(this).remove();
})
