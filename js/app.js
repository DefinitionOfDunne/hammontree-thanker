/*--- Display information modal box ---*/
$("#scott-circle").click(function() {
    $("#scott-message").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$(".hide-message").click(function() {
    $("#scott-message").fadeOut(1000);
});

/*--- Display information modal box ---*/
$("#lynn-circle").click(function() {
    $("#lynn-message").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$(".hide-message").click(function() {
    $("#lynn-message").fadeOut(1000);
});

/*--- Display information modal box ---*/
$("#holden-circle").click(function() {
    $("#holden-message").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$(".hide-message").click(function() {
    $("#holden-message").fadeOut(1000);
});

/*--- Display information modal box ---*/
$("#claire-circle").click(function() {
    $("#claire-message").fadeIn(1000);
});

/*--- Hide information modal box ---*/
$(".hide-message").click(function() {
    $("#claire-message").fadeOut(1000);
});





var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '270',
        width: '480',
        videoId: 'W9n6yhmqyF0',
        events: {
        }
    });
}





function stopVideo() {
    player.stopVideo();
}
