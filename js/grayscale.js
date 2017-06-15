/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


var logoBigTopDistance = $('.js-logo--big').offset().top,
    logoSmall = $('.js-logo--small');
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if (window.scrollY > logoBigTopDistance) {
      logoSmall.addClass('logo--small--show');
    } else {
      logoSmall.removeClass('logo--small--show');
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Add App Preview Video

// Load video after document has loaded
document.onreadystatechange = function () {
  // console.log("readyState = " + document.readyState);
  if (document.readyState == "complete") {
    loadVideo();
  }
};

function loadVideo() {
    videoWrapper = document.getElementById("app-preview-video-wrapper");
    video = document.getElementById("app-preview-video");
    // video.src = "vid/tunedeck-app-preview.m4v";
    // video.src = "vid/Tunedeck App Preview source 1.m4v";
    // videoSource = document.getElementById("app-preview-video-source");
    // videoSource.setAttribute("src","vid/tunedeck-app-preview.mp4");
    videoCover = document.getElementById("app-preview-video-cover");
    videoPlayButton = document.getElementById("play-button-wrapper");
    video.load();
    videoWrapper.className = videoWrapper.className + " opaque"; // Show iPhone after loading video so
                                                                 // it doesn't appear choppy first
                                                                 // due to the wrapper not having content
}

function playPauseVideo() {
    if (video.paused) {
        videoCover.style.opacity= 0;
        videoPlayButton.style.opacity = 0;
        video.play();
    } else {
        video.pause();
        videoPlayButton.style.opacity = 1;
    }
}
