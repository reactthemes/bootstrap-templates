(function($){
    "use strict";

    var date = new Date();
    var year = date.getFullYear();
    $('#copyright_year').text(year);

    $(window).load(function(){
        setTimeout( hideLoader , 1000)
    });

    function hideLoader() {
        $('#loader-container').fadeOut("slow")
    }    
})(jQuery);
