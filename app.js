console.log("you made it!");

$('#nav-button').on('click', function(){
  $('nav').toggle();
  if ($(this).hasClass('fa-times')){
    $(this).removeClass('fa-times').addClass('fa-bars');
  }
  else {
    $(this).addClass('fa-times').removeClass('fa-bars');
  }

});
