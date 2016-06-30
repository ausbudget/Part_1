console.log("you made it!");

$('#nav-button').on('click', function(){
  $('nav').toggle();
  if ($(this).hasClass('fa-bars')){
    $(this).addClass('fa-times').removeClass('fa-bars');
  }
  else {
    $(this).removeClass('fa-times').addClass('fa-bars');
  }

});
