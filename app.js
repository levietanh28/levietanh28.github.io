

$(function () {
$('.Home').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi1').offset().top},800);
});   
$('.About').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi2').offset().top},800);
});
$('.Skill').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi3').offset().top},800);
});
$('.Education').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi4').offset().top},800);
});
$('.Project').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi5').offset().top},800);
});
$('.Contact').click(function (e) { 
    e.preventDefault();
$('html').animate({
    scrollTop:$('.khoi6').offset().top},800);
});

});

$(window).scroll(function () { 
    console.log(window.pageYOffset);

   
    var vtw = window.pageYOffset;
    var    vt2 =  $('.khoi2').offset().top;
    var   vt3 =  $('.khoi3').offset().top;
    var    vt4 =  $('.khoi4').offset().top;
    var   vt5 =  $('.khoi5').offset().top;
    var   vt6 =  $('.khoi6').offset().top;



    

    if (vtw >= vt6) {
        $('.item').removeClass('active');
        $('.item6').addClass('active');
    } else  if (vtw >=vt5) {
        $('.item').removeClass('active');
        $('.item5').addClass('active');
    } 
     else  if (vtw >=vt4) {
        $('.item').removeClass('active');
        $('.item4').addClass('active');
    } 
     else  if (vtw >=vt3) {
        $('.item').removeClass('active');
        $('.item3').addClass('active');
    } 
     else  if (vtw >=vt2) {
        $('.item').removeClass('active');
        $('.item2').addClass('active');
    } 
     else  if (vtw <vt2) {
        $('.item').removeClass('active');
        $('.item1').addClass('active');
    } 

        
  
   

    
});













$(function () {
    $('.bl').click(function (e) { 
        e.preventDefault();
        $('.bl').removeClass('active');
        $(this).addClass('active');
    $(this).data('loc');
    var loc=$(this).data('loc');
$('li.chialayer').each(function (index, element) {
    if ($(this).hasClass(loc)) {
    $(this).show(400);
        
    } else {
        $(this).hide(400);
    }
});

   

});
});

