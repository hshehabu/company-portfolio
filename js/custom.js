$(document).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.js-fh5co-nav-toggle').removeClass('active');
    });
}); 