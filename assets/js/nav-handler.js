$(document).ready(function(){
    $("#other-gallery").hide();
    $('#tab-menu-1').click(function(){
        $(this).removeClass('txt-faded');
        $('#tab-menu-2').addClass('txt-faded');
        $('#tab-menu-3').addClass('txt-faded');
        $('#slctd-1').removeClass('faded');
        $('#slctd-2').addClass('faded');
        $('#slctd-3').addClass('faded');
        $("#ui-gallery").fadeIn(300);
        $("#other-gallery").fadeOut(300);
    });
    $('#tab-menu-2').click(function(){
        $(this).removeClass('txt-faded');
        $('#tab-menu-1').addClass('txt-faded');
        $('#tab-menu-3').addClass('txt-faded');
        $('#slctd-1').addClass('faded');
        $('#slctd-2').removeClass('faded');
        $('#slctd-3').addClass('faded');
        $("#ui-gallery").fadeOut(300);
        $("#other-gallery").fadeIn(300);
    });
    $('#tab-menu-3').click(function(){
        $(this).removeClass('txt-faded');
        $('#tab-menu-1').addClass('txt-faded');
        $('#tab-menu-2').addClass('txt-faded');
        $('#slctd-1').addClass('faded');
        $('#slctd-2').addClass('faded');
        $('#slctd-3').removeClass('faded');
    });
});

$(document).ready(function(){
     $("#works-btn-4").click(function(){
        $("#works").load("/kai-access.html");
    });
});