$('.close').click(function(){
  console.log('ciao');
  //$('.hamburger-menu').removeClass('active');
  $('.hamburger-menu').toggleClass('active');
});
 $('.fas.fa-bars').click(function(){
   console.log('ciao barra');
  // $('.hamburger-menu').addClass('active');
   $('.hamburger-menu').toggleClass('active');

 });
