$(document).ready(function () {

    var wysokosc = $('.slider').height();
    var szerokosc = $('.slider').width();

    $('.slider').css({height: wysokosc + 'px'});
    $('.slide').css({width: szerokosc + 'px', position: 'absolute'});

    $('.prev').click(
        function() {
            $('.active').animate({left: '100%'}, 600, function(){
                $(this).removeClass('active');
                $(this).css({left: '0'});
            });

            var $poprzedniSlajd = $('.active').prev('.slide');
            if(!$poprzedniSlajd.length) { 
                $poprzedniSlajd = $('.active').nextAll('.slide').last();
            }

            console.log($poprzedniSlajd);

            $poprzedniSlajd.css({left: '-100%' }).addClass('active').animate({ left: '0' }, 600);
        }
    )

    $('.next').click(
        function() {
            $('.active').animate({right: '100%'}, 600, function(){
                $(this).removeClass('active');
                $(this).css({left: '0'});
            });

            var $nastepnySlajd = $('.active').next('.slide');
            if(!$nastepnySlajd.length) { 
                $nastepnySlajd = $('.active').nextAll('.slide').first();
            }

            console.log($nastepnySlajd);

            $nastepnySlajd.css({left: '-100%' }).addClass('active').animate({ left: '0' }, 600);
        }
    )
    
};