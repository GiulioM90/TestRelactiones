
if($(window).width() < 652){
    $( "#where" ).load( "./Views/mobileindex.html" );
}
if($(window).width() > 653 &&  $(window).width() < 991){
    $( "#where" ).load( "./Views/tabletindex.html", function (){
        $('#firstSection').load("./Views/Components/first-section.html");
        $('#secondSection').load("./Views/Components/second-section.html");
        $('#forthSection').load("./Views/Components/forth-section.html");
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
if($(window).width() >= 992 ){
    $( "#where" ).load( "./Views/desktopindex.html", function (){
        $('#firstSection').load("./Views/Components/first-section.html");
        $('#secondSection').load("./Views/Components/second-section.html");
        $('#forthSection').load("./Views/Components/forth-section.html");
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
