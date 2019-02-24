$(document).ready(function() {

  //test with icon menu
  $('#icon-menu').on('click', function() {
    console.log('Hi');
  });



  // Activate Carousel
  $("#myCarousel").carousel();


  $('#myCarousel').on('slide.bs.carousel', function () {
    if ($('#item1').hasClass('active')) {
      $('#item01').toggleClass('checked').siblings().removeClass('checked');
    } else if ($('#item2').hasClass('active')) {
      $('#item02').toggleClass('checked').siblings().removeClass('checked');
    } else if ($('#item3').hasClass('active')) {
      $('#item03').toggleClass('checked').siblings().removeClass('checked');
    } else if ($('#item4').hasClass('active')) {
      $('#item04').toggleClass('checked').siblings().removeClass('checked');
    }
  });


});
