
//  change background and color on mouseover : --> START
$(document).ready(function () {
    // bridal box
    $('#boxbride').mouseover(function () {
        $('#bridal').css("color", "#ffffff");
        //$('#bridal').css("color", "#ffd201");
        //$('#bridal').css("font-variant", "small-caps");
        //$('#bridal').css("font-family", "Open Sans Light");
        $('#bridalcontent').css("font-style", "normal");
    });
    $('#boxbride').mouseout(function () {
        $('#bridal').css("color", "#c93794");
        $('#bridal').css("font-variant", "normal");
        //$('#bridal').css("font-family", "Dancing Script");
        $('#bridalcontent').css("font-style", "italic");
    });

    // casual box
    $('#boxcasual').mouseover(function () {
        $('#casual').css("color", "#fff");
        //$('#casual').css("color", "#ffd201");
        //$('#casual').css("font-variant", "small-caps");
        //$('#casual').css("font-family", "Open Sans Light");
        $('#casualcontent').css("color", "#fff");
        $('#casualcontent').css("font-style", "normal");
    });
    $('#boxcasual').mouseout(function () {
        $('#casual').css("color", "#fff");
        $('#casual').css("font-variant", "normal");
        //$('#casual').css("font-family", "Dancing Script");
        $('#casualcontent').css("color", "#fff");
        $('#casualcontent').css("font-style", "italic");
    });

    // corporate box
    $('#boxcorp').mouseover(function () {
        $('#corp').css("color", "#ffffff");
        //$('#corp').css("color", "#ffd201");
        //$('#corp').css("font-variant", "small-caps");
        //$('#corp').css("font-family", "Open Sans Light");
        $('#corpcontent').css("font-style", "normal");
    });
    $('#boxcorp').mouseout(function () {
        $('#corp').css("color", "#c93794");
        $('#corp').css("font-variant", "normal");
        //$('#corp').css("font-family", "Dancing Script");
        $('#corpcontent').css("font-style", "italic");
    });
});

//  change background and color on mouseover : /-->END



//  LINK BUTTON SCROLL

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

jQuery(document).ready(function ($) {
    $('a[href^="#"]').on('click', function (e) {
        var target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});