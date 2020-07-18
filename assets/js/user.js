var rellax = new Rellax('.rellax');
$(".pagez").hide();
$(window).on("load",function(){
    $(".pagez").show();
     $(".loader-wrapper").fadeOut("slow");
    $('.previewimg').css("transition", "transform " + 0.01 * $('.previewimg').height() + "s ease");
    $(document).ready(function(){
        fixedFunction();
    });
});

$(document).ready(function(){
    $("body").niceScroll();
  $('#cta').hover(function() {
    $("#cta-icon").animate({top: '-=8px'}, 200);
  }, function() {
    $("#cta-icon").animate({top: '+=8px'}, 200);
  });
});

$(document).ready(function(){
    $(document).on('mouseover', '#case-card-1', function(){
        $("#case-img-1").removeClass("reverse-speed");
        console.log("over");
    });
    $(document).on('mouseout', '#case-card-1', function(){
        $("#case-img-1").addClass("reverse-speed");
        console.log("out");
    });

    $(document).on('mouseover', '#case-card-2', function(){
        $("#case-img-2").removeClass("reverse-speed");
        console.log("over");
    });
    $(document).on('mouseout', '#case-card-2', function(){
        $("#case-img-2").addClass("reverse-speed");
        console.log("out");
    });
    
    $(document).on('mouseover', '#case-card-3', function(){
        $("#case-img-3").removeClass("reverse-speed");
        console.log("over");
    });
    $(document).on('mouseout', '#case-card-3', function(){
        $("#case-img-3").addClass("reverse-speed");
        console.log("out");
    });
    
    $(document).on('mouseover', '#case-card-4', function(){
        $("#case-img-4").removeClass("reverse-speed");
        console.log("over");
    });
    $(document).on('mouseout', '#case-card-4', function(){
        $("#case-img-4").addClass("reverse-speed");
        console.log("out");
    });
});

$(document).ready(function(){
fixedFunction();
});
$(window).resize(function(){
fixedFunction();
});

function fixedFunction(){
var containerWidth = $(".pagez").outerWidth();
var elementWidth = $(".desk-nav-container").outerWidth();
var containerOffsetLeft = $(".pagez").offset().left;
var offsetPadding = 15;
var containerOffsetRight = containerOffsetLeft + containerWidth - elementWidth - offsetPadding;
	$(".desk-nav-container").css("left", containerOffsetRight);
}


