


var lastValue="developer"; //used to prevent duplicate from showing
var value="developer";
function myFunction(){
    var pickOne=['developer','builder','designer','artisan','pupil','architect','mason','contractor','craftsman'];



    while(value ==lastValue){
        value   = pickOne[Math.floor(Math.random() * pickOne.length)];
    }
    lastValue=value;
    $('#rotate').fadeOut('slow',function(){$('#rotate').text(value);});

    $('#rotate').fadeIn('slow').show();


}


(function($) {

    $(document.body).fadeIn(1200);

})(jQuery);
$(document).ready(function() {

    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
    setInterval(myFunction, 3000);
});