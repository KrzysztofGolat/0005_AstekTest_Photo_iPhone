$(function(){

    var date = new Date();
    godzina = date.getHours();     
    minuta = date.getMinutes();
    sekunda = date.getSeconds();
    
    console.log (godzina, minuta, sekunda);
    
    var pozostaleGodziny = 24 - godzina - 1;
    var pozostaleMinuty = 60 - minuta - 1;
    var pozostaleSekundy = 60 - sekunda - 1;
        
    console.log(pozostaleGodziny, pozostaleMinuty, pozostaleSekundy);

   $('#counter_2').countdown({
        image: 'img/digits.png',
//        startTime: '9:22:27',
        startTime: pozostaleGodziny+':'+pozostaleMinuty+':'+pozostaleSekundy,
        timerEnd: function(){ alert('end!'); },
        format: 'hh:mm:ss'
   });
});