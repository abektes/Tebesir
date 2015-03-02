$(function() {
    var $el, leftPos, newWidth;
     /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#nav-outer").append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
    
    $magicLine.width($(".active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#nav-outer li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
});