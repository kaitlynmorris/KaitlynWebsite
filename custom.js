$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){  // Increase animation speed to 1000ms
                window.location.hash = hash;
            });
        } // End if
    });

    $("#about").addClass("hidden").hide().fadeIn(500);
    $("#projects").addClass("hidden").hide().fadeIn(1000);
    $("#skills").addClass("hidden").hide().fadeIn(1500);
    $("#experience").addClass("hidden").hide().fadeIn(2000);
    $("#certifications").addClass("hidden").hide().fadeIn(2500);
    $("#contact").addClass("hidden").hide().fadeIn(3000);

    // Slide in sections when they enter the viewport.
    $(window).scroll(function() {
        $(".hidden").each(function() {
            let top_of_object = $(this).offset().top;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_object) {
                $(this).animate({"opacity":"1","margin-left":"0px"},1000);
            }
        });
    });

    $("section").hover(
        function() {
            $(this).css({
                "transition": "transform 0.3s",
                "transform": "scale(1.02)"
            });
        },
        function() {
            $(this).css({
                "transition": "transform 0.3s",
                "transform": "scale(1)"
            });
        }
    );
});