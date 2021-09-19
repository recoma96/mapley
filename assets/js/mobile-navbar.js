$('#mobile-navbar-button').click(() => {
    if($('.contents-drawer').css("display") == "none") {
        $('.contents-drawer').fadeIn();
        $('.contents-drawer').css('position', "fixed");
    } else {
        $('.contents-drawer').fadeOut();
    }
});