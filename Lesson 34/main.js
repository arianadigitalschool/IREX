//jquery
$('myElement').hide();

//manipulate with HTML 
// $('#myElement').text("New Text");

$('.btn').click(function(){
    console.log($('#myElement').text());

    $('#myElement').text('Testing text');
    $('#myElement').append(' <br> Extra text');
});