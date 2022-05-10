
if($(window).width() < 652){
    $( "#where" ).load( "mobileindex.html" );
}
if($(window).width() > 653 &&  $(window).width() < 991){
    $( "#where" ).load( "tabletindex.html" );
}
if($(window).width() >= 992 ){
    $( "#where" ).load( "desktopindex.html", function (){
        $(document).ready(function($) {
            $(".slick-carousel").slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1500,
                fade: true,
            });
            })
    });
    
}
