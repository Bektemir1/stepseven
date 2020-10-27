$('.burger').on('click', function (e) {
    e.preventDefault();
    $('.burger-line').toggleClass('menu-active')
    $('.menu-wrap').toggleClass('menu-active')


})
$(document).ready(function(){
   
    $('#content').load("./animations/main/data.html");
 

 
 });



   
