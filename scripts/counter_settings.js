$(function(){

    var date = new Date();
    godzina = date.getHours();     
    minuta = date.getMinutes();
    sekunda = date.getSeconds();
    
    var pozostaleGodziny = 24 - godzina - 1;
    var pozostaleMinuty = 60 - minuta - 1;
    var pozostaleSekundy = 60 - sekunda - 1;
        
    $('#counter_2').countdown({
        image: 'img/digits.png',
        startTime: pozostaleGodziny+':'+pozostaleMinuty+':'+pozostaleSekundy,
        timerEnd: function(){ alert('end!'); },
        format: 'hh:mm:ss'
    });
});