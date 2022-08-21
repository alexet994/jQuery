$(document).scroll(function () {
   if ($(document).width() < 1024)
      return false;
   if ($(document).scrollTop() > $('.fullPage').height() / 2)
      $("header").addClass("fixed")
   else
      $("header").removeClass("fixed")
});

$(".upBtn").on("click", function () {
   $("html, body").animate({
      scrollTop: 0
   }, 'slow')
})


$("#show-menu").on("click", function () {
   $("#hidden").animate({
      "right": 0
   }, 500);
})
$("#hidden .close").on("click", function () {
   $("#hidden").animate({
      "right": "-300px"
   }, 250);
})

$(document).ready(function () {
   $("#slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<div class="arow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
      nextArrow: '<div class="arow-next"><i class="fa-solid fa-arrow-right"></i></div>',
      infinite: true,
      variableWidth: true
   })
});