$('.prev').click(
    function() {
        $('.active').animate({left: '100%'}, 1000, function(){
            $(this).removeClass('active');
            $(this).css({left: '0'});
        });
        
        var $poprzedniSlajd = $('.active').prev('.slide');
        if(!$poprzedniSlajd.length) { 
            $poprzedniSlajd = $('.active').nextAll('.slide').last();
        }
        
        console.log($poprzedniSlajd);
        
        $poprzedniSlajd.css({left: '-100%' }).addClass('active').animate({ left: '0' }, 1000);
    }
)