$(document).ready(function() {
    // Slideout Left
    var slideoutLeft = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('left-menu'),
        'padding': 256,
        'tolerance': 70
    });

    // Toggle button
    $('#left-nav').click(function() {
        $('#right-menu').addClass('hide');
        $('#left-menu').removeClass('hide');
        slideoutLeft.toggle();
    });

    // Slideout Right
    var slideoutRight = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('right-menu'),
        'padding': 256,
        'tolerance': 70,
        'side': 'right'
    });

    // Toggle button
    $('#right-nav').click(function() {
        $('#left-menu').addClass('hide');
        $('#right-menu').removeClass('hide');
        slideoutRight.toggle();
    });
    
    // Register tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Event for arrow history list
//    $('.coll').click(function() {        
//        var t = $(this).children().find('.ion-chevron-right');
//        if(t.length==1) {
//            $(this).children().find('.arrow').removeClass('ion-chevron-right');
//            $(this).children().find('.arrow').addClass('ion-chevron-down');
//        } else {
//            $(this).children().find('.arrow').removeClass('ion-chevron-down');
//            $(this).children().find('.arrow').addClass('ion-chevron-right');
//        }
//    });
});