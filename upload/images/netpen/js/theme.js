//Jquery Dropdown Menu - 
$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.dropdown-content').slideDown(200);
        },
        function(){
            $(this).children('.dropdown-content').slideUp(200);
        }
    );
}); // end ready//SidebarjQuery(function($) {    $(".clickedbuttons").hide();    $(".buttons").click(function() {        $(".sidebar").animate({height: "hide", opacity: 0}, 500,            function() {                $(".forums").animate({width: "100%"}, 500);            });        $(this).hide();        $(".clickedbuttons").show();        $.cookie("sidebar","collapsed", {expires: 365});        return false;    });    $(".clickedbuttons").click(function() {        $(".forums").animate({width: "80%"}, 500,            function() {                $(".sidebar").animate({height: "show", opacity: 1}, 500);            });        $(this).hide();        $(".buttons").show();        $.cookie("sidebar","expanded", {expires: 365});        return false;    });    if($.cookie("sidebar") == "collapsed") {        $(".buttons").hide();        $(".clickedbuttons").show();        $(".forums").css("width","100%");        $(".sidebar").hide();    };});