var rellax = new Rellax('.rellax');
$(".pagez").hide();
$(window).on("load",function(){
    $(".pagez").show();
     $(".loader-wrapper").fadeOut("slow");
    $('.previewimg').css("transition", "transform " + 0.01 * $('.previewimg').height() + "s ease");
});

$(document).ready(function(){
  $('#cta').hover(function() {
    $("#cta-icon").animate({top: '-=8px'}, 200);
  }, function() {
    $("#cta-icon").animate({top: '+=8px'}, 200);
  });
});
