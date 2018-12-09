
$(window).scroll(function(){
    $('.plot').each(function(){
    if(isScrolledIntoView($(this))){
        // $(this).children('span').text('visible');
        console.log("Scrolled to " + this.id);
        $(this).load('./plotly/' + this.id + '.html',function(){console.log('loaded ' + this.id)});
        $(this).removeClass("plot");
        
    }
    });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop + 500));
}
