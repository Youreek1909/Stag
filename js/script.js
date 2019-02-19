$(document).ready(function() {

  //test with icon menu
  $('#icon-menu').on('click', function() {
    console.log('Hi');
  });



  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
    $(this).addClass('slide-number__2-item-active').siblings().removeClass('slide-number__2-item-active');
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
    $(this).addClass('slide-number__2-item-active').siblings().removeClass('slide-number__2-item-active');
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
    $(this).addClass('slide-number__2-item-active').siblings().removeClass('slide-number__2-item-active');
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
    $(this).addClass('slide-number__2-item-active').siblings().removeClass('slide-number__2-item-active');
  });









});
