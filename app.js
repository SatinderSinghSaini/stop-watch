var hr=0 , min=0, sec=0;
var timer
var stopFlag = true;
const time = document.getElementById('stopwatch');
var start = function(){
    if(stopFlag){
        stopFlag = false;
        runTimer();
    }            
}
let runTimer = function(){
    if(!stopFlag){
        if(sec<60) sec++;
        if(sec === 60){
            sec = 0;
            min++;
        }
        if(min === 60){
            min = 0;
            hr++;
        }
        let s,m,h;
        if(sec<10) s = '0' + sec;
        if(sec>=10) s = sec.toString();
        if(min<10) m = '0' + min;
        if(min>=10) m = min.toString();

        if(hr<10) h = '0' + hr;
        if(hr>=10) h = hr.toString();
        let val = h+':'+m+':'+s;
        document.getElementById('stopwatch').innerHTML = val;
        timer = setTimeout(runTimer, 1000);
    }
}

var stop = function(){
    clearTimeout(timer);
    stopFlag = true
}

var reset = function(){
    clearTimeout(timer);
    stopFlag = true;
    hr = 0 , min = 0, sec = 0;
    document.getElementById('stopwatch').innerHTML = '00:00:00';
        
}